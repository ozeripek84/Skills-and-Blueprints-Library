"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import {
  SCROLL_STATES,
  MOBILE_SCALE_FACTOR,
  MOBILE_POSITION_FACTOR,
} from "./scrollStates";
import {
  lockScroll,
  unlockScroll,
  markTexturesReady,
  onIntroStart,
} from "@/lib/sceneReady";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Materials whose name (or owning mesh's name) contains one of these
// substrings are treated as real glass: kept transparent with low opacity.
// Everything else is forced fully opaque — that's what kills the GLB's
// x-ray look (alphaMode:BLEND + doubleSided exported on body parts).
const GLASS_NAME_HINTS = [
  "glass",
  "crystal",
  "optic",
  "lens_front",
  "lensfront",
  "lens_glass",
  "lensglass",
];

function isGlassMaterial(matName: string, meshName: string): boolean {
  const n = ((matName || "") + " " + (meshName || "")).toLowerCase();
  return GLASS_NAME_HINTS.some((h) => n.includes(h));
}

type PhysicalLike = THREE.MeshStandardMaterial & {
  transmission?: number;
  thickness?: number;
};

export default function CameraModel() {
  const groupRef = useRef<THREE.Group>(null);
  // Capture the full GLTF (not just .scene) so we can reach into .parser
  // to rescue textures stored under the deprecated spec-glossiness extension.
  const gltf = useGLTF("/models/camera.glb") as unknown as {
    scene: THREE.Object3D;
    parser: {
      json: any;
      getDependency: (type: string, index: number) => Promise<unknown>;
    };
  };
  const scene = gltf.scene;
  const { size } = useThree();

  // Normalize the loaded GLTF:
  //   1. Center on origin and uniformly scale so max dim = 1 unit
  //      (keeps SCROLL_STATES poses model-agnostic).
  //   2. Fix the alphaMode:BLEND + doubleSided:true x-ray artifact.
  //      The glTF spec maps those flags to material.transparent=true and
  //      side=DoubleSide, which makes the body render translucent with
  //      back-faces visible. We CLONE each material (so we don't pollute
  //      drei's GLTF cache across HMR) then force opaque/front-side/depth
  //      writes. All texture maps stay attached because clone() copies
  //      their references, not the underlying images.
  const normalized = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const sizeVec = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z) || 1;
    const fit = 1 / maxDim;

    cloned.position.sub(center).multiplyScalar(fit);
    cloned.scale.setScalar(fit);

    // Material normalization — fix transparency/depth/side ONLY.
    // We do NOT replace materials or touch textures, base color, roughness,
    // metalness or any texture maps. We also clone the material so the
    // shared cache stays clean.
    const clonedMats = new WeakMap<THREE.Material, THREE.Material>();

    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const replaceOne = (mat: THREE.Material): THREE.Material => {
        if (!mat) return mat;
        let next = clonedMats.get(mat);
        if (!next) {
          next = mat.clone();
          // Keep the same name for debugging continuity
          next.name = mat.name;
          clonedMats.set(mat, next);
        }

        const std = next as PhysicalLike;
        const glass = isGlassMaterial(mat.name, child.name);

        if (glass) {
          // Real front lens element: allow transparency but with proper
          // depth handling so it composites against body parts behind it.
          next.transparent = true;
          next.opacity = 0.35;
          next.depthWrite = false;
          next.depthTest = true;
          next.side = THREE.FrontSide;
          next.alphaTest = 0;
          if ("roughness" in std) std.roughness = 0.05;
          if ("metalness" in std) std.metalness = 0;
        } else {
          // Body / lens barrel / dials / grip: force fully opaque. This is
          // the line that actually kills the x-ray. Clamp roughness and
          // metalness into a sensible PBR range so the body reads as
          // black plastic/metal and not a clay shader if the .glb shipped
          // weird PBR values.
          next.transparent = false;
          next.opacity = 1;
          next.depthWrite = true;
          next.depthTest = true;
          next.side = THREE.FrontSide;
          next.alphaTest = 0;
          if ("transmission" in std) std.transmission = 0;
          // Tighter PBR clamps so the body picks up real specular highlights
          // from the HDR. Lowering the upper roughness bound (0.65 → 0.5)
          // is what gives the lens barrel + body that glossy product-render
          // sheen. Raising the metalness floor (0.1 → 0.15) sharpens the
          // catchlight on the chrome dial and the red ring edge.
          if ("roughness" in std && typeof std.roughness === "number") {
            std.roughness = Math.min(0.5, Math.max(0.3, std.roughness));
          }
          if ("metalness" in std && typeof std.metalness === "number") {
            std.metalness = Math.min(0.45, Math.max(0.15, std.metalness));
          }
        }
        next.needsUpdate = true;

        // Diagnostic — what the .glb actually shipped + which branch we
        // took. Watch this in the browser console to spot any material
        // that needs to be added to GLASS_NAME_HINTS.
        const orig = mat as PhysicalLike;
        // eslint-disable-next-line no-console
        console.log("[GLB material]", {
          mesh: child.name,
          material: mat.name,
          branch: glass ? "GLASS (kept transparent)" : "SOLID (forced opaque)",
          wasTransparent: mat.transparent,
          wasOpacity: mat.opacity,
          wasSide: mat.side,
          wasDepthWrite: mat.depthWrite,
          color: orig.color?.getHexString?.(),
          transmission: orig.transmission ?? 0,
          roughness: orig.roughness ?? null,
          metalness: orig.metalness ?? null,
          hasMap: !!orig.map,
          hasNormal: !!orig.normalMap,
        });

        return next;
      };

      if (Array.isArray(child.material)) {
        child.material = child.material.map(replaceOne);
      } else if (child.material) {
        child.material = replaceOne(child.material);
      }
    });

    return cloned;
  }, [scene]);

  // ---- Texture rescue (the real fix for the gray-clay look) ----
  //
  // The .glb's only material ("DSLR") is authored with the legacy glTF
  // extension KHR_materials_pbrSpecularGlossiness, which stores:
  //   diffuseTexture                – the actual albedo/colour
  //   specularGlossinessTexture     – specular RGB + glossiness alpha
  //   normalTexture                 – tangent-space normals
  //
  // Three.js's GLTFLoader removed built-in support for that extension in
  // r152+. With no handler registered, the loader silently constructs a
  // default MeshStandardMaterial with `map = null`. That's why the body
  // renders as flat white-grey "clay": the textures inside the GLB are
  // never wired up. (You can confirm in the [GLB material] console log
  // above — hasMap and hasNormal both come through as false.)
  //
  // Fix: the texture *pixels* are still embedded in the GLB's bufferViews,
  // so we ask the GLTFParser to load them by index. parser.getDependency
  // ('texture', i) runs the same code path the loader normally uses
  // (correct sampler, flipY, image decoding) — we just attach the result
  // to the cloned materials ourselves and tag the colour spaces.
  useEffect(() => {
    const parser = gltf.parser;
    if (!parser?.json?.materials?.length) return;

    const mat0 = parser.json.materials[0];
    const specGloss = mat0?.extensions?.KHR_materials_pbrSpecularGlossiness;
    const diffuseIdx: number | undefined = specGloss?.diffuseTexture?.index;
    const normalIdx: number | undefined = mat0?.normalTexture?.index;

    if (typeof diffuseIdx !== "number") {
      // eslint-disable-next-line no-console
      console.warn(
        "[CameraModel] GLB has no spec-gloss diffuseTexture; texture rescue skipped."
      );
      return;
    }

    let cancelled = false;
    Promise.all([
      parser.getDependency("texture", diffuseIdx) as Promise<THREE.Texture>,
      typeof normalIdx === "number"
        ? (parser.getDependency("texture", normalIdx) as Promise<THREE.Texture>)
        : Promise.resolve<THREE.Texture | null>(null),
    ]).then(([diffuse, normal]) => {
      if (cancelled) return;

      // Colour textures must be sRGB or they decode washed out / desaturated.
      diffuse.colorSpace = THREE.SRGBColorSpace;
      diffuse.needsUpdate = true;
      diffuse.name ||= "DSLR_diffuse";

      if (normal) {
        // Normal maps are linear data — must NOT be tagged sRGB.
        normal.colorSpace = THREE.NoColorSpace;
        normal.needsUpdate = true;
        normal.name ||= "DSLR_normal";
      }

      // Wire the rescued maps onto every cloned material on the model.
      // Skip the glass branch — real lens glass should stay clear.
      normalized.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        const mats = Array.isArray(child.material)
          ? child.material
          : [child.material];

        mats.forEach((m) => {
          const std = m as THREE.MeshStandardMaterial;
          if (!std) return;
          if (isGlassMaterial(std.name, child.name)) return;

          std.map = diffuse;
          if (normal) std.normalMap = normal;
          // Keep base color at white — multiplying white * map = the
          // texture unmodified. We never paint over the .glb's colour.
          std.needsUpdate = true;

          // eslint-disable-next-line no-console
          console.log("[CameraModel] texture wired", {
            mesh: child.name,
            material: std.name,
            hasMap: !!std.map,
            mapColorSpace: std.map?.colorSpace,
            hasNormal: !!std.normalMap,
            color: std.color?.getHexString?.(),
          });
        });
      });

      // Signal the loading screen: textures are wired, the model is
      // ready to be revealed. This is the authoritative "done" signal
      // — useProgress alone briefly hits 100% before this resolves.
      markTexturesReady();
    });

    return () => {
      cancelled = true;
    };
  }, [gltf, normalized]);

  useLayoutEffect(() => {
    const g = groupRef.current;
    if (!g) return;

    // Bind a non-null local for the nested onComplete closure — TypeScript
    // narrowing from `if (!g) return` doesn't carry into the inner function
    // declaration.
    const group = g;

    // Scroll is already locked by LoadingScreen at page-mount time, but
    // call lockScroll() defensively here too. The lib implementation is
    // idempotent (early-returns if already locked) so this is free
    // insurance against the unlikely case that CameraModel mounts
    // standalone (e.g., a future route that skips the loading screen).
    lockScroll();

    // Track the intro-start subscription so we can clean it up if the
    // component unmounts before LoadingScreen ever fires the signal
    // (HMR, route change, StrictMode unmount-remount).
    let cancelIntroSub: (() => void) | null = null;

    const ctx = gsap.context((self) => {
      // 1023px breakpoint kapsar: mobil (≤767) + tablet (768-1023).
      // Tablette de mobil position/scale factor'ları uygulanıyor.
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const ps = isMobile ? MOBILE_POSITION_FACTOR : 1;
      const ss = isMobile ? MOBILE_SCALE_FACTOR : 1;
      // Mobilde camera'yı dikey olarak biraz yukarı çek. +0.3 world unit
      // ≈ 5vh ekran yükselmesi. State 5 (final) için kritik — kamera
      // canvas içinde üst-orta'da oturur, altındaki text bloğuna 2-3vh
      // boşluk bırakır. Önce 0.5 idi (üst state'te beyaz crop), 0.2 idi
      // (kamera çok aşağıda, text ile bitişik). 0.3 dengeli orta nokta.
      const yOffset = isMobile ? 0.3 : 0;
      const hero = SCROLL_STATES[0];

      // ---------- INTRO: slow Y-axis turntable into the hero pose ----------
      //
      // The reference (camera-webgi.vercel.app) doesn't slide the camera
      // across the screen — the model is ALREADY in roughly the hero
      // position on load, and rotates on its own Y axis into the final
      // composition like a slow product turntable. We replicate that:
      // position stays at the hero pose (NO X slide), only rotation.y is
      // offset, and the intro is just a long sine-eased rotation.
      //
      // Start values (set synchronously in useLayoutEffect so they land
      // before the first paint — no flash of default (0,0,0) transforms):
      //   position : EXACTLY hero.position (no slide)
      //   ry       : hero.ry + 2.5  (~143° MORE turned — lens points
      //                              roughly to viewer-right; we see the
      //                              right side / back-3/4 of the body
      //                              at the start of the rotation)
      //   scale    : EXACTLY hero.scale (no scale pop)
      g.position.set(
        hero.position[0] * ps,
        hero.position[1] * ps + yOffset,
        hero.position[2] * ps
      );
      g.rotation.set(
        hero.rotation[0],
        hero.rotation[1] + 2.5,
        hero.rotation[2]
      );
      g.scale.setScalar(hero.scale * ss);

      // Hide hero text immediately so it doesn't flash visible before
      // fade-in. gsap.set inside the context fires synchronously, before
      // the first browser paint.
      gsap.set("[data-hero-text]", { opacity: 0, y: 22 });

      // Intro timeline — built PAUSED. We will play it only when
      // LoadingScreen signals (via the `lumen:introStart` event) that
      // it has finished fading out. This guarantees the camera doesn't
      // start rotating until the loading screen is no longer visible.
      //
      // On complete:
      //   1. unlockScroll() — user can interact now.
      //   2. Hand off to the scroll-driven timeline. Wrapped in self.add
      //      so the new ScrollTrigger is owned by this gsap.context and
      //      gets killed by ctx.revert() on unmount.
      // Order matters: unlock BEFORE buildScrollTimeline so the
      // ScrollTrigger.refresh() at the end measures the page in its
      // unlocked layout state.
      const intro = gsap.timeline({
        paused: true,
        onComplete: () => {
          unlockScroll();
          self.add(() => buildScrollTimeline());
        },
      });

      // Wait for LoadingScreen's fade-out signal before playing the
      // intro. onIntroStart fires immediately (via microtask) if the
      // signal has already been dispatched, so this is HMR-safe.
      cancelIntroSub = onIntroStart(() => intro.play());

      // Turntable rotation — only the Y axis moves on the model. The
      // ~143° sweep (2.5 rad) lands exactly on hero.rotation.y, giving
      // the lens a slow "rotating into view" reveal. sine.inOut keeps
      // both ends of the motion gentle (no sudden start, no sudden stop)
      // for that premium product-shot turntable feel. Position is held
      // constant in this tween — there is no X slide, only rotation.
      intro.to(
        g.rotation,
        {
          y: hero.rotation[1],
          duration: 3.6,
          ease: "sine.inOut",
        },
        0
      );

      // Hero text reveals at ~1.8s — after the camera has clearly begun
      // rotating into frame but with ~1.8s of intro still to go, so the
      // text has time to settle in before the model lands. Stagger up.
      intro.to(
        "[data-hero-text]",
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power2.out",
        },
        1.8
      );

      // ---------- SCROLL: single continuous timeline ----------
      //
      // Built only AFTER the intro completes, so its first tween's
      // "from" value snapshots from the real hero pose (where the
      // intro just landed) — zero jump at the handoff.
      //
      // One timeline, one playhead bound to scroll, ease: "none" on
      // each segment because `scrub` itself provides the cinematic
      // smoothing (stacking a curve on top is what makes it feel robotic).
      function buildScrollTimeline() {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            // Heavier scrub = more smoothing lag. The playhead trails the
            // scroll position by ~1.5s, so fast scroll bursts produce
            // slow, controlled rotation that catches up gradually after
            // the user stops. This is the main "cinematic damping" lever.
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < SCROLL_STATES.length; i++) {
          const next = SCROLL_STATES[i];
          const at = i - 1;
          tl.to(
            group.position,
            {
              x: next.position[0] * ps,
              y: next.position[1] * ps + yOffset,
              z: next.position[2] * ps,
            },
            at
          )
            .to(
              group.rotation,
              {
                x: next.rotation[0],
                y: next.rotation[1],
                z: next.rotation[2],
              },
              at
            )
            .to(
              group.scale,
              {
                x: next.scale * ss,
                y: next.scale * ss,
                z: next.scale * ss,
              },
              at
            );
        }

        ScrollTrigger.refresh();
      }
    });

    return () => {
      // Defensive on every unmount path (HMR, route change, StrictMode
      // double-mount in dev). All three calls are idempotent:
      //   - cancelIntroSub() removes the event listener if intro never
      //     started (otherwise it's already a no-op via { once: true }).
      //   - unlockScroll() restores overflow if we still hold the lock.
      //   - ctx.revert() kills every GSAP tween / ScrollTrigger created
      //     inside this context, INCLUDING the scroll timeline that
      //     was added via self.add() in onComplete.
      cancelIntroSub?.();
      unlockScroll();
      ctx.revert();
    };
  }, []);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={normalized} />
    </group>
  );
}

useGLTF.preload("/models/camera.glb");

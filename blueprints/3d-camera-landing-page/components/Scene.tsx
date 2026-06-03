"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import CameraModel from "./CameraModel";
import ProceduralEnvironment from "./ProceduralEnvironment";

export default function Scene() {
  // Mobil + tablet (<1024px) için pahalı GPU ayarlarını kısıyoruz.
  // Lighthouse mobile testinde bunların TOPLAMI ciddi puan getiriyor:
  //   - DPR cap: fragment shader sayısını %60+ azaltır
  //   - antialias kapatma: ~%20-30 ek GPU maliyetini siler
  //   - low-power GPU: integrated GPU + thermal throttling azalır
  //   - 3. ışık (rim) atlanır: her fragment için ekstra shader hesabı
  //   - Environment HDR atlanır: ~500KB-1MB HDR indirme + PMREM işleme
  //     yok → LCP / TTI ciddi düşer
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1023px)").matches;
  }, []);

  return (
    <Canvas
      // DPR: retina mobilde varsayılan 2-3x = piksel başına 4-9 kat
      // shader işi. Mobilde 1.1'e cap = %60+ daha az fragment shader.
      dpr={isMobile ? [0.85, 1.1] : [1, 2]}
      gl={{
        // Antialias mobilde ~%20-30 ekstra GPU maliyeti getiriyor;
        // küçük ekranda zaten az fark ediyor → mobilde kapat.
        antialias: !isMobile,
        alpha: true,
        // low-power → integrated GPU tercih, batarya tasarrufu ve
        // daha az thermal throttling (mobilde devamlı FPS düşüşü).
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        // Mobilde HDR atlandığı için exposure'ı bir tık düşür ki
        // ambient'la beraber overexposure olmasın.
        gl.toneMappingExposure = isMobile ? 1.2 : 1.28;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={32} />

      {/* --- 3-light product studio rig --- */}

      {/* ProceduralEnvironment artık mobilde de IBL veriyor, dolayısıyla
          ambient'a aynı 0.22'yi koyabiliyoruz (önce 0.35 idi çünkü IBL
          yoktu). Çok yüksek ambient flat-shading'e götürür. */}
      <ambientLight intensity={0.22} />

      {/* KEY — angled softbox from the LEFT side, only slightly elevated.
          Rakes across the lens barrel ribs and catches the red ring. */}
      <directionalLight position={[-6, 3, 5]} intensity={1.7} color="#ffffff" />

      {/* FILL — softer light from front-RIGHT to lift the shadow side
          of the body so the EOS / 5D / Canon text stays legible. */}
      <directionalLight position={[5, 2, 4]} intensity={0.6} color="#ffffff" />

      {/* RIM — sadece desktop'ta. Mobilde her ekstra ışık = her
          fragment için ekstra shader hesabı. Kaldırınca silhouette
          ayrımı bir tık azalır ama performans önce. */}
      {!isMobile && (
        <directionalLight position={[3, 3, -6]} intensity={1.4} color="#e6efff" />
      )}

      <Suspense fallback={null}>
        {/* Desktop: HDR preset (~500KB indirme, premium reflection).
            Mobil: ProceduralEnvironment — Three.js'in dahili
            RoomEnvironment'ı PMREM ile bake edip cubemap üretir. Network 0,
            ~5kB JS, ~50ms init. Lens cam yüzeyi artık siyaha crush
            olmuyor; HDR'ye çok yakın bir glossy görünüm veriyor. */}
        {isMobile ? (
          <ProceduralEnvironment intensity={1.0} />
        ) : (
          <Environment preset="studio" environmentIntensity={1.35} />
        )}
        <CameraModel />
      </Suspense>
    </Canvas>
  );
}

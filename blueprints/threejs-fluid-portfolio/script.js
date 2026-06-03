// script.js — Three.js fluid trail reveal for the hero canvas.
//
// Architecture
// ────────────
//  - Two ping-pong WebGLRenderTargets (simSize × simSize, RGBA float)
//    hold the trail mask. Each frame we read from one and write into
//    the other, advecting nothing and simply decaying the previous
//    frame while painting a fresh soft line between prevMouse and
//    mouse. This produces a slowly-fading scribble in the red channel.
//  - The display pass reads that mask and uses it to fade between the
//    top portrait (default) and the bottom portrait (where mask > thr).
//    A subtle gray halo is applied to the top image just outside the
//    reveal edge so motion is visible before the image swaps.
//  - When the real cursor goes idle (>2.5s) a synthetic cursor takes
//    over, layered on incommensurate sine frequencies for an organic,
//    non-repeating path that never spikes off-canvas. The user always
//    wins: any real mousemove drops idleTime to ~0 next frame.

import * as THREE from 'three';
import {
  vertexShader,
  fluidFragmentShader,
  displayFragmentShader,
} from './shaders.js';

const CONFIG = {
  // Simulation render-target size (square, ping-pong)
  simSize: 500,
  // Trail mask falloff
  decay: 0.97,
  lineWidth: 0.09,
  perFrameIntensity: 0.3,
  // Reveal threshold (display shader)
  revealThreshold: 0.02,
  edgeWidthBase: 0.004,
  // Soft gray halo overlay (display shader)
  haloUpperMul: 2.0,
  haloMixStrength: 0.35,
  haloGray: [0.12, 0.12, 0.12],
  // Idle auto-trail
  idleThresholdMs: 2500,
  idleEaseInMs: 1500,
  autoLerp: 0.05,
  // Mouse stop detection
  stopAfterMs: 50,
  // Max texture size
  maxTextureSize: 4096,
};

// ───────────── DOM / Renderer ─────────────

const canvas = document.querySelector('.hero .hero-canvas');
if (!canvas) {
  console.error('[noema] Hero canvas not found — aborting WebGL boot.');
}

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  precision: 'highp',
  alpha: false,
});
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

const scene = new THREE.Scene();
const simScene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// ───────────── Ping-pong render targets ─────────────

function makeTarget() {
  return new THREE.WebGLRenderTarget(CONFIG.simSize, CONFIG.simSize, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
    depthBuffer: false,
    stencilBuffer: false,
  });
}

const pingPong = [makeTarget(), makeTarget()];

// Clear both targets to black once at startup so the first frame reads
// from a well-defined zero mask rather than uninitialised memory.
for (const target of pingPong) {
  renderer.setRenderTarget(target);
  renderer.setClearColor(0x000000, 1);
  renderer.clear();
}
renderer.setRenderTarget(null);

let currentTarget = 0;

// ───────────── Mouse / input state ─────────────

const mouse = new THREE.Vector2(0.5, 0.5);
const prevMouse = new THREE.Vector2(0.5, 0.5);
let isMoving = false;
let lastMoveTime = 0;

// Synthetic-cursor state (idle auto-trail)
const autoMouse = new THREE.Vector2(0.5, 0.5);
const prevAutoMouse = new THREE.Vector2(0.5, 0.5);

// ───────────── Textures (placeholders + real loads) ─────────────

function makeFlatTexture(color) {
  const c = document.createElement('canvas');
  c.width = c.height = 4;
  const ctx = c.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 4, 4);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

// Paper-tone placeholders so the canvas matches the page palette on
// first paint — no jarring red/blue flash before portraits load.
let topTexture = makeFlatTexture('#ece9e1');
let bottomTexture = makeFlatTexture('#ece9e1');
const topTextureSize = new THREE.Vector2(1, 1);
const bottomTextureSize = new THREE.Vector2(1, 1);

function loadPortrait(src, onReady) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    let w = img.naturalWidth;
    let h = img.naturalHeight;
    let source = img;

    if (w > CONFIG.maxTextureSize || h > CONFIG.maxTextureSize) {
      const scale = CONFIG.maxTextureSize / Math.max(w, h);
      const dw = Math.floor(w * scale);
      const dh = Math.floor(h * scale);
      const off = document.createElement('canvas');
      off.width = dw;
      off.height = dh;
      off.getContext('2d').drawImage(img, 0, 0, dw, dh);
      source = off;
      w = dw;
      h = dh;
    }

    const tex = new THREE.CanvasTexture(source);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    // No sRGB tagging — we want the PNG's raw colours to land on screen
    // unchanged. Tagging the texture as sRGB would make Three.js decode
    // it to linear space on sample, and since this is a custom
    // ShaderMaterial (no automatic encoding pass on output), the result
    // would look washed-out / grey. Sampling as-is preserves the source.
    tex.needsUpdate = true;
    onReady(tex, w, h);
  };
  img.onerror = (e) => {
    console.warn(`[noema] failed to load portrait: ${src}`, e);
  };
  img.src = src;
}

loadPortrait('/portrait_top.png', (tex, w, h) => {
  topTexture = tex;
  topTextureSize.set(w, h);
  displayMaterial.uniforms.uTopTexture.value = topTexture;
  displayMaterial.uniforms.uTopTextureSize.value = topTextureSize;
  console.log(`[noema] loaded portrait_top.png (${w}×${h})`);
});

loadPortrait('/portrait_bottom.png', (tex, w, h) => {
  bottomTexture = tex;
  bottomTextureSize.set(w, h);
  displayMaterial.uniforms.uBottomTexture.value = bottomTexture;
  displayMaterial.uniforms.uBottomTextureSize.value = bottomTextureSize;
  console.log(`[noema] loaded portrait_bottom.png (${w}×${h})`);
});

// ───────────── Materials ─────────────

const planeGeo = new THREE.PlaneGeometry(2, 2);

const trailsMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader: fluidFragmentShader,
  uniforms: {
    uPrevTrails: { value: null },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uPrevMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    uDecay: { value: CONFIG.decay },
    uIsMoving: { value: false },
  },
});

const displayMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader: displayFragmentShader,
  uniforms: {
    uFluid: { value: null },
    uTopTexture: { value: topTexture },
    uBottomTexture: { value: bottomTexture },
    uTopTextureSize: { value: topTextureSize },
    uBottomTextureSize: { value: bottomTextureSize },
    uResolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    uDpr: { value: renderer.getPixelRatio() },
  },
});

const simMesh = new THREE.Mesh(planeGeo, trailsMaterial);
simScene.add(simMesh);

const displayMesh = new THREE.Mesh(planeGeo, displayMaterial);
scene.add(displayMesh);

// ───────────── Input handlers ─────────────

function updateFromClientXY(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const inside =
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom;

  if (!inside) {
    // Cursor outside the hero — pause user input contribution.
    // Crucially we do NOT update lastMoveTime, so the auto trail can
    // keep running while the cursor is over other sections.
    isMoving = false;
    return;
  }

  const nx = (clientX - rect.left) / rect.width;
  const ny = (clientY - rect.top) / rect.height;

  prevMouse.copy(mouse);
  mouse.x = nx;
  mouse.y = 1 - ny; // flip to match texture orientation
  isMoving = true;
  lastMoveTime = performance.now();
}

window.addEventListener(
  'mousemove',
  (e) => updateFromClientXY(e.clientX, e.clientY),
  { passive: true }
);

canvas.addEventListener(
  'touchmove',
  (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const t = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const inside =
      t.clientX >= rect.left &&
      t.clientX <= rect.right &&
      t.clientY >= rect.top &&
      t.clientY <= rect.bottom;
    if (inside) e.preventDefault();
    updateFromClientXY(t.clientX, t.clientY);
  },
  { passive: false }
);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  displayMaterial.uniforms.uResolution.value.set(
    window.innerWidth,
    window.innerHeight
  );
  trailsMaterial.uniforms.uResolution.value.set(
    window.innerWidth,
    window.innerHeight
  );
  displayMaterial.uniforms.uDpr.value = renderer.getPixelRatio();
});

// ───────────── Render loop ─────────────

function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  if (isMoving && now - lastMoveTime > CONFIG.stopAfterMs) {
    isMoving = false;
  }

  const idleTime = now - lastMoveTime;
  const autoActive = idleTime > CONFIG.idleThresholdMs;

  // Ping-pong swap: read from prevTarget, write into writeTarget.
  const prevTarget = pingPong[currentTarget];
  currentTarget = (currentTarget + 1) % 2;
  const writeTarget = pingPong[currentTarget];

  trailsMaterial.uniforms.uPrevTrails.value = prevTarget.texture;

  if (autoActive) {
    const easeIn = Math.min(
      1,
      (idleTime - CONFIG.idleThresholdMs) / CONFIG.idleEaseInMs
    );

    // Layered low-frequency sines on incommensurate frequencies — the
    // resulting path is organic, never repeats, never spikes off-canvas.
    const t = now * 0.001;
    const targetX =
      0.5 + 0.3 * Math.sin(t * 0.41) + 0.12 * Math.sin(t * 0.93 + 1.3);
    const targetY =
      0.5 + 0.28 * Math.cos(t * 0.37 + 0.5) + 0.1 * Math.cos(t * 1.11 + 2.7);

    prevAutoMouse.copy(autoMouse);
    autoMouse.x += (targetX - autoMouse.x) * CONFIG.autoLerp * easeIn;
    autoMouse.y += (targetY - autoMouse.y) * CONFIG.autoLerp * easeIn;

    trailsMaterial.uniforms.uMouse.value.copy(autoMouse);
    trailsMaterial.uniforms.uPrevMouse.value.copy(prevAutoMouse);
    trailsMaterial.uniforms.uIsMoving.value = true;

    // Mirror auto into the real-mouse state so the next real move
    // continues from where auto left off — no stale long segment on
    // the handoff frame.
    mouse.copy(autoMouse);
    prevMouse.copy(prevAutoMouse);
  } else {
    trailsMaterial.uniforms.uMouse.value.copy(mouse);
    trailsMaterial.uniforms.uPrevMouse.value.copy(prevMouse);
    trailsMaterial.uniforms.uIsMoving.value = isMoving;

    // Mirror real into auto so when the user goes idle next, auto
    // resumes from their last cursor position rather than the centre.
    autoMouse.copy(mouse);
    prevAutoMouse.copy(mouse);
  }

  // Simulation pass: write the new trail mask.
  renderer.setRenderTarget(writeTarget);
  renderer.render(simScene, camera);

  // Display pass: composite top/bottom/halo using the fresh mask.
  displayMaterial.uniforms.uFluid.value = writeTarget.texture;
  renderer.setRenderTarget(null);
  renderer.render(scene, camera);
}

animate();

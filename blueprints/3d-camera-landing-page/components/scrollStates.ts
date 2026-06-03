// Shared scroll states for the camera model.
// Each entry is the target pose when its section is fully in view.
// position is in world units (model is normalized so max dim ≈ 1 unit).
// rotation is in radians.

export type ScrollState = {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

export const SCROLL_STATES: ScrollState[] = [
  // 0 — Hero: strong 3/4 angle, matching camera-webgi.vercel.app. The lens
  // is the visual anchor but clearly TURNED — front glass + the left side
  // of the barrel are both visible. The body extends to the right edge
  // of the viewport (partially cropped, by design).
  //
  // Geometry note: the GLB's lens points along −Z in object space (state 2
  // confirms — ry = Math.PI puts it head-on). After R_y(ry), the world
  // lens direction is (−sin ry, 0, −cos ry).
  //   ry = Math.PI − 0.7  →  (−0.64, 0, +0.76)
  //   = lens strongly turned toward viewer-LEFT, still facing the viewer.
  // Body extends viewer-RIGHT and away → reference layout.
  {
    id: "hero",
    position: [0.75, 0.08, 0.08],
    rotation: [0.08, Math.PI - 0.82, 0.03],
    scale: 2.08,
  },
  // 1 — First scroll: continuous sweep. Rotation eases from PI − 0.7 to
  // PI − 0.35 (a 0.35 rad continuation in the SAME direction, not a
  // tumble), so the lens swings from the strong 3/4 hero angle toward
  // more head-on as the model glides left + forward and grows. State 2
  // (`front`, ry = PI) is then the natural next step in the same arc.
  {
    id: "closeup",
    position: [-0.75, 0.05, 0.75],
    rotation: [0.05, Math.PI - 0.35, 0.02],
    scale: 2.2,
  },
  // 2 — Front-facing centered, lens straight at viewer
  {
    id: "front",
    position: [-0.3, -0.05, 0.2],
    rotation: [0.02, Math.PI, 0],
    scale: 1.9,
  },
  // 3 — Top/side: lens stretches horizontally, body from top
  {
    id: "top",
    position: [0.0, 0.05, 0.4],
    rotation: [Math.PI / 2 - 0.1, 0.0, Math.PI / 2],
    scale: 1.85,
  },
  // 4 — Back/body: diagonal, lens pointing left
  {
    id: "back",
    position: [0.6, -0.05, 0.0],
    rotation: [-0.1, -1.45, 0.18],
    scale: 1.7,
  },
  // 5 — Final: lens-facing viewer, on the LEFT, but pulled inboard so the
  // body isn't cropped off the left edge. Slight scale-up so the model
  // still feels substantial next to the gallery CTA block on the right.
  {
    id: "final",
    position: [-0.95, -0.05, 0.2],
    rotation: [0.04, Math.PI - 0.45, -0.02],
    scale: 1.95,
  },
];

// Mobile + tablet: position factor 0.1 — neredeyse tam merkez yerleşim.
// Hero "biraz daha sola" → +0.075 (önce +0.11), final text-center ile
// daha hizalı → -0.095 (önce -0.14).
//   hero  x:  0.75 * 0.1 = +0.075  (neredeyse merkez)
//   close x: -0.75 * 0.1 = -0.075
//   final x: -0.95 * 0.1 = -0.095  (hizalı text-center ile)
// Scale 1.1 aynı.
export const MOBILE_SCALE_FACTOR = 1.1;
export const MOBILE_POSITION_FACTOR = 0.1;

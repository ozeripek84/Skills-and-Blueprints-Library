// shaders.js — GLSL programs for the hero fluid-trail reveal.
//
//  - vertexShader: shared full-screen quad pass-through.
//  - fluidFragmentShader: writes the trail mask into a ping-pong target,
//    drawing a soft line between prevMouse and mouse each frame and
//    decaying the previous frame's mask.
//  - displayFragmentShader: composites portrait_top + portrait_bottom
//    on screen, using the trail mask to reveal the bottom image and a
//    soft gray halo to keep the leading edge visible on the top image.

export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fluidFragmentShader = /* glsl */ `
  uniform sampler2D uPrevTrails;
  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform vec2 uResolution;
  uniform float uDecay;
  uniform bool uIsMoving;
  varying vec2 vUv;

  void main() {
    vec4 prev = texture2D(uPrevTrails, vUv);
    float newValue = prev.r * uDecay;

    if (uIsMoving) {
      vec2 dir = uMouse - uPrevMouse;
      float len = length(dir);
      if (len > 0.001) {
        vec2 d = dir / len;
        vec2 toPx = vUv - uPrevMouse;
        float proj = clamp(dot(toPx, d), 0.0, len);
        vec2 closest = uPrevMouse + proj * d;
        float dist = length(vUv - closest);
        float lineWidth = 0.09;
        float intensity = smoothstep(lineWidth, 0.0, dist) * 0.3;
        newValue += intensity;
      }
    }

    gl_FragColor = vec4(newValue, 0.0, 0.0, 1.0);
  }
`;

export const displayFragmentShader = /* glsl */ `
  uniform sampler2D uFluid;
  uniform sampler2D uTopTexture;
  uniform sampler2D uBottomTexture;
  uniform vec2 uResolution;
  uniform vec2 uTopTextureSize;
  uniform vec2 uBottomTextureSize;
  uniform float uDpr;
  varying vec2 vUv;

  // Replicates CSS object-fit: cover for an image of intrinsic size ts
  // displayed into a canvas of size uResolution.
  vec2 getCoverUV(vec2 uv, vec2 ts) {
    if (ts.x < 1.0 || ts.y < 1.0) return uv;
    vec2 s = uResolution / ts;
    float scale = max(s.x, s.y);
    vec2 scaled = ts * scale;
    vec2 offset = (uResolution - scaled) * 0.5;
    return (uv * uResolution - offset) / scaled;
  }

  void main() {
    float fluid = texture2D(uFluid, vUv).r;

    vec2 topUV    = getCoverUV(vUv, uTopTextureSize);
    vec2 bottomUV = getCoverUV(vUv, uBottomTextureSize);

    vec4 topColor    = texture2D(uTopTexture, topUV);
    vec4 bottomColor = texture2D(uBottomTexture, bottomUV);

    float threshold = 0.02;
    float edgeWidth = 0.004 / uDpr;
    float t = smoothstep(threshold, threshold + edgeWidth, fluid);

    // Visible shadow trail — multiplies the top image down where the
    // cursor is passing so the motion reads on a light portrait. The
    // (1.0 - t) gate forces the halo to zero exactly as the reveal
    // takes over, so the bottom image is never dimmed.
    float halo = smoothstep(0.0, threshold * 2.0, fluid) * (1.0 - t);
    vec3 shadowedTop = topColor.rgb * (1.0 - halo * 0.55);

    vec4 finalColor = mix(vec4(shadowedTop, topColor.a), bottomColor, t);
    gl_FragColor = finalColor;
  }
`;

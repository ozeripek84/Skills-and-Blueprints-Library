"use client";

import { useEffect, useState } from "react";
import {
  lockScroll,
  onTexturesReady,
  markIntroStart,
} from "@/lib/sceneReady";

// useProgress'i drei'den ÇIKARDIK — drei'i import etmek transitively
// tüm three.js'i initial bundle'a sokuyordu (~250kB JS). Authoritative
// "ready" sinyali zaten CameraModel'in fırlattığı texturesReady event'i;
// useProgress sadece görsel feedback için kullanılıyordu, indeterminate
// CSS bar animasyonu zaten o feedback'i veriyor.
export default function LoadingScreen() {
  const [texturesReady, setTexturesReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Lock scroll the instant the loading screen mounts. This runs BEFORE
  // any 3D component has a chance to render or its useEffects fire, so
  // the user can never scroll during the loading or intro phases.
  useEffect(() => {
    lockScroll();
    // No cleanup-unlock here on purpose: scroll is unlocked by
    // CameraModel after the intro completes. If we unlocked here on
    // unmount, an HMR remount would leave a window of unlocked scroll
    // before CameraModel's intro re-arms its own lock.
  }, []);

  // Subscribe to the texture-rescue completion signal.
  useEffect(() => {
    return onTexturesReady(() => setTexturesReady(true));
  }, []);

  // Once textures are ready, hold for a beat (so the bar's last sweep
  // doesn't get visually amputated), then fade out, then dispatch the
  // intro-start signal that CameraModel is waiting for.
  useEffect(() => {
    if (!texturesReady || hidden) return;
    const hold = window.setTimeout(() => {
      setHidden(true);
      // Match the CSS fade-out duration so the event fires the instant
      // the overlay is fully transparent — no perceptible gap before
      // the intro begins.
      const dispatch = window.setTimeout(() => markIntroStart(), 520);
      return () => window.clearTimeout(dispatch);
    }, 280);
    return () => window.clearTimeout(hold);
  }, [texturesReady, hidden]);

  return (
    <div
      className={`loading-screen${hidden ? " loading-screen--hidden" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-live="polite"
    >
      <div className="loading-screen__inner">
        <div className="loading-screen__logo">LUMEN</div>
        <div className="loading-screen__caption">
          Preparing 3D experience
        </div>
        <div className="loading-screen__bar" aria-hidden>
          <div className="loading-screen__bar-fill" />
        </div>
        <span className="sr-only">Loading 3D experience</span>
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import SceneClient from "@/components/SceneClient";
import ScrollSections from "@/components/ScrollSections";

export default function Page() {
  return (
    <>
      {/* main, GSAP ScrollTrigger'ın trigger elementi. Yüksekliği tam
          olarak 6 × 100vh = 600vh. Footer DIŞARIDA — böylece
          ScrollTrigger'ın "bottom bottom" ucu section 6'nın bittiği
          yere denk gelir ve state 5 tam orada (final sahnesi viewport'u
          tam doldururken) yakalanır. Eğer footer içeride olsaydı, max
          scroll daha aşağıya kayar ve section 6 üst kenara yapışırdı. */}
      <main className="relative">
        {/* Full-screen overlay above everything. Locks scroll on mount,
            fades out once textures are wired up, then signals CameraModel
            to start the intro animation. */}
        <LoadingScreen />
        <Header />

        {/* Fixed WebGL canvas — stays on screen while sections scroll.
            SceneClient = lazy-loaded Three.js bundle via next/dynamic
            (ssr: false). Initial paint doesn't include Three.js/drei. */}
        <div className="scene-fixed">
          <SceneClient />
        </div>
        {/* .scene-floor (subtle radial gölge) kaldırıldı — user'ın isteği. */}

        {/* Scrollable DOM sections sit above the canvas */}
        <div className="section-stack">
          <ScrollSections />
        </div>
      </main>

      <footer className="relative z-10 py-12 px-[8vw] text-xs text-ink/50 flex justify-between">
        <span>© LUMEN Optics</span>
        <span>Press · Support · Privacy</span>
      </footer>
    </>
  );
}

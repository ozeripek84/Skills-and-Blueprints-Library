"use client";

import dynamic from "next/dynamic";

// Bu wrapper "use client" olmalı ki next/dynamic'in `ssr: false` opsiyonu
// gerçekten code-split yapsın. App Router'da server component içinden
// yapılan dynamic({ ssr: false }) genellikle chunk bölmüyor — modülü
// hâlâ initial bundle'a koyuyor. Wrapper'ı client component yapınca
// webpack'in lazy chunk boundary'sini doğru kurar:
//   - Scene + Three.js + drei + R3F + gsap → ayrı lazy chunk
//   - Initial First Load JS: ~390 kB → ~90 kB civarı düşmesi beklenir
//
// loading: null çünkü LoadingScreen zaten overlay olarak görünüyor,
// ekstra placeholder UI gerekmez.
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => null,
});

export default function SceneClient() {
  return <Scene />;
}

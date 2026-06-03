import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMEN Pro — Interactive 3D Camera",
  description:
    "A scroll-driven cinematic product page for the LUMEN Pro camera.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tarayıcı varsayılan olarak sayfa yenilendiğinde önceki scroll
            konumunu geri yükler. Bunu kapatıyoruz: yenilemede her zaman
            hero'dan başlasın. Inline script React hydration'ından ÖNCE
            çalışır, böylece "scroll'lu görünüp sonra üste zıplama" flash'i
            yaşanmaz. `scrollRestoration` 2025'teki tüm modern tarayıcılarda
            destekleniyor — eski tarayıcılarda hata atmasın diye `in`
            kontrolüyle koruduk. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
        {/* GLB'yi HTML parse edilir edilmez paralel indirmeye başlat —
            JS bundle hâlâ yüklenirken GLB de inmiş olur. Mobil 3G'de
            LCP'yi 5-8s düşürebilir. crossOrigin: drei'nin GLTFLoader
            fetch çağrısıyla cache eşleşmesi için gerekli. */}
        <link
          rel="preload"
          href="/models/camera.glb"
          as="fetch"
          crossOrigin="anonymous"
          type="model/gltf-binary"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

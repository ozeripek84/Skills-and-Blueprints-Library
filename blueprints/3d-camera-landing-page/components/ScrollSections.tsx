"use client";

import FeatureStat from "./FeatureStat";

export default function ScrollSections() {
  return (
    <>
      {/* 1. HERO — text revealed by the intro animation in CameraModel
          via [data-hero-text]. */}
      <section
        id="hero"
        data-section="hero"
        className="section relative"
      >
        {/* Mobil + tablet: text-center (kamera viewport ortasında, text de
            ortalanmalı ki tek dikey kompozisyon olsun). Desktop (lg:): text
            sola yaslı kalır — orijinal desktop tasarımı. */}
        <div className="max-w-[640px] md:max-w-[52%] text-center lg:text-left mx-auto lg:mx-0">
          <p className="eyebrow mb-6" data-hero-text>
            Always shoot like a
          </p>
          <h1 className="headline text-ink" data-hero-text>
            Pro
          </h1>
          <p
            className="mt-8 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-ink/70 leading-relaxed"
            data-hero-text
          >
            Discover our most advanced camera and lens series yet. Blazing fast
            AF, incredible low-light performance, superb image stabilization,
            sharp image quality, and so much more.
          </p>
          <a href="#features" className="cta mt-10" data-hero-text>
            Know more
          </a>
        </div>

        {/* Mobil + tablet'te gizli (lg: = 1024px+ ile sadece desktop'ta).
            Canvas zone'una düşüyordu ve "text-üst, kamera-alt"
            yerleşimini bozuyordu. */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink/60 text-xs tracking-wider">
          <span>Start scrolling to explore</span>
          <span className="block w-px h-8 bg-ink/30" />
        </div>
      </section>

      {/* 2. LENS CLOSE-UP — mt-[6vh] sadece desktop'ta (mobile'da
          headline'ın margin-bottom'u zaten canvas zone'u yönetiyor;
          mobil mt eklersek text canvas'a sokulur). */}
      <section
        id="features"
        data-section="closeup"
        className="section relative justify-end"
      >
        <div className="max-w-[420px] text-right md:text-left md:max-w-[40%] md:ml-auto lg:mt-[6vh]">
          <p className="eyebrow mb-4">Optical engineering</p>
          <h2 className="headline-md text-ink">
            Glass.
            <br />
            Refined.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            A precision-ground EF 24–105mm assembly featuring 18 elements in
            13 groups. Edge-to-edge sharpness, suppressed flare, and silent
            ultrasonic focusing.
          </p>
        </div>
      </section>

      {/* 3. FRONT FACING + STATS */}
      <section
        id="performance"
        data-section="front"
        className="section relative"
      >
        {/* Desktop (lg:+) absolute. Mobile + tablet normal flow,
            stacked. (md: → lg: yapıldı ki tablet de mobile-style alsın). */}
        <div className="lg:absolute lg:bottom-[18vh] lg:left-[10vw] max-w-[420px]">
          <p className="eyebrow mb-3">Performance</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Built to capture the
            <br />
            decisive moment.
          </h2>
        </div>

        <div className="mt-6 lg:mt-0 lg:absolute lg:top-[22vh] lg:right-[10vw] flex flex-row lg:flex-col gap-5 lg:gap-7 items-start lg:items-end">
          <FeatureStat label="Frames per sec" value="15" />
          <FeatureStat label="ISO max" value="32000" />
          <FeatureStat label="AF points" value="1053" />
        </div>
      </section>

      {/* 4. TOP / HORIZONTAL */}
      <section
        id="design"
        data-section="top"
        className="section relative"
      >
        <div className="max-w-[480px] md:max-w-[40%]">
          <p className="eyebrow mb-4">Compact body</p>
          <h2 className="headline-md text-ink">
            Engineered
            <br />
            to travel.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            A magnesium-alloy chassis sealed against dust and moisture, tuned
            for balance with the new RF-S lens family. Light enough to carry
            all day, built to outlive every trip.
          </p>
        </div>
      </section>

      {/* 5. BACK / DIAGONAL — kamera bu sahnede x=0.6 (sağda) konumlanıyor,
          bu yüzden metin SOL tarafa alındı. Daha önce hem kamera hem metin
          sağ taraftaydı ve üst üste biniyorlardı. */}
      <section
        id="display"
        data-section="back"
        className="section relative"
      >
        <div className="max-w-[440px] md:max-w-[40%]">
          <p className="eyebrow mb-4">Vari-angle display</p>
          <h2 className="headline-md text-ink">
            Frame
            <br />
            every angle.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            A 3.2" articulating touch panel with intuitive controls puts every
            setting one tap away — from waist level to overhead, in landscape
            or portrait.
          </p>
        </div>
      </section>

      {/* 6. INTERACTIVE 3D GALLERY CTA */}
      <section
        id="experience"
        data-section="final"
        className="section relative"
      >
        {/* Mobile + tablet (<1024px): yatay olarak ortalanır
            (justify-center + text-center). mt-[8vh] kaldırıldı çünkü
            yeni layout'ta headline'ın margin-bottom'u canvas zone'unu
            zaten yönetiyor. Desktop (lg:+): orijinal sağ-hizalı. */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="text-center lg:text-right max-w-[85%] lg:max-w-[min(520px,46vw)] w-full">
            <p className="eyebrow mb-4">Experience it</p>
            <h2 className="final-title text-ink">
              Interactive
              <br />
              <span>3D</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-6 italic">
                  gallery
                </span>
                <span className="absolute inset-0 bg-accent rounded-full -z-0 translate-y-[6%]" />
              </span>
            </h2>
            <div className="mt-8 flex justify-center lg:justify-end">
              <a href="#buy" id="buy" className="cta">
                Launch gallery
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

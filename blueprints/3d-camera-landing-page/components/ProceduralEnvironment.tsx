"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type Props = {
  intensity?: number;
};

/**
 * Procedural (download-suz) IBL ortamı. Mobilde HDR preset'i (~500KB)
 * yerine kullanıyoruz: Three.js'in dahili RoomEnvironment'ı sentetik bir
 * iç-mekan sahnesi oluşturuyor, PMREMGenerator onu bir cubemap'e baker.
 * Materyaller bunu environment map olarak okuyup glossy reflection
 * üretiyor — lens camındaki "siyah crush" sorunu çözülür.
 *
 * Maliyet: ~5kB JS (RoomEnvironment kodu) + ~30-80ms tek seferlik
 * compute (PMREM bake). Network 0.
 */
export default function ProceduralEnvironment({ intensity = 1.0 }: Props) {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const envScene = new RoomEnvironment();
    const envMap = pmrem.fromScene(envScene, 0.04).texture;
    scene.environment = envMap;
    // r155+ Three.js: bake'i tekrarlamadan reflection brightness ayarı
    (scene as unknown as { environmentIntensity: number }).environmentIntensity =
      intensity;

    return () => {
      envMap.dispose();
      pmrem.dispose();
      scene.environment = null;
    };
  }, [gl, scene, intensity]);

  return null;
}

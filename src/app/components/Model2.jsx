"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

const Model2 = () => {
  const model = useGLTF("/toy2.glb");
  const model2ref = useRef(null);
  const orbitControlsRef = useRef(null);

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true; // Only needed if you want internal shadows
    }
  });
  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(
        MathUtils.degToRad((y + 1) * 60) + 0.5
      );
      orbitControlsRef.current.update();
    }
    if (model2ref.current) {
      model2ref.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(70)} // Bottom
        maxPolarAngle={MathUtils.degToRad(100)} // Top
        enableZoom={false}
      />
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 8, 10]} intensity={2} castShadow />

      <primitive
        ref={model2ref}
        object={model.scene}
        scale={0.38}
        position={[0, -1.3, -0.5]}
        castShadow // Model casts shadow
      />

      {/* Shadow-receiving surface */}
      <mesh receiveShadow position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.5} /> {/* For clearer shadows */}
      </mesh>
    </>
  );
};

export default Model2;

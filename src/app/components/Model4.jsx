import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { MathUtils } from "three";
import * as THREE from "three";

const Model4 = () => {
  const model = useGLTF("/endlessfunrobot.glb");
  const model4ref = useRef(null);
  const orbitControlsRef = useRef(null);

  // Load animations using useAnimations
  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // Play all animations in a loop
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
        action.setLoop(THREE.LoopRepeat, Infinity);
      });
    }
  }, [actions]);

  // Configure shadows
  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(
        -THREE.MathUtils.degToRad(x * 45)
      );
      orbitControlsRef.current.setPolarAngle(
        THREE.MathUtils.degToRad((y + 1) * 60) + 0.5
      );
      orbitControlsRef.current.update();
    }
    if (model4ref.current) {
      model4ref.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <>
      {/* Lighting for shadows */}
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(70)} // Bottom
        maxPolarAngle={MathUtils.degToRad(100)} // Top
        enableZoom={false}
      />
      <ambientLight intensity={2} />
      <directionalLight
        intensity={1.5}
        position={[4, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
      />

      {/* Model with shadows */}
      <group rotation={[0.3, 0, 0]}>
        <primitive
          ref={model4ref}
          object={model.scene}
          position={[0, -0.5, 0]}
          scale={0.6}
          rotation={[0, 0, 0]}
        />

        {/* Shadow plane */}
        <mesh
          position={[0, -0.5, 0]} // Position slightly below the model
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </group>
    </>
  );
};

export default Model4;

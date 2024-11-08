"use client";
import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import useMedia from "use-media";

const Page7_Model = () => {
  // Load models and their animations
  const lightRef = useRef();
  const model2Ref = useRef();
  const model4Ref = useRef();

  const model2 = useGLTF("/rabbityellow.glb");
  const model4 = useGLTF("/robot.glb");

  // Media query for screen width
  const isSmallScreen = useMedia({ maxWidth: "640px" });

  // Access animations
  const { animations: animations2 } = model2;
  const { animations: animations4 } = model4;

  // Set up actions for animations
  const { actions: actions2 } = useAnimations(animations2, model2.scene);
  const { actions: actions4 } = useAnimations(animations4, model4.scene);

  useEffect(() => {
    // Play animations if they exist
    if (!isSmallScreen) {
      if (actions2 && actions2[Object.keys(actions2)[0]]) {
        actions2[Object.keys(actions2)[0]]
          .reset()
          .play()
          .setLoop(THREE.LoopRepeat);
      }
    }
    if (actions4 && actions4[Object.keys(actions4)[0]]) {
      actions4[Object.keys(actions4)[0]]
        .reset()
        .play()
        .setLoop(THREE.LoopRepeat);
    }

    // Set shadow properties directly on each model reference
    const setShadowProperties = (model) => {
      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true; // Enable shadow casting
            child.receiveShadow = true; // Enable shadow receiving
          }
        });
      }
    };

    setShadowProperties(model2.scene);
    setShadowProperties(model4.scene);
  }, [actions2, actions4, isSmallScreen, model2, model4]);

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight
        ref={lightRef}
        position={isSmallScreen ? [3, 2, 4] : [0, 2, 4]}
        intensity={4}
        castShadow
      />

      <group position={[0, 0, 0]}>
        {/* Only render model2 on larger screens */}
        {!isSmallScreen && (
          <primitive
            ref={model2Ref}
            object={model2.scene}
            scale={1.5}
            position={[-4, -2, -1]}
            rotation={[0, 0.3, 0]}
          />
        )}
        {/* Always render model4, adjust position based on screen size */}
        <primitive
          ref={model4Ref}
          object={model4.scene}
          scale={0.8}
          position={isSmallScreen ? [0, -1, -1] : [4, -1, -1]}
          rotation={[0, 0.5, 0]}
        />
      </group>

      {/* Ground Plane to receive shadows */}
      <mesh
        position={[0, -2, 0]} // Adjust position to sit below the models
        rotation={[-Math.PI / 2, 0, 0]} // Rotate to be horizontal
        receiveShadow // Enable shadow receiving
      >
        <planeGeometry args={[100, 100]} /> {/* Size of the plane */}
        <shadowMaterial opacity={0.5} />
        {/* Optional: set color of the plane */}
      </mesh>
    </>
  );
};

export default Page7_Model;

import * as THREE from "three";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

const Quality = () => {
  const mod1 = useGLTF("/creative.glb");
  const mod2 = useGLTF("/pyramid.glb");
  const mod3 = useGLTF("/toyy.glb");
  const mod4 = useGLTF("/bear.glb");

  const { animations } = mod4;
  const { actions } = useAnimations(animations, mod4.scene); // Hook to handle animations
  const groupRef = useRef(); // Reference for the group
  const { camera } = useThree(); // Access the default camera
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size

  // Check screen size on load and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Assume 'sm' is width < 640px
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check on load

    return () => window.removeEventListener("resize", checkScreenSize); // Clean up
  }, []);

  // Play animations in a loop
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      // Check if actions exist
      actions[Object.keys(actions)[0]].reset().play().setLoop(THREE.LoopRepeat); // Play the first animation on loop
    }
  }, [actions]);

  // Rotate the group on the y-axis with a speed of 0.01 and make objects look at the camera
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;

      // Make all objects in the group face the camera
      groupRef.current.children.forEach((child) => {
        child.lookAt(camera.position); // Ensure the objects face the camera
      });
    }
  });

  return (
    <>
      {/* Set up a Perspective Camera */}
      <PerspectiveCamera
        makeDefault // Make it the default camera
        fov={75} // Set the field of view
        position={[0, 0, 10]} // Position the camera at positive Z
      />

      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 1]} intensity={2.9} color={"white"} />

      {/* Group the models */}
      <group ref={groupRef} position={[0, -2, 0]}>
        <primitive
          object={mod1.scene}
          scale={0.06}
          position={[-5, isSmallScreen ? 1 : -0.5, 0]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod2.scene}
          scale={0.6}
          position={[5, isSmallScreen ? 1 : 0, 0]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod3.scene}
          scale={0.8}
          position={[0, isSmallScreen ? 1 : 0, -4]} // Adjust y-position based on screen size
        />
        <primitive
          object={mod4.scene}
          scale={2.8}
          position={[2, isSmallScreen ? 1 : 0, 4.5]} // Adjust y-position based on screen size
        />
      </group>
    </>
  );
};

export default Quality;

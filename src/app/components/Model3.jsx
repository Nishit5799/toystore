import React, { useEffect, useRef, useState } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { MathUtils } from "three";

export default function Model3(props) {
  const { scene } = useGLTF("/ironman.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const model4ref = useRef(null);
  const orbitControlsRef = useRef(null);

  // Enable shadows on cloned nodes
  Object.values(nodes).forEach((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(MathUtils.degToRad((y + 1) * 45));
      orbitControlsRef.current.update();
    }
    model4ref.current.rotation.z += delta;
  });
  // State to hold light position
  const [modelRotation, setModelRotation] = useState([-Math.PI / 2, 0, 0]);

  // Update the light position based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Tailwind's 'sm' breakpoint
        setModelRotation([-Math.PI / 1.7, 0, 0]); // Move light on x by 3 for small screens
      } else {
        setModelRotation([-Math.PI / 2, 0, 0]); // Default position for larger screens
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call it initially
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={MathUtils.degToRad(60)}
        maxPolarAngle={MathUtils.degToRad(80)}
        enableZoom={false}
      />
      <group {...props} dispose={null} position={[0, -2.5, 0]}>
        {/* Model */}
        <group rotation={modelRotation}>
          <primitive ref={model4ref} object={nodes._rootJoint} scale={0.71} />
          <skinnedMesh
            geometry={nodes.Object_474.geometry}
            material={materials.COC_iOS_HER_TST_VII_B}
            skeleton={nodes.Object_474.skeleton}
            castShadow
          />
          <skinnedMesh
            geometry={nodes.Object_475.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_475.skeleton}
            castShadow
          />
        </group>

        {/* Vertical shadow-receiving plane behind the model */}
      </group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]} // Keep rotation as it is for a vertical plane
        position={[0, -3, -3]} // Adjust Z-position to place behind the model
        receiveShadow
      >
        <planeGeometry args={[50, 50]} /> {/* Adjust size as needed */}
        <shadowMaterial opacity={0.5} />
      </mesh>
    </>
  );
}

useGLTF.preload("/ironman.glb");

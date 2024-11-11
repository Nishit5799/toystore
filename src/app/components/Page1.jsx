import React, { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Page1_Heading from "./Page1_Heading";
import Page1_DownArrow from "./Page1_DownArrow";

// Lazy load Quality and Toys components
const Quality = lazy(() => import("./Quality"));
const Toys = lazy(() => import("./Toys"));

const Page1 = () => {
  return (
    <div className="page1 w-full h-screen relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0"></div>
      <Navbar />

      {/* Quality Canvas with lower z-index */}
      <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        <Suspense fallback={null}>
          <Quality />
        </Suspense>
      </Canvas>

      {/* Page1_Heading with medium z-index */}
      <div
        style={{ position: "relative", zIndex: 2 }}
        className="sm:relative sm:z-[2] absolute tracking-wider font-jelly top-2/3 sm:top-0"
      >
        <Page1_Heading />
      </div>

      {/* Toys Canvas with higher z-index */}
      <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}>
        <Suspense fallback={null}>
          <Toys />
        </Suspense>
      </Canvas>

      <Page1_DownArrow />
    </div>
  );
};

export default Page1;

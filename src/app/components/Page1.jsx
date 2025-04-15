import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Page1_Heading from "./Page1_Heading";
import Page1_DownArrow from "./Page1_DownArrow";
import Loading from "../loading";

const Quality = lazy(() => import("./Quality"));
const Toys = lazy(() => import("./Toys"));

const Page1 = () => {
  return (
    <div className="page1 w-full h-screen relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0"></div>
      <Navbar />

      {/* Quality Canvas with lower z-index */}
      <Suspense fallback={<Loading />}>
        <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}>
          <Quality />
        </Canvas>

      {/* Page1_Heading with medium z-index */}
      <div
        style={{ position: "relative", zIndex: 3 }}
        className="sm:relative sm:z-[2] absolute tracking-wider font-jelly top-2/3 sm:top-0"
        >
        <Page1_Heading />
      </div>
        </Suspense>

      {/* Toys Canvas with higher z-index */}
      <Suspense fallback={<Loading />}>
        <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
          <Toys />
        </Canvas>
      </Suspense>

      <Page1_DownArrow />
    </div>
  );
};

export default Page1;

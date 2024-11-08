import React from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Page1_Heading from "./Page1_Heading";
import Toys from "./Toys";
import Page1_DownArrow from "./Page1_DownArrow";
import Quality from "./Quality";

const Page1 = () => {
  return (
    <div className="page1 bg-black  w-full h-screen   relative overflow-hidden">
      <div className=" w-full h-full  absolute top-0 left-0"></div>
      <Navbar />

      {/* Quality Canvas with lower z-index */}
      <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        <Quality />
      </Canvas>

      {/* Quality_Heading with medium z-index */}
      <div
        style={{ position: "relative", zIndex: 2 }}
        className="sm:relative sm:z-[2] absolute tracking-wider font-jelly top-2/3 sm:top-0  "
      >
        <Page1_Heading />
      </div>

      {/* Toys Canvas with higher z-index */}
      <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}>
        <Toys />
      </Canvas>

      <Page1_DownArrow />
    </div>
  );
};

export default Page1;

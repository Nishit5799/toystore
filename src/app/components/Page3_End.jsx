import { Canvas } from "@react-three/fiber";
import React from "react";
import Model4 from "./Model4";
import Page3_EndHeading from "./Page3_EndHeading";
import Page3_EndPara from "./Page3_EndPara";
import Page3_EndButton from "./Page3_EndButton";

const Page3_End = () => {
  return (
    <>
      <div className="page3end min-h-[1vh] sm:h-[120vh] w-full sm:flex font-['Bayon'] text-white bg-gradient-to-r from-[#6B46C1] to-[#D53F8C] ">
        <div className=" w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7">
          <Page3_EndHeading />
          <div className="w-full relative h-[50vw] overflow-hidden rounded-md sm:hidden">
            <div className="overlay w-full h-full absolute top-0 left-0 z-[100] bg-transparent"></div>
            <Canvas shadows>
              <Model4 />
            </Canvas>
          </div>
          <Page3_EndPara />
          <Page3_EndButton />
        </div>
        <div className="hidden sm:w-1/2 sm:flex sm:items-center sm:justify-center sm:h-full">
          <Canvas shadows>
            <Model4 />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Page3_End;

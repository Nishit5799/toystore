import React, { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Page3_EndHeading from "./Page3_EndHeading";
import Page3_EndPara from "./Page3_EndPara";
import Page3_EndButton from "./Page3_EndButton";

// Lazy load Model4 component
const Model4 = lazy(() => import("./Model4"));

const Page3_End = () => {
  return (
    <div className="page3end min-h-[1vh] sm:h-[120vh] w-full sm:flex font-['Bayon'] text-white">
      <div className="w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7">
        <Page3_EndHeading />
        <div className="w-full relative h-[50vw] overflow-hidden rounded-md sm:hidden">
          <div className="overlay w-full h-full absolute top-0 left-0 z-[100] bg-transparent"></div>
          <Canvas shadows>
            <Suspense fallback={null}>
              <Model4 />
            </Suspense>
          </Canvas>
        </div>
        <Page3_EndPara />
        <Page3_EndButton />
      </div>
      <div className="hidden sm:w-1/2 sm:flex sm:items-center sm:justify-center sm:h-full">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Model4 />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Page3_End;

import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import Page2_Heading from "./Page2_Heading";
import Page2_Para from "./Page2_Para";
import Page2_button from "./Page2_button";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Loading from "../loading";

// Lazy load Model2 component
const Model2 = lazy(() => import("./Model2"));

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".page2",
      {
        color: "black",
      },
      {
        color: "black",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".page2",
          start: "top 80%",
          end: "top 70%",
          scrub: 3,
        },
      }
    );
  });

  return (
    <>
      <div className="page2 min-h-[80vh] sm:h-screen w-full sm:flex font-['Bayon'] text-white">
        <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7">
          <Page2_Heading />
          <div className="w-full relative h-[50vw] overflow-hidden rounded-md sm:hidden">
            <div className="overlay w-full h-full absolute top-0 left-0 z-[100] bg-transparent"></div>
            <Canvas shadows>
              <Suspense fallback={<Loading />}>
                <Model2 />
              </Suspense>
            </Canvas>
          </div>
          <Page2_Para />
          <Page2_button />
        </div>
        <div className="hidden sm:w-1/2 sm:flex sm:items-center sm:justify-center sm:h-full">
          <Canvas shadows>
            <Suspense fallback={null}>
              <Model2 />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Page2;

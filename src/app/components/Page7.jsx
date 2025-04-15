import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { lazy, Suspense } from "react";

// Lazy load Page7_Model
const Page7_Model = lazy(() => import("./Page7_Model"));

const Page7 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // For screens larger than 'sm'
      "(min-width: 640px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".page7",
            start: "top 0",
            end: "top -100%",
            scrub: 2,
            pin: true,
            anticipatePin: 1,
          },
        });
        tl.to(".brandbottom1", {
          x: "-115%",
          opacity: 1,
        }).to(
          ".brandbottom2",
          {
            x: "-2%",
            opacity: 1,
          },
          0
        );
      },
      // For screens smaller than 'sm'
      "(max-width: 639px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".page7",
            start: "top 80%",
            end: "top 70%",
            scrub: 4,
            pin: false, // Disable pin for small screens
          },
        });
        tl.from(".brandbottom3", {
          x: -100,
          opacity: 0,
        }).from(".brandbottom4", {
          x: -100,
          opacity: 0,
        });
      },
    });
  });

  return (
    <div className="w-full page7 sm:min-h-[100vh] h-[43vh] text-black px-20 py-2 brandcontainer overflow-x-hidden relative whitespace-nowrap">
      {/* for screen size greater than sm */}
      <h1 className="hidden sm:block font-jelly sm:text-[9.5vw] brandbottom1 opacity-[0.5]">
        We Work With The Best | We Work With The Best
      </h1>
      {/* for screen size sm */}
      <h1 className="sm:hidden text-[7vw] text-center mx-auto font-jelly absolute left-[10vw] brandbottom3">
        We Work With The Best
      </h1>
      <div className="sm:h-[30vh] w-full sm:block">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Page7_Model />
          </Suspense>
        </Canvas>
      </div>
      {/* for screen size greater than sm */}
      <h1
        className="sm:block hidden font-jelly sm:text-[9.5vw] brandbottom2 opacity-[0.5]"
        style={{ transform: "translateX(-117%)" }}
      >
        To Provide You The Best | To Provide You The Best
      </h1>
      {/* for screen size sm */}
      <h1 className="sm:hidden block text-[7vw] mx-auto font-jelly brandbottom4 absolute right-[10vw]">
        To Provide You The Best!
      </h1>
    </div>
  );
};

export default Page7;

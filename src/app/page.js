"use client";

import { Suspense, lazy, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

// Lazy-load the components
const Page1 = lazy(() => import("./components/Page1"));
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));
const Page3_End = lazy(() => import("./components/Page3_End"));
const Page4 = lazy(() => import("./components/Page4"));
const Page5 = lazy(() => import("./components/Page5"));
const Page6 = lazy(() => import("./components/Page6"));
const Page7 = lazy(() => import("./components/Page7"));

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-[100] bg-black">
      <h2 className="text-xl text-white font-semibold mb-5">
        Loading FunToy World...
      </h2>
      <div className="loader-container">
        <div className="loader"></div>
      </div>

      <style jsx>{`
        .loader-container {
          position: relative;
          width: 150px;
          height: 150px;
        }

        .loader {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 16px solid transparent;
          border-radius: 50%;
          border-top: 16px solid #3498db;
          animation: rotateLoader 1.5s ease-in-out infinite,
            pulseLoader 1.5s infinite;
        }

        @keyframes rotateLoader {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseLoader {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

const Page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="back gradient-background">
      <Suspense fallback={<Loading />}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page3_End />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </Suspense>
    </div>
  );
};

export default Page;

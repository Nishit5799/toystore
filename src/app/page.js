"use client";

import { Suspense, lazy, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Loading from "./loading";

// Lazy-load the components
const Page1 = lazy(() => import("./components/Page1"));
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));
const Page3_End = lazy(() => import("./components/Page3_End"));
const Page4 = lazy(() => import("./components/Page4"));
const Page5 = lazy(() => import("./components/Page5"));
const Page6 = lazy(() => import("./components/Page6"));
const Page7 = lazy(() => import("./components/Page7"));

const Page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="back gradient-background">
        {/* Use Suspense to show Loading component as a fallback */}
        <Page1 />
        <Page2 />
        <Page3 />
        <Page3_End />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </div>
    </Suspense>
  );
};

export default Page;

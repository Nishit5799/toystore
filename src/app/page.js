"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page3_End from "./components/Page3_End";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";

const Page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
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
  );
};

export default Page;

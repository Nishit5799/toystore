import React from "react";
import Page4_heading from "./Page4_heading";
import Page4_Collection from "./Page4_Collection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".page4",
      {
        opacity: 0,
      },
      {
        // backgroundColor: "#FFDEAC",
        opacity: 1,
        color: "black",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".page4",

          start: "top 99%",
          end: "top 60%",
        },
      }
    );
  });

  return (
    <div className="page4 relative sm:min-h-[1vh] min-h-screen sm:w-full font-['Bayon'] overflow-hidden py-10 sm:px-20 sm:py-10 sm:flex sm:gap-10 sm:flex-wrap sm:items-center">
      <Page4_heading />
      <Page4_Collection />
    </div>
  );
};

export default Page4;

import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Page4_heading = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".brand",
      {
        y: 50, // Initial position offset for the letters
        opacity: 0, // Start invisible
        rotate: "45deg",
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible
        rotate: 0,
        ease: "elastic.out(1,1.3)",

        stagger: 0.4, // Delay between each letter's animation
        scrollTrigger: {
          trigger: ".page4", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 75%", // When container hits 90% of the viewport
          end: "top 60%", // End trigger point
        },
      }
    );
  });
  return (
    <div className="w-full h-full sm:h-[20vh] sm:mb-14 mb-6  ">
      <h1 className=" text-[8vw] font-jelly text-center ">
        {" "}
        {"Shop by brand".split("").map((e, i) => {
          return (
            <span key={i} className=" inline-block mx-auto brand">
              {e === " " ? "\u00A0" : e} {/* Treat space as a character */}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Page4_heading;

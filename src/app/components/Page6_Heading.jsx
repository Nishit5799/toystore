import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const Page6_Heading = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".characters",
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
          trigger: ".page6", // Trigger based on container
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
        {"Shop By Characters".split("").map((e, i) => {
          return (
            <span key={i} className=" inline-block mx-auto characters">
              {e === " " ? "\u00A0" : e} {/* Treat space as a character */}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Page6_Heading;

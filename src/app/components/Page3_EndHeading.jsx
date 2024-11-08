import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const Page3_EndHeading = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".heading2",
      {
        y: 40, // Initial position offset for the letters
        opacity: 0, // Start invisible
        rotate: "45deg",
        color: "white",
      },
      {
        y: 0, // End position at normal
        opacity: 1, // Fully visible
        rotate: 0,
        color: "black",
        ease: "elastic.out(1, 0.3)",

        stagger: 0.4, // Delay between each letter's animation
        scrollTrigger: {
          trigger: ".headingcontainer2", // Trigger based on container
          scrub: 3, // Set to false for smoother animation
          start: "top 75%", // When container hits 75% of the viewport
          end: "top 60%", // End trigger point
        },
      }
    );
  });

  return (
    <div className="headingcontainer2 font-jelly text-[10vw] px-6 overflow-hidden flex mb-8 sm:text-[6.5vw] sm:tracking-tight sm:justify-center sm:mb-14">
      {"Endless Fun".split("").map((e, i) => (
        <span
          key={i}
          className="heading2 inline-block mx-[0.4vw] sm:mx-[0.2vw]"
        >
          {e === " " ? "\u00A0" : e} {/* Treat space as a character */}
        </span>
      ))}
    </div>
  );
};

export default Page3_EndHeading;

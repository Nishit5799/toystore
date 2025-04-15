import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const Page3_Heading = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".heading1",
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
        ease: "elastic.out(1,0.3)",

        stagger: 0.4, // Delay between each letter's animation
        scrollTrigger: {
          trigger: ".headingcontainer1", // Trigger based on container
          scrub: 3, // Set to false for smoother animation
          start: "top 75%", // When container hits 90% of the viewport
          end: "top 60%", // End trigger point
        },
      }
    );
  });

  return (
    <div className="headingcontainer1 font-jelly  text-[10vw] px-6  flex sm:text-[6.5vw]  sm:mx-auto mb-8 sm:mb-20 ">
      {"Premium Quality".split("").map((e, i) => {
        return (
          <span key={i} className="heading1 inline-block mx-auto ">
            {e === " " ? "\u00A0" : e} {/* Treat space as a character */}
          </span>
        );
      })}
    </div>
  );
};

export default Page3_Heading;

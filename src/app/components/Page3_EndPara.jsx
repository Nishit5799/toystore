import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
const Page3_EndPara = () => {
  const para = [
    "Unlock a world of endless fun with our imaginative, high-quality",
    "toys! Crafted to inspire creativity and bring smiles, each toy is",
    "designed to keep young minds engaged and entertained for hours.",
    "Dive into a playful journey where learning meets joy, and every",
    "The endless possibilities await—where will your imagination take you ",
    "today? moment sparks new adventures!",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".zigzag5", {
      x: -100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".paraTop2", // Trigger based on container
        scrub: 3, // Set to false for smoother animation

        start: "top 90%", // When container hits 80% of the viewport
        end: "top 80%", // End trigger point
      },
    })
      .from(".zigzag4", {
        x: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: ".paraTop2", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 90%", // When container hits 80% of the viewport
          end: "top 80%", // End trigger point
        },
      })
      .fromTo(
        ".para2",
        {
          y: 40, // Initial position offset for the letters
          opacity: 0, // Start invisible
        },
        {
          y: 0, // End position at normal
          opacity: 1, // Fully visible

          ease: "elastic.out(1,0.3)",
          // duration: 0.2,
          stagger: 0.5, // Delay between each letter's animation
          ease: "power4.out", // Smooth easing effect for entry
          scrollTrigger: {
            trigger: ".paraTop2", // Trigger based on container
            scrub: 3, // Set to false for smoother animation

            start: "top 90%", // When container hits 80% of the viewport
            end: "top 80%", // End trigger point
          },
        }
      );
  });
  return (
    <div className="paraTop2 relative text-[4vw] mx-auto w-3/4 mt-8 sm:text-2xl sm:w-3/4 sm:mb-[11vw] ">
      <div className="absolute w-[70vw] -top-[5vw] -left-[6vw] sm:-top-[4vw] sm:-left-[0.5vw] sm:w-[19vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[1] zigzag5"
        />
      </div>
      <div className=" absolute w-[70vw] -bottom-[4vw] -left-[6vw] sm:-top-[4vw] sm:left-[15.5vw] sm:w-[19vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[2] zigzag4"
        />
      </div>
      {para.map((e, i) => {
        return (
          <p
            className="para2  text-white sm:text-[1.6vw] font-['Bayon'] sm:font-choco text-[3.5vw] tracking-wide "
            key={i}
          >
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default Page3_EndPara;

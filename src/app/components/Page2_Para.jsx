import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
const Page2_Para = () => {
  const para = [
    "Unleash your child's imagination with our collection of creative",
    "toys! From building sets to arts and crafts, these toys inspire",
    "creativity, problem-solving, and endless fun. Perfect for sparking",
    "young minds and encouraging hands-on exploration.Perfect for",
    " budding artists, builders, and thinkers, these toys encourage",
    " open-ended play and help develop essential skills like creativity,",
    " coordination, and critical thinking.",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".zigzag1", {
      x: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".paraTop", // Trigger based on container
        scrub: 3, // Set to false for smoother animation

        start: "top 90%", // When container hits 80% of the viewport
        end: "top 80%", // End trigger point
      },
    })
      .from(".zigzag", {
        x: -100,
        opacity: 0,

        scrollTrigger: {
          trigger: ".paraTop", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 90%", // When container hits 80% of the viewport
          end: "top 80%", // End trigger point
        },
      })
      .fromTo(
        ".para",
        {
          y: 5, // Initial position offset for the letters
          opacity: 0, // Start invisible
        },
        {
          y: 0, // End position at normal
          opacity: 1, // Fully visible

          ease: "elastic.out(1,0.3)",
          duration: 0.2,
          stagger: 0.3, // Delay between each letter's animation
          ease: "power2.out", // Smooth easing effect for entry
          scrollTrigger: {
            trigger: ".paraTop", // Trigger based on container
            scrub: 3,

            start: "top 85%",
            end: "top 80%",
          },
        }
      );
  });
  return (
    <div className="paraTop relative text-[4vw] mx-auto w-3/4 mt-8 sm:text-2xl sm:w-3/4 sm:mb-[1vw] sm:mt-1">
      <div className="absolute w-[70vw] -top-[5vw] -left-[6vw] sm:-top-[4vw] sm:-left-[0.5vw] sm:w-[20vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[1] zigzag"
        />
      </div>
      <div className=" absolute w-[70vw] -bottom-[4vw] -left-[6vw] sm:-top-[4vw] sm:left-[14.5vw] sm:w-[20vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[2] zigzag1"
        />
      </div>

      {para.map((e, i) => {
        return (
          <p
            className="para text-white  sm:text-[1.6vw] z-[3] text-[3.5vw] sm:tracking-wide sm:font-choco font-['Bayon']"
            key={i}
          >
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default Page2_Para;
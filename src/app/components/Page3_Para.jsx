import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
const Page3_Para = () => {
  const para1 = [
    "Discover premium quality toys crafted for endless fun and",
    "Durability. With safe, eco-friendly materials, these toys inspire",
    "imagination and stand the test of time. Perfect for curious minds",
    "and adventurous play.These toys combine superior materials and",
    "thoughtful design, ensuring lasting enjoyment while supporting",
    "children's development and imagination. Perfect for inspiring",
    "young minds while standing the test of time.",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".zigzag3", {
      x: -100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".paraTop1", // Trigger based on container
        scrub: 3, // Set to false for smoother animation

        start: "top 90%", // When container hits 80% of the viewport
        end: "top 80%", // End trigger point
      },
    })
      .from(".zigzag2", {
        x: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: ".paraTop1", // Trigger based on container
          scrub: 3, // Set to false for smoother animation

          start: "top 90%", // When container hits 80% of the viewport
          end: "top 80%", // End trigger point
        },
      })
      .fromTo(
        ".para1",
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
            trigger: ".paraTop1", // Trigger based on container
            scrub: 3, // Set to false for smoother animation

            start: "top 90%", // When container hits 80% of the viewport
            end: "top 80%", // End trigger point
          },
        }
      );
  });
  return (
    <div className="paraTop1 relative text-[4vw] mx-auto w-3/4 mt-8 sm:text-2xl sm:w-3/4 sm:mb-[11vw] ">
      <div className="absolute w-[70vw] -top-[5vw] -left-[6vw] sm:-top-[4vw] sm:-left-[0.5vw] sm:w-[19vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[1] zigzag3"
        />
      </div>
      <div className=" absolute w-[70vw] -bottom-[4vw] -left-[6vw] sm:-top-[4vw] sm:left-[15.5vw] sm:w-[19vw] sm:absolute sm:block">
        <Image
          src={"/bgsvg.svg"}
          height={1000}
          width={1000}
          className="z-[2] zigzag2"
        />
      </div>
      {para1.map((e, i) => {
        return (
          <p
            className="para1  text-white sm:text-[1.6vw] -mt-1  font-['Bayon'] sm:font-choco text-[3.5vw] tracking-wide "
            key={i}
          >
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default Page3_Para;

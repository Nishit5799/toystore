import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1_Heading = () => {
  const heads = ["PLAY", "IMAGINE", "EXPLORE"];
  const heads2 = ["MAKE", "MEMORIES"];

  useGSAP(() => {
    const getRandomColor = () =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

    // Create a timeline but don't start it immediately
    const tl = gsap.timeline({ repeat: -1, paused: true }); // Paused initially

    // Define the bounce animation with `fromTo`
    tl.fromTo(
      ".head .letter, .head2 .letter2",
      { y: -5 },
      {
        y: 0,
        yoyo: true,
        repeat: -1,
        ease: "power1.out",
        color: getRandomColor, // Use random color for each animation
        stagger: {
          each: 0.1,
        },
        onRepeat: () => {
          gsap.to(".head .letter, .head2 .letter2", {
            color: getRandomColor, // Update color on each repeat
          });
        },
      }
    );

    // Start the initial animation with gsap.from
    gsap.from(".head .letter, .head2 .letter2", {
      y: 100,
      stagger: 0.05,
      opacity: 0,
      onComplete: () => {
        tl.play();
      },
    });
  });

  return (
    <>
      <div className="head flex flex-col bg-black sm:flex sm:flex-col w-full h-full absolute top-2/3 text-center sm:text-left text-white sm:top-[10vw] sm:left-[6vw]">
        {heads.map((word, index) => (
          <span key={index} className="inline-block ">
            {word.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[7vw] sm:text-[10vw] sm:leading-none tracking-tight inline-block letter"
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="head2 sm:flex hidden sm:flex-col w-fit h-full absolute top-2/3 text-center sm:text-right text-white sm:top-[20vw] sm:right-[6vw]">
        {heads2.map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[9vw] sm:text-[10vw] inline-block leading-none tracking-tight letter2"
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </div>
    </>
  );
};

export default Page1_Heading;

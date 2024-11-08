import Link from "next/link";
import React from "react";

import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import CharCard from "./CharCard";

const Page6_CharacterCollection = () => {
  const images = [
    "barbie.avif",
    "mickeymouse.avif",
    "spiderman.avif",
    "peppa.avif",
    "pawpatrol.avif",
    "shark.avif",
    "frozen.avif",
    "pony.avif",
    "disneyprincess.avif",
    "avengers.avif",
    "harrypotter.avif",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".card3", {
      y: 100,
      rotate: "10deg",
      opacity: 0,
      stagger: 0.8,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".cardcontainer3",
        start: "top 80%",
        end: "top 60%",

        scrub: 3,
      },
    });
  });
  return (
    <div className="w-full h-full cardcontainer3 flex flex-wrap items-center justify-center gap-7 sm:gap-18   mx-auto">
      {images.map((e, i) => {
        return (
          <Link href={"/collection"} key={i}>
            {" "}
            <span className="inline-block card3">
              <CharCard idx={i} image={e} />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Page6_CharacterCollection;

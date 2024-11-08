import Link from "next/link";
import React from "react";
import AgeCard from "./AgeCard";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Page5_AgeCollection = () => {
  const images = [
    "age1.avif",
    "age2.avif",
    "age3.avif",
    "age4.avif",
    "age5.avif",
    "age6.avif",
    "age7.avif",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".card2", {
      y: 100,
      rotate: "10deg",
      opacity: 0,
      stagger: 0.8,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".cardcontainer2",
        start: "top 80%",
        end: "top 60%",

        scrub: 3,
      },
    });
  });
  return (
    <div className="w-full h-full cardcontainer2 flex flex-wrap items-center justify-center gap-7 sm:gap-10   mx-auto">
      {images.map((e, i) => {
        return (
          <Link href={"/collection"} key={i}>
            {" "}
            <span className="inline-block card2">
              <AgeCard idx={i} image={e} />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Page5_AgeCollection;

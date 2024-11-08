import Link from "next/link";
import React from "react";
import Card from "./Card";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Page4_Collection = () => {
  const images = [
    "brand1.avif",
    "brand2.avif",
    "brand3.avif",
    "brand4.avif",
    "brand5.avif",
    "brand6.avif",
    "brand7.avif",
    "brand8.avif",
    "brand9.avif",
    "brand10.avif",
    "brand11.avif",
    "brand12.avif",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".card", {
      y: 100,
      rotate: "10deg",
      opacity: 0,
      stagger: 0.8,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".cardcontainer",
        start: "top 80%",
        end: "top 60%",

        scrub: 3,
      },
    });
  });
  return (
    <div className="w-full h-full cardcontainer flex flex-wrap items-center justify-center gap-7 sm:gap-10   mx-auto">
      {images.map((e, i) => {
        return (
          <Link href={"/collection"} key={i}>
            {" "}
            <span className="inline-block card">
              <Card idx={i} image={e} />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Page4_Collection;

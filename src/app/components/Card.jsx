import Image from "next/image";
import React, { useState, Suspense, lazy } from "react";

// Lazy-load the VideoPlayer component
const VideoPlayer = lazy(() => import("./VideoPlayer"));

const Card = ({ image, idx }) => {
  const brandTitle = [
    "Hamleys",
    "Barbie",
    "E-Motorad",
    "Lego",
    "Mattel",
    "Rabitat",
    "Hasbro",
    "Nerf",
    "Skillmatics",
    "Astra",
    "Shooting Star",
    "UBoard",
  ];
  const videoTitle = [
    "hamleys.mp4",
    "barbie.mp4",
    "e-motorad.mp4",
    "lego.mp4",
    "mattel.mp4",
    "rabitat.mp4",
    "hasbro.mp4",
    "nerf.mp4",
    "skillmatics.mp4",
    "astra.mp4",
    "shootingstar.mp4",
    "uboard.mp4",
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sm:h-[20vw] sm:w-[13vw] w-24 flex items-center justify-center rounded-xl overflow-hidden relative transform transition duration-300 ease-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video and brand title overlay to show on hover */}
      <div className="imagetext h-full w-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-300">
        {isHovered && (
          <Suspense fallback={<div>Loading...</div>}>
            <VideoPlayer src={`/${videoTitle[idx]}`} />
          </Suspense>
        )}

        {/* Brand title overlaying the video with reduced opacity */}
        <h1
          className="text-white bg-slate-950 font-jelly text-[3vw] sm:text-[2vw] absolute top-[40%] w-full text-center"
          style={{ opacity: 0.8 }}
        >
          {brandTitle[idx]}
        </h1>
      </div>

      {/* Image that hides on hover */}
      <Image
        src={`/${image}`}
        height={10000}
        width={10000}
        className="image w-full h-full object-cover object-center transition-opacity duration-300 hover:opacity-0"
        alt={`Image of ${brandTitle[idx]}`}
      />
    </div>
  );
};

export default Card;

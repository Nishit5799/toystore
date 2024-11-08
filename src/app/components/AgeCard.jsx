import Image from "next/image";
import React from "react";

const AgeCard = ({ image, idx }) => {
  return (
    <div className="sm:h-[20vw] sm:w-[16vw] w-24 flex items-center justify-center rounded-xl overflow-hidden relative transform transition duration-300 ease-out hover:scale-105">
      <Image
        priority
        key={idx}
        src={`/${image}`}
        height={10000}
        width={10000}
        className="image w-full h-full object-cover object-center transform transition duration-300 ease-out hover:scale-110"
        alt={`Image of ${image}`}
      />
    </div>
  );
};

export default AgeCard;

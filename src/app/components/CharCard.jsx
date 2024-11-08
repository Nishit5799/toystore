import Image from "next/image";
import React from "react";

const CharCard = ({ image, idx }) => {
  return (
    <div className="sm:h-[18vw] sm:w-[16vw] w-24 flex items-center justify-center rounded-full overflow-hidden relative transform transition duration-300 ease-out hover:scale-105">
      <Image
        key={idx}
        src={`/${image}`}
        height={10000}
        width={10000}
        className="w-full h-full object-cover object-center transform transition duration-300 ease-out hover:scale-110"
        alt={`Image of ${image}`}
      />
    </div>
  );
};

export default CharCard;

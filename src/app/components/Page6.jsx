import React from "react";
import Page6_CharacterCollection from "./Page6_CharacterCollection";
import Page6_Heading from "./Page6_Heading";

const Page6 = () => {
  return (
    <div className=" page6 relative sm:min-h-[1vh] min-h-[30vh] sm:w-full font-['Bayon'] overflow-hidden py-10 sm:px-20 sm:py-10 sm:flex sm:gap-10 sm:flex-wrap sm:items-center">
      <Page6_Heading />
      <Page6_CharacterCollection />
    </div>
  );
};

export default Page6;

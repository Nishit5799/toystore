import React from "react";

import Page5_heading from "./Page5_Heading";
import Page5_AgeCollection from "./Page5_AgeCollection";

const Page5 = () => {
  return (
    <div className="  page5  relative sm:min-h-[1vh] min-h-[40vh] sm:w-full font-['Bayon'] overflow-hidden py-10 sm:px-20 sm:py-10 sm:flex sm:gap-10 sm:flex-wrap sm:items-center">
      <Page5_heading />
      <Page5_AgeCollection />
    </div>
  );
};

export default Page5;

"use client";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center z-[999]">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSkeleton;

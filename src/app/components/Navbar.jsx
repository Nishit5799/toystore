"use client";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options = ["Category", "Brand", "Age", "Characters"];

  const handleNextPageScroll = () => {
    const element = document.querySelector(".page2");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  // Function to scroll to .page4 specifically for "Brand"
  const handleBrandPageScroll = () => {
    const element = document.querySelector(".page4");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };
  const handleAgePageScroll = () => {
    const element = document.querySelector(".page6");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  // GSAP Animation for the Navbar
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo-white", {
      y: "-200%",
      duration: 2,
      ease: "expo.out",
    }).from(
      ".options h1",
      {
        y: "-50%",
        stagger: 0.1,
        ease: "expo.out",
        opacity: 0,
      },
      0
    );
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="max-w-screen-3xl py-4 sm:pt-2 sm:pb-0 w-full px-10 mx-auto sm:px-[5vw] flex justify-between items-center font-['Bayon'] absolute bg-transparent top-0 left-0 bg-[#F7F1EC] z-10">
        <div className="logo-container h-16 w-16 rounded-full overflow-hidden sm:h-28 sm:w-28 cursor-pointer">
          <Link href="/">
            <Image
              priority
              src="/logoo.svg"
              height={1000}
              width={1000}
              alt="funtoy"
              className="w-full h-full logo-white"
            />
          </Link>
        </div>

        <div className="hidden sm:flex gap-14 overflow-hidden  z-15">
          {options.map((e, i) => (
            <div
              key={i}
              className="options text-lg w-fit h-7 sm:h-9 font-choco text-black font-normal sm:hover:-translate-y-8 sm:text-3xl sm:hover:text-white sm:transition-all sm:duration-300 cursor-pointer"
            >
              <h1
                onClick={
                  e === "Brand"
                    ? handleBrandPageScroll
                    : handleNextPageScroll || e === "Age"
                    ? handleAgePageScroll
                    : handleNextPageScroll
                }
              >
                {e} <br /> {e}
              </h1>
            </div>
          ))}
        </div>

        <div className="sm:hidden">
          <IoMdMenu
            size={24}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-[#f7f1eccb] bg-cover bg-center z-50 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 mr-10 flex justify-end text-black">
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col items-center space-y-6 mt-10">
          {options.map((option, index) => (
            <h1
              key={index}
              className="text-2xl text-black cursor-pointer hover:text-black"
              onClick={
                option === "Brand"
                  ? handleBrandPageScroll
                  : handleNextPageScroll
              }
            >
              {option}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

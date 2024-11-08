import { BiDownArrowAlt } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
const Page1_DownArrow = () => {
  const handleDownArrow = () => {
    const element = document.querySelector(".page2");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY; // Calculate the element's position from the top of the page
      window.scrollTo({
        top: elementPosition, // Scroll to the top of the element
        left: 0,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".menu .menus", {
      opacity: 1,
      y: -4,
      duration: 1,
      ease: "expo.out",
    }).to(".menu .menus", {
      y: 4,
      color: "#475569",
      opacity: 1,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div
      className="top-[85vh] left-[45vw] menu  sm:h-14 sm:w-14 rounded-full  flex items-center justify-center  absolute z-[12] sm:top-[40vw] cursor-pointer sm:left-[47vw] "
      onClick={handleDownArrow}
    >
      <div className="menus w-full h-full text-slate-400 flex items-center justify-center">
        <BiDownArrowAlt size={40} />
      </div>
    </div>
  );
};

export default Page1_DownArrow;

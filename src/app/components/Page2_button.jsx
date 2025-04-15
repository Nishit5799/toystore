import gsap from "gsap";
import Link from "next/link";

const Page2_button = () => {
  const text = "Buy Now";
  const text2 = "Explore";
  const letters = text
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter)); // Replace space with a non-breaking space
  const letters2 = text2
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter)); // Replace space with a non-breaking space

  // GSAP effect on hover
  const handleMouseEnter = (e) => {
    const spans = e.currentTarget.querySelectorAll("span");
    spans.forEach((span, index) => {
      gsap.to(span, {
        y: 5,
        duration: 0.08,
        ease: "linear",
        delay: index * 0.05,
        yoyo: true,
        repeat: 1,
      });
    });
  };

  const handleMouseLeave = (e) => {
    const spans = e.currentTarget.querySelectorAll("span");
    gsap.to(spans, {
      y: 0,
      duration: 0.2,
      ease: "linear",
    });
  };
  const handleDownArrow = () => {
    const element = document.querySelector(".page3");
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
  return (
    <>
      <div className="flex flex-col gap-5 font-choco tracking-wider">
        <button
          className="btn mt-[20vw] text-sm sm:mt-1 sm:mb-5 text-md px-4 sm:px-8 sm:py-2 mx-auto  sm:text-xl  text-white  sm:w-[9vw] rounded-full bg-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleDownArrow}
        >
          {letters2.map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </button>
        <Link href={"/collection"}>
          <button
            className="btn  text-sm sm:mt-1 text-md px-4 sm:px-8 sm:py-2 mx-auto  sm:text-xl sm:mb-10 text-white   sm:w-[9vw] rounded-full bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {letters.map((letter, index) => (
              <span key={index} className="inline-block ">
                {letter}
              </span>
            ))}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Page2_button;

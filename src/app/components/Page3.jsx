import { useEffect, useState } from "react"; // Import useState and useEffect
import { Canvas } from "@react-three/fiber";
import Model3 from "./Model3";
import Page3_Heading from "./Page3_Heading";
import Page3_Para from "./Page3_Para";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Page3_button from "./Page3_button";

const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".page3",
      {
        background: "linear-gradient(to right, #6B46C1, #D53F8C)",
      },
      {
        background: "linear-gradient(to right, #6B46C1, #D53F8C)",
        color: "black",
        duration: 1,
        scrollTrigger: {
          trigger: ".page3",
          start: "top 95%",
          end: "top 93%",
          scrub: 3,
        },
      }
    );
  });

  // State to hold light position
  const [lightPosition, setLightPosition] = useState([0, 8, 9]);
  const [lightIntensity, setLightIntensity] = useState(23);

  // Update the light position based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Tailwind's 'sm' breakpoint
        setLightPosition([8, 8, 9]); // Move light on x by 3 for small screens
        setLightIntensity(40);
      } else {
        setLightPosition([0, 8, 9]); // Default position for larger screens
        setLightIntensity(23);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call it initially
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="min-h-[100vh] sm:h-[116vh] w-full sm:flex font-['Bayon'] text-white  page3">
        <div className="hidden sm:w-[42.3vw] sm:flex sm:items-center sm:justify-center sm:h-full ">
          <Canvas shadows>
            <ambientLight intensity={lightIntensity} />
            <directionalLight
              castShadow
              position={lightPosition}
              intensity={25}
            />{" "}
            {/* Use dynamic light position */}
            <Model3 />
          </Canvas>
        </div>
        <div className="container w-full h-full text-center sm:flex sm:flex-col sm:justify-between sm:items-center sm:h-full sm:w-1/2 px-10 py-7 ">
          <Page3_Heading />
          <div className="w-full relative h-[50vw] overflow-hidden rounded-md sm:hidden ">
            <div className="overlay w-full h-full absolute top-0 left-0 z-[100] bg-transparent"></div>
            <Canvas shadows>
              <ambientLight intensity={23} />
              <directionalLight
                castShadow
                position={lightPosition}
                intensity={25}
              />{" "}
              {/* Use dynamic light position */}
              <Model3 />
            </Canvas>
          </div>
          <Page3_Para />
          <Page3_button />
        </div>
      </div>
    </>
  );
};

export default Page3;

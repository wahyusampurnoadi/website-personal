import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 data-aos="fade-right" data-aos-once="false" ref={textRef} className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-700 to-pink-600 mb-2">
            I'm a Front-End Developer
          </h2>
          <p data-aos="fade-right" data-aos-once="false" className="text-gray-400 py-4 max-w-md mb-5">
            I have expertise in the field of front-end developers, namely using programming languages such as <span className="underline decoration-yellow-500 font-bold">JavaScript</span> with{" "}
            <span className="underline decoration-sky-600 font-bold">React</span> and frameworks such as <span className="underline decoration-purple-500 font-bold">bootstrap</span> and{" "}
            <span className="underline decoration-sky-300 font-bold">tailwindcss</span>.
          </p>

          <div data-aos="fade-right" data-aos-once="false">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer focus:ring-2 shadow-2xl hover:shadow-md hover:shadow-sky-600 duration-700"
            >
              Portfolio
              <span className="rotate-90">
                <MdOutlineDoubleArrow size={20} className="relative bottom-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full shadow-2xl mt-10 mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Home;

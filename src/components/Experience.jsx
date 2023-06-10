import React, { useEffect } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-slate-900 w-full h-auto">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-10 mt-32">
          <p data-aos="fade-right" data-aos-once="false" className="text-4xl font-bold border-b-4 border-blue-700 p-2 inline">
            Experience
          </p>
          <p data-aos="fade-right" data-aos-once="false" className="py-6">
            If you want to give suggestions or want to appreciate, please type a message below
          </p>
        </div>

        <div data-aos="fade-down" data-aos-once="false" className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-16 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 ${style}`}>
              <img src={src} alt="logo-tech" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

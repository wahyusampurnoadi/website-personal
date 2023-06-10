import React, { useEffect, useState } from "react";
import gedhangKondhang from "../assets/portfolio/gedhangKondhang.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import cardProfile from "../assets/portfolio/cardProfile.jpg";
import personalWeb from "../assets/portfolio/personalWeb.jpg";
import photoPortfolio from "../assets/portfolio/photoPortfolio.jpg";
import wedding from "../assets/portfolio/wedding.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const portfolios = [
    {
      id: 1,
      src: gedhangKondhang,
      href: "https://github.com/wahyusampurnoadi/gedhang-kondhang",
      link: "https://gedhangkondhang.vercel.app/",
    },
    {
      id: 2,
      src: wedding,
      href: "https://github.com/wahyusampurnoadi/wedding-website",
      link: "https://sukronintan.netlify.app/",
    },
    {
      id: 3,
      src: cardProfile,
      href: "https://github.com/wahyusampurnoadi/card-profile",
      link: "https://wahyusampurnoadi.github.io/card-profile/",
    },
    {
      id: 4,
      src: personalWeb,
      href: "https://replit.com/@wahyusampurnoadi/portfolio",
      link: "https://portfolio.wahyusampurnoadi.repl.co",
    },
    {
      id: 5,
      src: calculator,
      href: "https://github.com/wahyusampurnoadi/kalkulator",
      link: "https://wahyusampurnoadi.github.io/kalkulator/",
    },
    {
      id: 6,
      src: photoPortfolio,
      href: "https://replit.com/@wahyusampurnoadi/portfolio-foto",
      link: "https://portfolio-foto.wahyusampurnoadi.repl.co",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-slate-900 to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p data-aos="fade-right" data-aos-once="false" className="text-4xl font-bold inline border-b-4 border-blue-700">
            Portfolio
          </p>
          <p data-aos="fade-right" data-aos-once="false" className="pt-6">
            Here are some of my website portfolios that I made
          </p>
          <p data-aos="fade-right" data-aos-once="false" className="pt-2">
            <span className="underline decoration-red-500 font-bold">click</span> to know more about my project
          </p>
        </div>

        <div data-aos="fade-up" data-aos-once="false" className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 mt-5">
              <img src={src} alt="foto-portfolio" className="duration-200 hover:scale-105 cursor-pointer" onClick={() => openImage(src)} />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400">
                  Code
                </a>
                <a href={link} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative mt-24">
              <img src={selectedImage} alt="selected-portfolio" className="lg:max-w-screen-lg max-h-screen" />
              <button className="absolute w-20 h-10 lg:top-0 lg:right-0 bottom-56 right-0 md:top-0 md:right-0 m-4 p-2 rounded-full bg-red-500 text-white" onClick={closeImage}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

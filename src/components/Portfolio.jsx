import React, { useEffect } from "react";
import gedhangKondhang from "../assets/portfolio/gedhangKondhang.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import cardProfile from "../assets/portfolio/cardProfile.jpg";
import onlineShop from "../assets/portfolio/onlineShop.jpg";
import personalWeb from "../assets/portfolio/personalWeb.jpg";
import photoPortfolio from "../assets/portfolio/photoPortfolio.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const portfolios = [
    {
      id: 1,
      src: gedhangKondhang,
      href: "https://github.com/wahyusampurnoadi/gedhang-kondhang",
      link: "https://gedhangkondhang.vercel.app/",
    },
    {
      id: 2,
      src: onlineShop,
      href: "https://github.com/wahyusampurnoadi/portofolio",
      link: "https://wahyusampurnoadi.github.io/portofolio/",
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
              <img src={src} alt="foto-portfolio" className="duration-200 hover:scale-105" />
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
      </div>
    </div>
  );
};

export default Portfolio;

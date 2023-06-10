import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-slate-900 to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p data-aos="fade-right" data-aos-once="false" className="text-4xl font-bold inline border-b-4 border-blue-700">
            Contact
          </p>
          <p data-aos="fade-right" data-aos-once="false" className="py-6">
            If you want to give suggestions or want to appreciate, please type a message below
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/ef1ebfd2-5bae-44c9-92db-442b8028f802" method="POST" className="flex flex-col w-full md:w-1/2">
            <label data-aos="fade-up" data-aos-once="false" htmlFor="name" className="mb-2">
              Name :
            </label>
            <input data-aos="fade-up" data-aos-once="false" type="text" name="name" placeholder="Enter your name" required className="p-2 mb-5 bg-transparent border-2 rounded-md text-white focus:outline-none border-cyan-500" />
            <label data-aos="fade-up" data-aos-once="false" htmlFor="email" className="mb-2">
              Email :
            </label>
            <input data-aos="fade-up" data-aos-once="false" type="email" name="email" placeholder="Enter your email" required className="p-2 mb-5 bg-transparent border-2 rounded-md text-white focus:outline-none border-cyan-500" />
            <label data-aos="fade-up" data-aos-once="false" htmlFor="message" className="mb-2">
              Message :
            </label>
            <textarea data-aos="fade-up" data-aos-once="false" name="message" placeholder="Enter your message" rows="10" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-cyan-500"></textarea>

            <button data-aos="zoom-in-up" data-aos-once="false" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

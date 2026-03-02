import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white px-6 md:px-16">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Mr. Green</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Frontend Developer | React Specialist
          </h2>

          <p className="text-gray-500 mb-8 max-w-md">
            I build modern, responsive, and user-friendly web applications 
            using React, Tailwind CSS, and clean code practices.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl text-gray-400">
            
            <a href="https://github.com/Sobuj301?tab=repositories"  target="blank" className="hover:text-white transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/md-sobuj-rana-ba947a359/" target="blank" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>

            <a href="https://www.facebook.com/sbj301/" target="blank" className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>

            {/* Profile Image */}
            <img
              src="https://url-shortener.me/F8HU"
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-800 shadow-2xl relative z-10 hover:scale-105 transition duration-300"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
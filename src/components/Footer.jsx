import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { GiThunderBlade } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Mr</span>
            <span className="text-blue-500">Green</span>
          </h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-gray-400 space-y-2">
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span>mrgreen@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <span>+8801739743997</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <BsInstagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <LiaLinkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <GiThunderBlade size={24} />
          </a>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mr Green. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
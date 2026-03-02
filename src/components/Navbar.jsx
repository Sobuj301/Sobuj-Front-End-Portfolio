import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, Events } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Scroll listener for shadow and background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link on scroll using react-scroll
  useEffect(() => {
    Events.scrollEvent.register('end', function(to) {
      setActiveLink(to);
    });
    return () => Events.scrollEvent.remove('end');
  }, []);

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 ${scrollY ? "bg-black/90 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer text-white">
          Mr<span className="text-blue-500">Green</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-white">
          {navLinks.map(item => (
            <li key={item.link}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                offset={-80}
                className={`cursor-pointer transition-all duration-300 ${activeLink === item.link ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "" : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-10 text-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close button at top-right */}
        <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </div>

        {navLinks.map(item => (
          <Link
            key={item.link}
            to={item.link}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer transition-all duration-300 ${activeLink === item.link ? "text-blue-500 font-semibold" : "hover:text-blue-400"}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
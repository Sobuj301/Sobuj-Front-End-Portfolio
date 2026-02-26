import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // <-- react-scroll import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Scroll listener for background change
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scroll ? "bg-white shadow-md text-black" : "bg-white/90 text-black"}`}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          Sobuj<span className="text-blue-500">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                offset={-80} // height of navbar
                className="hover:text-blue-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Close Button */}
        <div className="absolute top-5 right-5 cursor-pointer" onClick={closeMenu}>
          <X size={28} />
        </div>

        {navLinks.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu} // close menu on link click
            className="hover:text-blue-400 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
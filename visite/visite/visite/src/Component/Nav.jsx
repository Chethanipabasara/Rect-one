import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Community", href: "/community" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full px-4 sm:px-8 py-4 flex justify-between items-center z-30 text-white bg-gradient-to-r 06e] [#cf7388]  from-[#f39b86] via-[#eaa06e] to-[#cf7388] bg-opacity-90 backdrop-blur-md">
      <h1 className="text-lg font-bold">Notosan</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 items-center">
        {navLinks.map(({ name, href }) => (
          <li key={name} className="hover:text-white/80 cursor-pointer">
            <a href={href}>{name}</a>
          </li>
        ))}
        <li>
          <a
            href="/register"
            className="px-4 py-1 border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            Register
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white px-6 py-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-sm hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            href="/register"
            className="mt-4 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition text-sm"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;

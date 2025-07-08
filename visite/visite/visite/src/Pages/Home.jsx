import React, { useState } from "react";
import backgroundVideo from "../assets/background.mp4";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Community", href: "#community" },
    { name: "About", href: "#about" },
    { name: "Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen font-sans text-white overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d5e] via-[#713b7c] to-[#ec6c5a] z-0 opacity-80" />

      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 scale-x-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-8 py-4 flex justify-between items-center z-30 text-white  ">
        <h1 className="text-3xl font-bold">Notosan</h1>

       
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="hover:text-white/80 cursor-pointer">
              <a href={href}>{name}</a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="px-4 py-1 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Register
            </a>
          </li>
        </ul>

       
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        
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
              href="#register"
              className="mt-4 px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition text-sm"
            >
              Register
            </a>
          </div>
        )}
      </nav>

     
      <div className="relative z-20 px-4 sm:px-8 pt-32 sm:pt-44 w-full max-w-7xl mx-auto flex justify-start">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] text-left">
          <div className="flex items-center mb-4 space-x-2 text-indigo-400 text-sm sm:text-base">
            <span role="img" aria-label="chart">📊</span>
            <p>Journey to new frontiers. Journey to Noto Nature Park</p>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-6 sm:mb-8 leading-tight">
            VISITE
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100 drop-shadow-md">
            Away from the manic energy of Japan’s famous metropolises lies the
            ancient hamlet of Noto. Surprising and captivating in equal measure,
            Noto is a region like no other. Soaring peaks, lakes and endless
            waterfalls.
          </p>

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-md font-medium flex items-center hover:bg-gray-200 transition text-sm sm:text-base">
            Start the journey <span className="ml-2">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

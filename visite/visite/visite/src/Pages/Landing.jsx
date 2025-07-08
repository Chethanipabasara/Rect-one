import React from "react";
import landingVideo from "../assets/Landing.mp4";

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={landingVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      
      <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest mb-2 text-purple-300">
            03 Habitat
          </p>
          <div className="pb-2 border-b border-white w-full mb-6">
            <h1 className="text-6xl font-bold mb-6 text-gray-300">Biodiversity</h1>
          </div>

          <p className="text-lg leading-relaxed text-gray-300 mb-8 max-w-xl">
            Away from the manic energy of Japan's famous metropolis lies the ancient
            hamlet of Noto. Surprising and captivating in equal measure, Noto is a
            region like no other. Soaring peaks, lakes and endless waterfalls combine
            to form a habitat for a biodiverse range of species. Away from the manic
            energy of Japan's famous metropolis lies the ancient hamlet of Noto.
            Surprising and cap-
          </p>
          <a href="#" className="flex items-center text-lg text-gray-300">
            <span className="mr-2">—</span> Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;

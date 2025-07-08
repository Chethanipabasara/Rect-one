export default function HeroSection() {
  return (
    <section className="relative w-full h-screen text-white font-sans bg-black overflow-hidden">
      <div className="relative w-full h-full min-h-screen">

       
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div className="absolute inset-0 bg-black/40 z-10" />

        
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-10 py-6">
         
          <div className="flex-grow flex items-center justify-end">
            <div className="text-right max-w-3xl pr-8">
              <p className="uppercase tracking-widest text-2xl text-purple-300 mb-6">02.Experience</p>
              <div className="pb-2 border-b border-white w-full mb-6">
                <h2 className="text-7xl md:text-8xl font-serif mb-8 leading-tight">Tranquility</h2>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                Away from the manic energy of Japan’s famous metropolises lies the ancient hamlet of Kochi.
                Surrounded by spiritual temples, Kochi is a region where silence, nature, and wisdom blend
                into peace. Join the wise ones by the water and discover calm like never before.
              </p>
              <a href="#" className=" text-white  transition text-xl">— Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

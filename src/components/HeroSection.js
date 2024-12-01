import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white h-[70vh] flex  flex-row justify-between items-center  bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/images/HeroSection.jpeg')",
      }}
    >
      {/* Sol Taraf Yazılar */}
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold lg:text-6xl px-6 lg:px-20">
          Explore Türkiye <br /> & Save in best places!
        </h1>
      </div>

      {/* Sağdaki Düğme */}
      <div className="flex justify-end h-full items-center">
        <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-l-lg rounded-r-none shadow-lg hover:bg-teal-600">
          Buy Now!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

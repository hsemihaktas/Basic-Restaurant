import React from "react";

const HomePageHowItWorksSection = () => {
  return (
    <div className="h-1/2">
      <div
        className="relative bg-contain px-8 lg:px-64 py-12"
        style={{
          backgroundImage: `url('/images/how-bg.png')`,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Sol: Metin Alanı */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-4">
              How Does It Work?
            </h3>
            <p className="text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>

          {/* Sağ: Video Placeholder */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="bg-gray-300 h-48 lg:h-64 w-full rounded-lg flex items-center justify-center shadow-md">
              <button className="text-gray-600 text-5xl">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHowItWorksSection;

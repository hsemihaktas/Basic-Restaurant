import React from "react";
import { Link } from "react-router-dom";

const HomePageAppShowcase = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row items-center justify-center md:gap-2 px-8 md:px-16 lg:px-32 py-12">
      {/* Telefon görseli */}
      <div className="w-1/4 flex justify-center"> {/* Sol div: Genişlik 1/4 */}
        <img
          src="/images/phone-mockup.png" // Telefon resminizin yolu
          alt="Phone Mockup"
          className="max-h-full object-cover"
        />
      </div>

      {/* Açıklama ve butonlar */}
      <div className="w-3/4 text-center md:text-left"> {/* Sağ div: Genişlik 3/4 */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {/* Google Play Butonu */}
          <Link to="/google-play" className="inline-block">
            <img
              src="/images/google-play.png" // Google Play görselinizin yolu
              alt="Get it on Google Play"
              className="h-12 object-contain"
            />
          </Link>
          {/* App Store Butonu */}
          <Link to="/app-store" className="inline-block">
            <img
              src="/images/app-store.png" // App Store görselinizin yolu
              alt="Download on the App Store"
              className="h-12 object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageAppShowcase;

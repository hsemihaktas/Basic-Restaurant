import React from "react";

const HomePageMembershipPlans = () => {
  return (
    <div className="h-1/2">
      <div
        className="relative bg-contain px-8 lg:px-64"
        style={{
          backgroundImage: `url('/images/membership-bg.png')`, // Arka plan resmi
        }}
      >
        <div className="flex">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            {/* Sol taraf: Yazılar ve kartlar */}
            <div className="flex-1 w-full lg:w-3/4 text-white ml-10  py-8">
              {/* Başlık ve açıklama */}
              <h2 className="text-3xl font-bold mb-6">
                Choose Your Membership & Start Saving
              </h2>
              <p className="text-gray-100 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>

              {/* Kartlar */}
              <div className="flex gap-4 justify-center">
                <img
                  src="/images/diamond-card.png"
                  alt="Diamond Card"
                  className="w-full sm:w-36 max-w-xs"
                />
                <img
                  src="/images/gold-card.png"
                  alt="Gold Card"
                  className="w-full sm:w-36 max-w-xs"
                />
                <img
                  src="/images/silver-card.png"
                  alt="Silver Card"
                  className="w-full sm:w-36 max-w-xs"
                />
              </div>
            </div>

            {/* Sağ taraf: Kızın resmi (Telefon ve tablet boyutlarında gizlendi) */}
            <div className="w-1/4 h-full pt-4 relative hidden lg:block">
              <img
                src="/images/girl.png"
                alt="Girl"
                className="max-h-full mx-auto object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMembershipPlans;

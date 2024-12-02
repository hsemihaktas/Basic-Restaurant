import React, { useState, useRef } from "react";
import { FaUtensils, FaCamera, FaShoppingBag, FaHeartbeat } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const HomePageFilterArea = ({ onMembershipChange }) => {
  const [selectedMembership, setSelectedMembership] = useState("Silver");
  const filterContainerRef = useRef(null);

  // Tüm filtreler ve ikonları
  const allFilters = [
    { name: "Dining", icon: <FaUtensils /> },
    { name: "Attractions", icon: <FaCamera /> },
    { name: "Shopping", icon: <FaShoppingBag /> },
    { name: "Health", icon: <FaHeartbeat /> },
  ];

  // Filtre renk mantığı
  const getFilterColor = (filterIndex) => {
    if (selectedMembership === "Silver") {
      return filterIndex < 2 ? "text-black" : "text-gray-500";
    } else if (selectedMembership === "Gold") {
      return filterIndex < 3 ? "text-yellow-500" : "text-gray-500";
    } else if (selectedMembership === "Diamond") {
      return "text-blue-500";
    }
    return "text-gray-500";
  };

  const handleMembershipChange = (membership) => {
    setSelectedMembership(membership);
    onMembershipChange(membership);
  };

  // Kaydırma fonksiyonları
  const scrollLeft = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="-mt-16 text-white p-6 rounded-lg">
      {/* Üyelik Seçenekleri */}
      <div className="flex justify-center space-x-4 lg:space-x-8 mb-6">
        <div
          className={`flex items-center justify-center w-32 h-20 lg:w-48 lg:h-24 p-4 rounded-lg cursor-pointer font-bold bg-gray-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Silver" ? "scale-110" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Silver")}
        >
          <h3 className="text-center text-sm lg:text-base">
            Silver <br />
            Membership
          </h3>
        </div>
        <div
          className={`flex items-center justify-center w-32 h-20 lg:w-48 lg:h-24 p-4 rounded-lg cursor-pointer font-bold bg-yellow-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Gold" ? "scale-110" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Gold")}
        >
          <h3 className="text-center text-sm lg:text-base">
            Gold <br />
            Membership
          </h3>
        </div>
        <div
          className={`flex items-center justify-center w-32 h-20 lg:w-48 lg:h-24 p-4 rounded-lg cursor-pointer font-bold bg-blue-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Diamond" ? "scale-110" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Diamond")}
        >
          <h3 className="text-center text-sm lg:text-base">
            Diamond <br />
            Membership
          </h3>
        </div>
      </div>

      {/* Filtreleme Seçenekleri */}
      <div className="relative bg-white p-2 rounded-full border border-gray-300 w-11/12 lg:w-3/5 mx-auto">
        {/* Oklar (Sadece küçük ekranlarda) */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10 lg:hidden"
          onClick={scrollLeft}
        >
          <IoChevronBack size={24} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10 lg:hidden"
          onClick={scrollRight}
        >
          <IoChevronForward size={24} />
        </button>

        {/* Filtreler */}
        <div
          ref={filterContainerRef}
          className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide px-8"
          style={{
            scrollbarWidth: "none", // Modern tarayıcılarda scrollbar gizleme
            msOverflowStyle: "none", // IE ve eski tarayıcılarda scrollbar gizleme
          }}
        >
          {allFilters.map((filter, index) => (
            <React.Fragment key={filter.name}>
              <button
                className={`flex items-center justify-center w-full font-bold py-2 transition ${
                  getFilterColor(index)
                }`}
              >
                <span className="text-xl mr-2">{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
              {/* Aradaki dik çizgi */}
              {index < allFilters.length - 1 && (
                <div className="h-6 w-px bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageFilterArea;

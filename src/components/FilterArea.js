import React, { useState } from "react";
import { FaUtensils, FaCamera, FaShoppingBag, FaHeartbeat } from "react-icons/fa"; // İkonlar

const FilterArea = ({ onMembershipChange }) => {
  const [selectedMembership, setSelectedMembership] = useState("Silver");

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
      return filterIndex < 2 ? "text-black" : "text-gray-400";
    } else if (selectedMembership === "Gold") {
      return filterIndex < 3 ? "text-yellow-500" : "text-gray-400";
    } else if (selectedMembership === "Diamond") {
      return "text-blue-500";
    }
    return "text-gray-400"; // Default renk
  };

  const handleMembershipChange = (membership) => {
    setSelectedMembership(membership);
    onMembershipChange(membership); // Parent bileşene seçimi gönder
  };

  return (
    <div className="-mt-16 text-white p-6 rounded-lg">
      {/* Üyelik Seçenekleri */}
      <div className="flex justify-center space-x-8 mb-6 h-24">
        <div
          className={`flex w-48 items-center p-4 rounded-lg cursor-pointer font-bold bg-gray-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Silver" ? "scale-125" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Silver")}
        >
          <h3>
            Silver <br />
            Membership
          </h3>
        </div>
        <div
          className={`flex w-48 items-center p-4 rounded-lg cursor-pointer font-bold bg-yellow-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Gold" ? "scale-125" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Gold")}
        >
          <h3>
            Gold <br />
            Membership
          </h3>
        </div>
        <div
          className={`flex w-48 items-center p-4 rounded-lg cursor-pointer font-bold bg-blue-500 text-white transform transition-transform duration-200 ${
            selectedMembership === "Diamond" ? "scale-125" : "scale-100"
          }`}
          onClick={() => handleMembershipChange("Diamond")}
        >
          <h3>
            Diamond <br />
            Membership
          </h3>
        </div>
      </div>

      {/* Filtreleme Seçenekleri */}
      <div className="bg-white p-2 rounded-full border border-gray-300 flex items-center justify-between w-1/2 mx-auto">
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
            {index < allFilters.length - 1 && (
              <div className="h-6 w-px bg-gray-300 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FilterArea;

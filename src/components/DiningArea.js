import React from "react";

const DiningArea = ({ restaurants }) => {
  return (
    <div className="w-full bg-white py-6 px-16 mb-6 lg:px-48">
      <h3 className="text-2xl font-semibold mb-4">Dining</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-24">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white overflow-hidden"
            >
              {/* Card content wrapper */}
              <div className="flex flex-col">
                <img
                  src="/images/HeroSection.jpeg"
                  alt={restaurant.name}
                  className="w-full h-48 object-cover object-bottom rounded-2xl"
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">
                    {restaurant.name}
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No restaurants available.</p>
        )}
      </div>
    </div>
  );
};

export default DiningArea;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePageAttractionsArea = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Bearer token'ı localStorage'dan kontrol et
    const token = localStorage.getItem("token"); // veya sessionStorage.getItem("token");

    if (!token) {
      // Eğer token yoksa, login sayfasına yönlendir
      navigate("/login");
    } else {
      // Token varsa restaurant verilerini çek
      fetch("https://localhost:7181/api/Restaurant/GetAll", {
        method: "GET",
        headers: {
          Accept: "text/plain",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch restaurants");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched restaurants:", data); // Restoranları konsola yazdır
          setRestaurants(data);
        })
        .catch((error) => {
          console.error("Error fetching restaurants:", error);
        });
    }
  }, [navigate]);

  return (
    <div className="w-full bg-white py-6 px-16 mb-6 lg:px-48">
      <h3 className="text-2xl font-semibold mb-4">Attractions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-24">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white overflow-hidden">
              {/* Card content wrapper */}
              <div className="flex flex-col">
                <img
                  src={`https://localhost:7181${restaurant.imageURL}`} // Dynamically set the image URL
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

export default HomePageAttractionsArea;

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const HomePageDiningArea = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all or just the first 4
  const navigate = useNavigate();

  useEffect(() => {
    // Bearer token'ı localStorage'dan kontrol et
    const token = localStorage.getItem("token");

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
          setRestaurants(data);
        })
        .catch((error) => {
          console.error("Error fetching restaurants:", error);
        });
    }
  }, [navigate]);

  // Get the first 4 restaurants if not showing all
  const displayedRestaurants = showAll ? restaurants : restaurants.slice(0, 4);

  return (
    <div className="w-full bg-white py-6 px-16 mb-6 lg:px-48">
      <h3 className="text-2xl font-semibold mb-4">Dining</h3>
      
      {/* Simple Grid without animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-24">
        {displayedRestaurants.length > 0 ? (
          displayedRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white overflow-hidden">
              {/* Card content wrapper */}
              <div className="flex flex-col">
                {/* Link to restaurant details page */}
                <Link to={`/detail/${restaurant.id}`}>
                  <img
                    src={`https://localhost:7181${restaurant.imageURL}`} // Dynamically set the image URL
                    alt={restaurant.name}
                    className="w-full h-48 object-cover object-bottom rounded-2xl"
                  />
                </Link>
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

      {/* Show "View More" or "View Less" button */}
      {restaurants.length > 4 && (
        <div className="text-end mt-4">
          <button
            className="text-black font-semibold py-2 px-4 hover:underline hover:decoration-blue-500"
            onClick={() => setShowAll((prevState) => !prevState)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePageDiningArea;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

const RestaurantDetail = () => {
  const { id } = useParams(); // URL'den restaurant ID'yi al
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // localStorage'dan token'ı al

    // Eğer token yoksa, kullanıcıyı login sayfasına yönlendirebilirsiniz
    if (!token) {
      setError("Unauthorized: No token found");
      setLoading(false);
      return;
    }

    // API'den restaurant verilerini çek
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7181/api/Restaurant/GetDetail?id=${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`, // Token'ı header olarak gönder
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }

        const data = await response.json();
        setRestaurant(data);
        setLoading(false); // Veriler başarıyla alındığında loading'i kapat
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="restaurant-detail">
      <h2>{restaurant.name}</h2>
      <img
        src={`https://localhost:7181${restaurant.imageURL}`}
        alt={restaurant.name}
        className="w-full h-48 object-cover rounded-2xl"
      />
      <p><strong>Category:</strong> {restaurant.categoryName}</p>
      <p><strong>Description:</strong> {restaurant.description}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Likes:</strong> {restaurant.numberOfLikes}</p>
      <p><strong>Shares:</strong> {restaurant.numberOfShares}</p>
    </div>
    </>
  );
};

export default RestaurantDetail;

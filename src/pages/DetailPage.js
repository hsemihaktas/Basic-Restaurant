import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailPageHeader from "../components/DetailPageHeader";
import DetailPageImages from "../components/DetailPageImages";
import DetailPageInfo from "../components/DetailPageInfo";

const DetailPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Unauthorized: No token found");
      setLoading(false);
      return;
    }

    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(
          `https://localhost:7181/api/Restaurant/GetDetail?id=${id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }

        const data = await response.json();
        setRestaurant(data);
        setLoading(false);
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
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <DetailPageHeader
          name={restaurant.name}
          description={restaurant.description}
          liked={liked}
          setLiked={setLiked}
          shared={shared}
          setShared={setShared}
        />

        {/* Restaurant Images */}
        <DetailPageImages
          imageURL={restaurant.imageURL}
          additionalImages={restaurant.additionalImages}
        />

        {/* Restaurant Info */}
        <DetailPageInfo
          address={restaurant.address}
          phone={restaurant.number}
          website={restaurant.website}
        />
      </div>
    </>
  );
};

export default DetailPage;

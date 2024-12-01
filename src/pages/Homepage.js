import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router kullanarak yönlendirme
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FilterArea from "../components/FilterArea";
import DiningArea from "../components/DiningArea";
import AttractionsArea from "../components/AttractionsArea";
import ShoppingArea from "../components/ShoppingArea";
import HealthArea from "../components/HealthArea";

const HomePage = () => {
  const [selectedMembership, setSelectedMembership] = useState("Silver");
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate(); // Yönlendirme için hook

  const categoriesByMembership = {
    Silver: ["Dining", "Attractions"],
    Gold: ["Dining", "Attractions", "Shopping"],
    Diamond: ["Dining", "Attractions", "Shopping", "Health"],
  };

  const categoriesToShow = categoriesByMembership[selectedMembership];

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
    <div>
      <Navbar />
      <HeroSection />
      <FilterArea onMembershipChange={setSelectedMembership} />

      {/* DiningArea Gösterimi */}
      {categoriesToShow.includes("Dining") && <DiningArea restaurants={restaurants} />}

      {/* AttractionsArea Gösterimi */}
      {categoriesToShow.includes("Attractions") && <AttractionsArea restaurants={restaurants}/>}

      {/* ShoppingArea Gösterimi */}
      {categoriesToShow.includes("Shopping") && <ShoppingArea restaurants={restaurants}/>}

      {/* HealthArea Gösterimi */}
      {categoriesToShow.includes("Health") && <HealthArea restaurants={restaurants}/>}
    </div>
  );
};

export default HomePage;
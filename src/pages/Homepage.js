import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FilterArea from "../components/HomePageFilterArea";
import DiningArea from "../components/HomePageDiningArea";
import AttractionsArea from "../components/HomePageAttractionsArea";
import ShoppingArea from "../components/HomePageShoppingArea";
import HealthArea from "../components/HomePageHealthArea";

const HomePage = () => {
  const [selectedMembership, setSelectedMembership] = useState("Silver");
  const navigate = useNavigate();

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
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FilterArea onMembershipChange={setSelectedMembership} />

      {/* DiningArea Gösterimi */}
      {categoriesToShow.includes("Dining") && <DiningArea />}

      {/* AttractionsArea Gösterimi */}
      {categoriesToShow.includes("Attractions") && <AttractionsArea/>}

      {/* ShoppingArea Gösterimi */}
      {categoriesToShow.includes("Shopping") && <ShoppingArea/>}

      {/* HealthArea Gösterimi */}
      {categoriesToShow.includes("Health") && <HealthArea/>}
    </div>
  );
};

export default HomePage;
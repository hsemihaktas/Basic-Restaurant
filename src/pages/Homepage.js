import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FilterArea from "../components/FilterArea";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FilterArea/>
        </div>
    );
};

export default HomePage;
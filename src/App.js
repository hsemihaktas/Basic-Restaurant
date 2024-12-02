import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"
import DetailPage from "./pages/DetailPage";
import AddRestaurant from "./pages/AddRestaurant";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/addRestaurant" element={<AddRestaurant/>}/>
            </Routes>
        </Router>
    );
}

export default App;

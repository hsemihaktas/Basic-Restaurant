import React, { useState } from "react";
import { FaSearch, FaHeart, FaUser, FaHome, FaCreditCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-teal-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/NavbarLogo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Icons with Rounded Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4 relative bg-teal-400 py-2 px-2 md:px-4 rounded-full">
          {/* Home Button */}
          <Link
            to="/"
            className="p-1 md:p-2 bg-white text-teal-700 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaHome size={18} />
          </Link>

          {/* Payments Button */}
          <Link
            to="/payments"
            className="p-1 md:p-2 bg-white text-teal-700 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaCreditCard size={18} />
          </Link>

          {/* Favorites Button */}
          <Link
            to="/favorites"
            className="p-1 md:p-2 bg-white text-teal-700 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaHeart size={18} />
          </Link>

          {/* Search Button */}
          <Link
            to="/search"
            className="p-1 md:p-2 bg-white text-teal-700 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaSearch size={18} />
          </Link>

          {/* Profile Icon */}
          <button
            className="p-1 md:p-2 bg-white text-teal-700 rounded-full shadow-md hover:bg-gray-100 border-2 border-dashed border-white"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUser size={18} />
          </button>

          {/* Logout Dropdown */}
          {showLogout && (
            <div className="absolute top-full right-0 mt-2 p-2 bg-white shadow-md rounded-lg w-32">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-teal-700 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false); // State to toggle logout options
  const navigate = useNavigate(); // Use navigate hook for redirecting

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md rounded-br-3xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/NavbarLogo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-gray-800 hover:text-teal-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tours" className="text-gray-800 hover:text-teal-700">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-teal-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Search */}
          <button className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200">
            <FaSearch />
          </button>

          {/* Favorites */}
          <button className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200">
            <FaHeart />
          </button>

          {/* User Profile */}
          <button
            className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200"
            onClick={() => setShowLogout(!showLogout)} // Toggle the logout options
          >
            <FaUser />
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

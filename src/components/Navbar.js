import React from "react";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
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
            <Link to="/" className="text-gray-700 hover:text-teal-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tours" className="text-gray-700 hover:text-teal-700">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-teal-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200">
            <FaSearch />
          </button>

          {/* Favorites */}
          <button className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200">
            <FaHeart />
          </button>

          {/* User Profile */}
          <button className="p-2 bg-gray-100 text-teal-700 rounded-full hover:bg-gray-200">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

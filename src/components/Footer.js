import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Sol Kısım: Linkler ve Copyright */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link
              to="/about-us"
              className="text-gray-800 hover:underline transition"
            >
              About Us
            </Link>
            <Link
              to="/terms"
              className="text-gray-800 hover:underline transition"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="text-gray-800 hover:underline transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:underline transition"
            >
              Contact
            </Link>
          </div>
          <p className="text-gray-800 text-sm mt-4">
            © 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Sağ Kısım: Sosyal Medya İkonları */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

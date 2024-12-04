import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:px-0">
        {/* Sol Kısım: Linkler ve Copyright */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:w-1/2 text-center md:text-left">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center md:justify-start">
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
        <div className="flex justify-center space-x-4 mt-6 md:mt-0 mx-auto">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition mb-4 md:mb-0"
          >
            <FaFacebook />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition mb-4 md:mb-0"
          >
            <FaTwitter />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition mb-4 md:mb-0"
          >
            <FaInstagram />
          </a>
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition mb-4 md:mb-0"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

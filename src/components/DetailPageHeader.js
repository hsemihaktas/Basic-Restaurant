import React from "react";
import { FaRegHeart, FaHeart, FaShareAlt, FaShare } from "react-icons/fa";

const DetailPageHeader = ({ name, description, liked, setLiked, shared, setShared }) => {
  const handleShareClick = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard.writeText(url) // Copy the URL to the clipboard
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        alert('Failed to copy URL: ' + error);
      });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row w-full mb-8">
        {/* Restaurant Name and Buttons Container */}
        <div className="flex items-center justify-between w-full sm:w-1/2 mb-4 sm:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>

          {/* Like and Share Buttons */}
          <div className="flex items-center">
            {/* Like Button */}
            <button
              className="flex items-center justify-center text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-full p-3 mr-2"
              onClick={() => setLiked(!liked)} // Toggle like state
            >
              {liked ? (
                <FaHeart className="text-2xl" />
              ) : (
                <FaRegHeart className="text-2xl" />
              )}
            </button>

            {/* Share Button */}
            <button
              className="flex items-center justify-center text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-full p-3"
              onClick={handleShareClick} // Call handleShareClick to copy URL
            >
              {shared ? (
                <FaShare className="text-2xl" />
              ) : (
                <FaShareAlt className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-1/2 text-lg text-gray-800 mb-8">
        <p>{description}</p>
      </div>
    </>
  );
};

export default DetailPageHeader;

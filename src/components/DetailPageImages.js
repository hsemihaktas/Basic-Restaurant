import React from "react";

const DetailPageImages = ({ imageURL, additionalImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <img
        src={`https://localhost:7181${imageURL}`}
        alt="Main Restaurant"
        className="w-full h-48 object-cover rounded-2xl shadow-lg"
      />
      {additionalImages &&
        additionalImages.map((image, index) => (
          <img
            key={index}
            src={`https://localhost:7181${image}`}
            alt={`Additional view ${index + 1}`}
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
        ))}
    </div>
  );
};

export default DetailPageImages;

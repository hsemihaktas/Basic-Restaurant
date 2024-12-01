import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const DetailPageInfo = ({ address, phone, website }) => {
  return (
    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Address */}
      <div className="bg-white p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2 inline-block underline mr-2">
          <FaMapMarkerAlt className="inline mr-2 text-teal-700" />
          Address:
        </h4>
        <p className="text-gray-700 inline">{address}</p>
      </div>

      {/* Phone Number */}
      <div className="bg-white p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2 inline-block underline mr-2">
          <FaPhoneAlt className="inline mr-2 text-teal-700" />
          Phone:
        </h4>
        <p className="text-gray-700 inline">{phone}</p>
      </div>

      {/* Website */}
      <div className="bg-white p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2 inline-block underline mr-2">
          <FaGlobe className="inline mr-2 text-teal-700" />
          Web:
        </h4>
        <p className="text-gray-700 inline">{website}</p>
      </div>
    </div>
  );
};

export default DetailPageInfo;

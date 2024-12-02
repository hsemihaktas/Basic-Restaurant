import React from "react";

const AddRestaurantInputField = ({ label, id, name, type = "text", value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
};

export default AddRestaurantInputField;

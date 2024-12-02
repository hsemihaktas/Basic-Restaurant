import React from "react";

const AddRestaurantTextAreaField = ({ label, id, name, value, onChange, rows = 3, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        rows={rows}
        required={required}
      />
    </div>
  );
};

export default AddRestaurantTextAreaField;

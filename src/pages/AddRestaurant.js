import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "../components/AddRestaurantInputField";
import TextAreaField from "../components/AddRestaurantTextAreaField";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // useNavigate hook'u eklendi

const AddRestaurant = () => {
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak yönlendirme yapılacak
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    imageURL: "",
    categoryName: "",
    description: "",
    address: "",
    numberOfLikes: 0,
    numberOfShares: 0,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Error: No token found in localStorage.");
      // Token yoksa /login sayfasına yönlendir
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:7181/api/Restaurant/Add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Restaurant added successfully!");
        setFormData({
          id: uuidv4(),
          name: "",
          imageURL: "",
          categoryName: "",
          description: "",
          address: "",
          numberOfLikes: 0,
          numberOfShares: 0,
        });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || "Failed to add restaurant"}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Add New Restaurant
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Image URL"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
            />
            <InputField
              label="Category Name"
              id="categoryName"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              required
            />
            <TextAreaField
              label="Description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <InputField
              label="Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition"
            >
              Add Restaurant
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddRestaurant;

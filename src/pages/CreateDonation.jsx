import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateDonation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    expiration: ""
  });
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("You must be logged in to create a campaign.");
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.amount || !formData.expiration || !image) {
      alert("Please fill all required fields including image.");
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("amount", formData.amount);
      data.append("expiration", formData.expiration);
      data.append("image", image);
      data.append("creatorName", user.name);
      data.append("creatorEmail", user.email);

      await axios.post(`${import.meta.env.VITE_API_URL}/donations`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Donation campaign created successfully!");
      setFormData({ title: "", description: "", amount: "", expiration: "" });
      setImage(null);
      navigate("/donation"); 
    } catch (err) {
      console.error(err);
      alert("Error creating donation campaign");
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white container">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a Donation Campaign</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto" encType="multipart/form-data">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Campaign Title"
          className="w-full p-3 border rounded-lg dark:bg-black"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Campaign Description"
          className="w-full p-3 border rounded-lg dark:bg-black"
          rows={4}
          required
        />
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Target Amount (₹)"
          className="w-full p-3 border rounded-lg dark:bg-black"
          required
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-3 border rounded-lg dark:bg-black"
          required
        />
        <input
          name="expiration"
          type="date"
          value={formData.expiration}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg dark:bg-black"
          required
        />
        <button className="btn-primary w-full rounded-full" type="submit">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateDonation;

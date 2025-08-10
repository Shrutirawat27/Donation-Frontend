import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCampaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    expiration: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/donations/${id}`);
        const { title, description, amount, expiration } = res.data;

        setFormData({
          title,
          description,
          amount,
          expiration: expiration.split("T")[0], 
        });

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch campaign", err);
        alert("Unable to load campaign");
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/donations/${id}`, formData);
      alert("Campaign updated successfully!");
      navigate("/my-campaigns");
    } catch (err) {
  console.error("Update error details:", err.response?.data || err.message);
  alert(err.response?.data?.error || "Failed to update campaign.");
}

  };

  if (loading) return <div className="pt-24 text-center text-xl">Loading...</div>;

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6">
      <div className="max-w-xl mx-auto bg-gray-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Your Campaign</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded bg-white dark:bg-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border px-4 py-2 rounded bg-white dark:bg-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min={1}
              className="w-full border px-4 py-2 rounded bg-white dark:bg-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Expiration Date</label>
            <input
              type="date"
              name="expiration"
              value={formData.expiration}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded bg-white dark:bg-black"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-2 rounded-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCampaign;
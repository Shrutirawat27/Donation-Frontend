import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => {
    if (user?.email) {
      fetchDonations(user.email);
    }
  }, [user]);

  const fetchDonations = async (email) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-donations`, {
        params: { email },
      });
      setDonations(res.data);
    } catch (err) {
      alert("Failed to fetch donations");
    }
  };

  if (!user?.email) {
    return (
      <div className="pt-24 pb-12 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <p className="text-lg font-semibold">Please log in to view your donations.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white container">
      <h1 className="text-3xl font-bold text-center mb-8">Your Donation History</h1>

      {donations.length > 0 ? (
        <ul className="max-w-2xl mx-auto space-y-4">
          {donations.map((d, i) => (
            <li key={i} className="p-4 border rounded-lg bg-gray-100 dark:bg-black dark:text-white">
              <p><strong>Organization/Cause:</strong> {d.cause || "Not specified"}</p>
              <p><strong>Amount Donated:</strong> ₹{d.amount}</p>
              <p><strong>Date:</strong> {new Date(d.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">No donations found</p>
      )}
    </div>
  );
};

export default MyDonations;
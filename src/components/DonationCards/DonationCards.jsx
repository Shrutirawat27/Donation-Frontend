import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonationCards = () => {
  const [donationItems, setDonationItems] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/donations`);
      setDonationItems(res.data);
    } catch (err) {
      console.error("Failed to load donation campaigns", err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleDonate = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to donate.");
      return;
    }

    const input = prompt(`Enter the amount to donate to "${item.title}":`, "100");
    if (!input) return;

    const amount = parseFloat(input);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/donate`, {
        name: user.name,
        email: user.email,
        amount: amount, 
        cause: item.title,
        campaignId: item._id,
      });
      alert(`You donated ₹${amount} to "${item.title}"`);

      fetchCampaigns();
    } catch (err) {
      alert("Donation failed.");
      console.error(err);
    }
  };

  return (
    <div className="pt-24 pb-24 px-4 md:px-12 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Support a Cause</h2>

      {donationItems.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {donationItems
            .filter(item => !item.expired)
            .map((item) => {
              const raised = item.totalDonated || 0;
              const percent = Math.min((raised / item.amount) * 100, 100);

              return (
                <div key={item._id} className="bg-gray-100 dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <img
                    src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between h-[280px]">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-white mb-3">{item.description}</p>

                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        Raised ₹{raised} of ₹{item.amount}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Expires on: {new Date(item.expiration).toLocaleDateString()}
                      </p>
                    </div>

                    <button className="btn-primary w-full rounded-full mt-2" onClick={() => handleDonate(item)}>
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">No campaigns found.</p>
      )}
    </div>
  );
};

export default DonationCards;

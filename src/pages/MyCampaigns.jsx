import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Please login to view your campaigns.");
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    const fetchCampaigns = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-campaigns`, {
          params: { email: parsedUser.email },
        });
        setCampaigns(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch your campaigns");
      }
    };

    fetchCampaigns();
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white container">
      <h1 className="text-3xl font-bold text-center mb-8">My Fundraising Campaigns</h1>

      {campaigns.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <div key={c._id} className="border rounded-lg p-4 bg-gray-100 dark:bg-black shadow">
              <img
                src={c.image ? `${import.meta.env.VITE_API_URL.replace('/api/v1', '')}/uploads/${c.image}` : 'https://via.placeholder.com/400x300?text=No+Image'}
                alt={c.title}
                className="h-48 w-full object-cover rounded mb-4"
              />

              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{c.description}</p>

              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${Math.min((c.totalDonated / c.amount) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Raised ₹{c.totalDonated || 0} of ₹{c.amount}
              </p>
              <p className="text-sm text-gray-500">Expires: {new Date(c.expiration).toLocaleDateString()}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/edit-campaign/${c._id}`)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    const confirmDelete = confirm("Are you sure you want to delete this campaign?");
                    if (!confirmDelete) return;

                    try {
                      await axios.delete(`${import.meta.env.VITE_API_URL}/donations/${c._id}`);
                      alert("Campaign deleted successfully!");
                      setCampaigns(prev => prev.filter(camp => camp._id !== c._id));
                    } catch (err) {
                      console.error(err);
                      alert("Failed to delete campaign.");
                    }
                  }}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">You haven't created any campaigns yet.</p>
      )}
    </div>
  );
};

export default MyCampaigns;

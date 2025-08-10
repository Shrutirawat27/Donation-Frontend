import React from 'react';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white container">
      <h1 className="text-3xl font-bold text-center mb-8">Donation Center</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          onClick={() => navigate("/my-campaigns")}
          className="cursor-pointer p-6 bg-primary/10 border border-primary rounded-xl shadow hover:shadow-lg transition-all"
        >
          <h2 className="text-xl font-bold mb-2">My Campaigns</h2>
          <p>View campaigns you created and track their progress.</p>
        </div>

        <div
          onClick={() => navigate("/create-donation")}
          className="cursor-pointer p-6 bg-primary/10 border border-primary rounded-xl shadow hover:shadow-lg transition-all"
        >
          <h2 className="text-xl font-bold mb-2">Start a Fundraiser</h2>
          <p>Create a new cause for others to support. Add details, image, and expiration.</p>
        </div>

        <div
          onClick={() => navigate("/my-donations")}
          className="cursor-pointer p-6 bg-primary/10 border border-primary rounded-xl shadow hover:shadow-lg transition-all"
        >
          <h2 className="text-xl font-bold mb-2">View My Donations</h2>
          <p>See all the donations you have contributed to.</p>
        </div>

        <div
          onClick={() => navigate("/donate")}
          className="cursor-pointer p-6 bg-primary/10 border border-primary rounded-xl shadow hover:shadow-lg transition-all"
        >
          <h2 className="text-xl font-bold mb-2">Support a Cause</h2>
          <p>See all the donations overall.</p>
        </div>
      </div>
    </div>
  );
};

export default Donation;
import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="pt-24 min-h-screen px-6 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">Our Services</h1>
        <p className="text-lg text-center mb-12 leading-relaxed md:px-0 px-2">
          At <strong>FundFlow</strong>, we provide a comprehensive range of services that connect generosity with meaningful impact.
          Whether you're an individual looking to support a cause or an organization aiming to raise funds, we offer the tools,
          support, and community you need to create real change. Together, we turn compassion into action and donations into
          lasting outcomes.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl shadow-md bg-violet-100 dark:bg-gray-800 text-center">
            <FaHandHoldingHeart size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-violet-800 dark:text-violet-300">Donation Management</h3>
            <p className="text-base">
              Seamlessly manage, track, and optimize your donations with transparency and real-time updates.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-violet-100 dark:bg-gray-800 text-center">
            <FaUsers size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-violet-800 dark:text-violet-300">Volunteer Engagement</h3>
            <p className="text-base">
              Connect with passionate volunteers who are ready to support your cause and drive change.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-violet-100 dark:bg-gray-800 text-center">
            <FaBullhorn size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-violet-800 dark:text-violet-300">Campaign Support</h3>
            <p className="text-base">
              Launch and promote powerful fundraising campaigns with our expert tools and outreach strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

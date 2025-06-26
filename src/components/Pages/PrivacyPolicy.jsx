import React from 'react';
import { FaShieldAlt, FaUserLock, FaSyncAlt, FaLock, FaUserCheck, FaUserShield, FaHistory } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 min-h-screen px-6 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto pb-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
            Your trust matters. Here's how we keep your data safe at <span className="font-semibold text-primary">FundFlow</span>.
          </p>
        </div>

        {/* Icon Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-violet-50 dark:bg-gray-800">
            <FaShieldAlt size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-center text-sm">We use encryption and secure gateways to protect your personal information.</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-violet-50 dark:bg-gray-800">
            <FaUserLock size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-center text-sm">Your data will never be sold. We only share with trusted services when necessary.</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-violet-50 dark:bg-gray-800">
            <FaSyncAlt size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-center text-sm">You can view, update, or delete your data anytime — it's your right.</p>
          </div>
        </div>

        {/* Full Policy Text */}
        <div className="space-y-10 text-base leading-relaxed text-gray-800 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2"><FaUserCheck /> Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name, email, and contact information</li>
              <li>Donation details (amount, campaign, time)</li>
              <li>Usage data like browser type, device info</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2"><FaLock /> How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Process your donations and send receipts</li>
              <li>Keep you informed about causes you care about</li>
              <li>Improve site functionality and personalize experience</li>
            </ul>
          </section>         
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <FaUserShield /> Your Rights & Data Protection
            </h2>
            <p>
              You can request to view, modify, or delete your personal data at any time. We also provide an opt-out for promotional messages. All sensitive data is securely encrypted.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <FaHistory /> Policy Updates
            </h2>
            <p>
              This Privacy Policy may be updated periodically to reflect changes in law or platform features. Continued use of FundFlow indicates your agreement with the latest policy.
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-center mt-10 italic text-gray-500">
          Last updated on: June 23, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

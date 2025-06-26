import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu, isLoggedIn, handleLogout, userName }) => {
  return (
    <div
      className={`fixed top-0 z-50 ${
        showMenu ? 'left-0' : '-left-[100%]'
      } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden`}
    >
      {/* User Section */}
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-xl font-semibold">
              {isLoggedIn ? userName : "Guest"}
            </h1>
            <h1>+91 7208640562</h1>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="mt-12">
          <ul className="space-y-6 text-lg font-semibold">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
            {!isLoggedIn ? (
              <li><Link to="/login" className="hover:text-primary">Login</Link></li>
            ) : (
              <li><button onClick={handleLogout} className="hover:text-red-500">Logout</button></li>
            )}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div>
        <p>@2025 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

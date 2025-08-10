import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu, setShowMenu, isLoggedIn, handleLogout, userName }) => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleDonateClick = () => {
    if (!isLoggedIn) {
      setLoginMessage("Please log in first to access donation options.");
      return;
    }
    setLoginMessage("");
    setDonateOpen(!donateOpen);
  };

  return (
    <>
      {/* Overlay */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Side Menu */}
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
              <h1 className="text-xl font-semibold">{isLoggedIn ? userName : 'Guest'}</h1>
              <h1>+91 7208640562</h1>
            </div>
          </div>

          {/* Profile link if logged in */}
          {isLoggedIn && (
            <div className="mt-4">
              <Link
                to="/profile"
                onClick={() => setShowMenu(false)}
                className="text-primary hover:underline text-base font-medium"
              >
                View Profile
              </Link>
            </div>
          )}

          {/* Menu Links */}
          <nav className="mt-12">
            <ul className="space-y-6 text-lg font-semibold">
              <li>
                <Link
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className="hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setShowMenu(false)}
                  className="hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setShowMenu(false)}
                  className="hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  onClick={() => setShowMenu(false)}
                  className="hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>

              {/* Donate with Submenu */}
              <li>
                <button
                  onClick={handleDonateClick}
                  className="w-full text-left hover:text-primary flex justify-between items-center"
                >
                  Donate
                  <span>{donateOpen ? '▲' : '▼'}</span>
                </button>

                {/* Login prompt if not logged in */}
                {loginMessage && !isLoggedIn && (
                  <p className="text-red-500 text-sm mt-1">{loginMessage}</p>
                )}

                {/* Submenu for logged-in users */}
                {isLoggedIn && donateOpen && (
                  <ul className="mt-2 ml-4 space-y-4 text-base font-normal">
                    <li>
                      <Link
                        to="/my-campaigns"
                        onClick={() => setShowMenu(false)}
                        className="hover:text-primary"
                      >
                        My Campaigns
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/create-donation"
                        onClick={() => setShowMenu(false)}
                        className="hover:text-primary"
                      >
                        Start a Fundraise
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-donations"
                        onClick={() => setShowMenu(false)}
                        className="hover:text-primary"
                      >
                        View My Donations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/donate"
                        onClick={() => setShowMenu(false)}
                        className="hover:text-primary"
                      >
                        Support a Cause
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {!isLoggedIn ? (
                <li>
                  <Link
                    to="/login"
                    onClick={() => setShowMenu(false)}
                    className="hover:text-primary"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setShowMenu(false);
                    }}
                    className="hover:text-red-500"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div>
          <p>@2025 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
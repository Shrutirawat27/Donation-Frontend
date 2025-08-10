import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);  
  const navigate = useNavigate();
  const element = document.documentElement;

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("userUpdated", loadUser);
    return () => {
      window.removeEventListener("userUpdated", loadUser);
    };
  }, []);

  const isLoggedIn = Boolean(user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully");
    navigate("/");
    window.dispatchEvent(new Event("userUpdated"));
  };

  const handleDonateClick = () => {
    if (!isLoggedIn) {
      alert("Please log in first to donate.");
      navigate("/login");
      return;
    }
    navigate("/donate");
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-0 left-0 w-full border-b border-primary/50 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo */}
            <div className="text-2xl md:text-3xl text-white uppercase">
              <Link to="/">Fund <span className="font-bold text-primary">Flow</span></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-5">
                <li><Link className="hover:text-primary" to="/">Home</Link></li>
                <li><Link className="hover:text-primary" to="/donation">Donation</Link></li>
                <li><Link className="hover:text-primary" to="/about">About Us</Link></li>
                <li><Link className="hover:text-primary" to="/services">Services</Link></li>
                <li><Link className="hover:text-primary" to="/privacy-policy">Privacy Policy</Link></li>

                <li>
                  <a href="tel:+917208640562" className="flex items-center gap-4 hover:text-primary">
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] bg-primary p-2 rounded-md" />
                    <div>
                      <p>Talk to us</p>
                      <p>+91 7208640562</p>
                    </div>
                  </a>
                </li>

                <li>
                  {theme === "dark" ? (
                    <BiSolidSun className="text-2xl cursor-pointer" onClick={() => setTheme("light")} />
                  ) : (
                    <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")} />
                  )}
                </li>

                {/* Profile icon */}
                <li>
                  <button
                    onClick={() => navigate('/profile')}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    title="My Profile"
                    type="button"
                  >
                    {isLoggedIn && user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="w-full h-full text-yellow-500" />
                    )}
                  </button>
                </li>

                <li>
                  {isLoggedIn ? (
                    <button className="btn-outline" onClick={handleLogout}>Logout</button>
                  ) : (
                    <Link to="/login" className="btn-primary">Login</Link>
                  )}
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-4">
              {theme === "dark" ? (
                <BiSolidSun className="text-2xl cursor-pointer" onClick={() => setTheme("light")} />
              ) : (
                <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")} />
              )}

              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <ResponsiveMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isLoggedIn={isLoggedIn}
        userName={user ? user.name : ""}
        profileImage={user?.profileImage}
        handleLogout={handleLogout}
        handleDonateClick={handleDonateClick}
      />
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      setIsLoggedIn(true);
      setUserName(parsed.name);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    alert("Logged out successfully");
    navigate("/");
    window.location.reload(); 
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
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-0 left-0 w-full border-b-[1px] border-primary/50 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo */}
            <div className="text-2xl md:text-3xl text-white uppercase">
              <Link to="/">Fund <span className="font-bold text-primary">Flow</span></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
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
                <BiSolidSun className="text-2xl" onClick={() => setTheme("light")} />
              ) : (
                <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
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
        isLoggedIn={isLoggedIn}
        userName={userName}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;

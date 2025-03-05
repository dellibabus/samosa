import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

const NavComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Melody Bites</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileNav} className="md:hidden text-2xl text-gray-900 focus:outline-none">
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition duration-300 hover:text-orange-500 ${
                    isActive ? "font-bold text-orange-500" : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/7010427770?text=Hi%20Melody%20Bites%2C%20I%20would%20like%20to%20place%20an%20order."
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMobileNav} className="absolute top-6 right-6 text-3xl text-gray-900">
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-xl font-medium transition duration-300 hover:text-orange-500 ${
                    isActive ? "font-bold text-orange-500" : "text-gray-900"
                  }`
                }
                onClick={toggleMobileNav}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/7010427770?text=Hi%20Melody%20Bites%2C%20I%20would%20like%20to%20place%20an%20order."
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileNav}
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;

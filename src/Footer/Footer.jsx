import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-6 pb-4 w-full h-auto mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">

        <div className="text-gray-800 text-2xl font-semibold cursor-pointer">
          <h1 className="hover:scale-110 transition-all duration-300">Melody Bites</h1>
        </div>


        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-7 text-gray-800 text-lg">
          <Link to="/Privacy" className="hover:underline hover:text-blue-500 transition duration-300">
            Privacy Policy
          </Link>
          <Link to="/Terms" className="hover:underline hover:text-blue-500 transition duration-300">
            Terms and Conditions
          </Link>
          <Link to="/Contact" className="hover:underline hover:text-blue-500 transition duration-300">
            Contact Us
          </Link>
        </div>


        <div className="flex justify-center gap-6 text-gray-800 text-3xl cursor-pointer">
          <MdOutlineFacebook className="hover:scale-110 hover:text-blue-500 transition-all duration-300" />
          <FaTwitter className="hover:scale-110 hover:text-blue-500 transition-all duration-300" />
          <FaInstagramSquare className="hover:scale-110 hover:text-blue-500 transition-all duration-300" />
          <FaYoutube className="hover:scale-110 hover:text-blue-500 transition-all duration-300" />
        </div>
      </div>

      <hr className="my-6 border-gray-300 opacity-50 mx-4" />


      <div className="text-center">
        <h1 className="text-gray-800 text-sm">
          © 2025 <span className="font-semibold">Melody Bites</span>. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

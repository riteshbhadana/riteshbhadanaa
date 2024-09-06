import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import logo from "../assets/riteshLogo.jpg";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <img 
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full border-4 border-white shadow-md"
          style={{ boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.5)' }} // Adjusted shadow style
        />
      </div>
      <div className="m-10 flex items-center justify-center gap-3 text-4x2">
        <FaLinkedin style={{ color: '#ffffff' }} /> {/* LinkedIn icon */}
        <FaGithub style={{ color: '#ffffff' }} /> {/* GitHub icon */}
        <FaKaggle style={{ color: '#ffffff' }} /> {/* Kaggle icon */}
      </div>
    </nav>
  );
};

export default Navbar;

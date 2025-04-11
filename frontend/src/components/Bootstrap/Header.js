import React from "react";
import img5 from '.././images/portfolio_logo.png';

const Header = () => {
  return (
    <div className="w-full z-10 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white py-4 md:py-6 flex items-center justify-between px-4 md:px-6 shadow-lg rounded-b-xl">
      <div className="flex items-center">
        <div>
          <img className="h-10 md:h-12 w-10 md:w-12 mr-6 md:mr-4 transition-transform transform hover:scale-105" src={img5} alt="logo" />
        </div>
        <div className="text-lg md:text-3xl font-semibold tracking-tight">
          Portfolio Builder
        </div>
        <div className="hidden md:block text-sm mt-1 italic">Build for Ease</div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#about" className="text-lg font-medium hover:text-yellow-300 transition duration-300">About</a>
        <a href="#contact" className="text-lg font-medium hover:text-yellow-300 transition duration-300">Contact</a>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { AiOutlineBell, AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-white fixed  shadow-md z-50 top-0 w-full">
      <div className="flex justify-between items-center rounded-full h-24 max-w-[1280px] mx-auto px-10">
        <div className="flex items-center">
          <div className="flex items-center justify-center transition-colors duration-300 shadow-md
           w-12 h-12 bg-black text-white text-center font-bold rounded-xl ;">
            JO
          </div>
          <h1 className="text-3xl font-bold text-[rgb(41,0,223)] ml-4 ">Jobber</h1>
        </div>

        <nav className="hidden md:flex space-x-8 flex-1 justify-center">
          <a href="/" className="p-4 cursor-pointer">Home</a>
          <a href="/trending" className="p-4 cursor-pointer">Trending</a>
          <a href="/about" className="p-4 cursor-pointer">About</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <AiOutlineBell size={24} aria-label="Notifications" className="cursor-pointer" />
          <AiOutlineUser size={24} aria-label="Profile" className="cursor-pointer" />
        </div>

        <div onClick={toggleNav} aria-label="Toggle Navigation" className="block md:hidden">
          {isNavOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        <div
          className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-3xl font-bold text-blue-500 m-4">Jobbers</h1>
          <nav className="uppercase p-4">
            <a href="/" className="p-4 border-b border-gray-300 cursor-pointer block">Home</a>
            <a href="/trending" className="p-4 border-b border-gray-300 cursor-pointer block">Trending</a>
            <a href="/about" className="p-4 border-b border-gray-300 cursor-pointer block">About</a>
            <div className="p-4 border-b border-gray-300 cursor-pointer block">Notifications</div>
            <div className="p-4 border-b border-gray-300 cursor-pointer block">Profile</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


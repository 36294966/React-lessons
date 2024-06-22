import React, { useState } from "react";
import { AiOutlineBell, AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white text-black fixed w-full shadow-md z-50 top-0">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-black text-white text-center font-bold">
            JO
          </div>
          <h1 className="text-3xl font-bold text-[#00df9a] ml-4">Jobbers</h1>
        </div>

        
        <ul className="hidden md:flex space-x-8 flex-1 justify-center">
          <li className="p-4 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="p-4 cursor-pointer"><Link to="/trending">Trending</Link></li>
          <li className="p-4 cursor-pointer"><Link to="/about">About</Link></li>
        </ul>

        
        <div className="hidden md:flex items-center space-x-4">
          <AiOutlineBell size={24} className="cursor-pointer" />
          <AiOutlineUser size={24} className="cursor-pointer" />
        </div>

       
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
         <h1 className="text-3xl font-bold text-blue-500 m-4">Jobbers</h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-300 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="p-4 border-b border-gray-300 cursor-pointer"><Link to="/trending">Trending</Link></li>
            <li className="p-4 border-b border-gray-300 cursor-pointer"><Link to="/about">About</Link></li>
            <li className="p-4 border-b border-gray-300 cursor-pointer">Notifications</li>
            <li className="p-4 border-b border-gray-300 cursor-pointer">Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

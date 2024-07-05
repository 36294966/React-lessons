import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-blue-950 flex-1 w-full">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto p-4">
        <div className="flex px-12 items-center">
          <img src={logo} alt="Logo" className="h-12 w-30 bg-center inline-block mr-16" />
        </div>
        <ul className="hidden md:flex p-2 flex-1 justify-end">
          <li className="p-4 cursor-pointer flex items-center">
            <Link to="/Marketplace" className="text-white">Marketplace</Link>
          </li>
          <li className="p-4 cursor-pointer flex items-center">
            <Link to="/MoreInfo" className="text-white">More Info</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={24} className="text-white" /> : <AiOutlineMenu size={24} className="text-white" />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-300 cursor-pointer">
            <Link to="/Marketplace" onClick={handleNav} className="text-blue-900">Marketplace</Link>
          </li>
          <li className="p-4 border-b border-gray-300 cursor-pointer">
            <Link to="/MoreInfo" onClick={handleNav} className="text-blue-900">More Info</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

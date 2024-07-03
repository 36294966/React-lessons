import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-blue-900 flex-1 w-full ">
      <div className="flex  items-center  max-w-[1240px] mx-auto ">
        <h1 className="text-3xl p-4 font-bold text-[#00df9a] ml-4">
          png image
        </h1>
        <ul className="hidden md:flex p-2 flex-1 justify-center">
          <li className="p-4 cursor-pointer flex flex-end">
            <Link to="/Marketplace">Marketplace</Link>
          </li>
          <li className="p-4 cursor-pointer flex flex-end">
            <Link to="/MoreInfo">More Info</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      ></div>
    </div>
  );
};

export default Navbar;

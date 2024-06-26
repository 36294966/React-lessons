import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="relative flex items-center h-12 ml-2 w-full rounded-lg bg-white-600 px-4">
      <HiSearch className="mr-4 text-gray-500" style={{height: '24px', width: '24px'}}/>
      <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none" />
      <div className="flex items-center ml-3">
        <div className="line-stroke h-4 w-px bg-gray-500 mr-4"></div>
        <IoLocationOutline className="text-blue-700 mr-2" style={{ height: '24px', width: '30px' }} />
        <input type="text" placeholder="Location" className="ml-2 bg-transparent outline-none text-gray-500" />
      </div>
      <button className=" ml-20 px-4 py-2 rounded-lg bg-blue-600 text-white">
        Find Jobs
      </button>
    </div>
  );
};

export default SearchBar;














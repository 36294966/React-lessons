
import React from 'react';
import { HiSearch } from 'react-icons/hi';


const SearchBar = () => {
  return (
    <div className="flex items-center tp-50 h-14 rounded-lg bg-primary-50 px-50">
      <HiSearch className="mr-3 text-gray-500" />
      <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none" />
    </div>
  );
};

export default SearchBar;


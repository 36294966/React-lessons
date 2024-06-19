import React from "react";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">Single Users</h2>
          <p className="text-center text-4xl font-bold">$132</p>
          <div className="text-center font-medium">
            <p className="py-2 boarder-b mx-8 mt-8"> 500 GB Storage</p>
            <p className="py-2 boarder-b mx-8"> 1 Granted User</p>
            <p className="py-2 boarder-b mx-8"> Send up to 2GB</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col bg-gray-100 p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">Double</h2>
          <p className="text-center text-4xl font-bold">$145</p>
          <div className="text-center font-medium">
            <p className="py-2 boarder-b md:my-0 mx-8 mt-8"> 500 GB Storage</p>
            <p className="py-2 boarder-b mx-8"> 1 Granted User</p>
            <p className="py-2 boarder-b mx-8"> Send up to 2GB</p>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg w-full mt-4">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-xl font-bold text-center py-8">Triple</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 boarder-b mx-8 mt-8"> 500 GB Storage</p>
            <p className="py-2 boarder-b mx-8"> 1 Granted User</p>
            <p className="py-2 boarder-b mx-8"> Send up to 2GB</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

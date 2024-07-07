import React from "react";
import logo512 from "../assets/logo512.png";

const Marketplace = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex justify-start items-start pt-12 px-4">
      <div className="bg-blue-950 rounded-lg w-full  max-w-[523px] md:w-auto md:max-w-[523px] ml-8">
        <div className="text-start px-12 text-blue-600">
          <h2 className="text-3xl font-bold mb-2">GET YOUR OG EDITION</h2>
          <h2 className="text-3xl font-bold mb-2">MYTHICAL BUDDY!</h2>
        </div>
        <div className="text-white px-12 mt-8">
          <p>
            To celebrate our major product launch this year, we are offering a
            FREE mint of 1988 OG Edition Mythical Buddy NFTs
          </p>
        </div>
        <div className="w-full md:w-[500px] md:flex md:flex-col max-w-md mx-auto md:absolute md:right-0 md:m-2 md:top-32 md:flex-end h-[550px] mb-0">
          <img src={logo512} alt="logo512" className="mx-auto md:mx-0" />
          <div className="bg--950 justify-items-center m-2 mt-[-98px] w-[430px] h-[52px]">
            <span className="text-white justify-center text-lg text-bold my-12 px-20">
              Round1Quota
              <button className="bg-blue-800 my-4 mx-6 w-24 h-7">
                <span className="text-white text-xl text-bold">1588</span>
              </button>
            </span>
          </div>
        </div>
        <div className="text-white md:flex  md:flex-col max-w-md  md:grid-cols-2  mb-6 md-mb-2 py-1 px-12 md:my-120 mt-2">
          <button className="w-full md:h-full display: inline-block md:w-[600px] h-[88px]  p-4  items-center bg-gradient-to-r from-[#59256D] to-[#716896] rounded-tl-lg opacity-100">
            <span className="ml-5 gap-2 text-2xl font-bold">COMING SOON</span>
          </button>
        </div>
        <div className="text-white px-12 mt-2">
          <div className="flex justify-start flex-row">
            <h3 className="text-xl w-[233px] h-[36px] whitespace-nowrap py-1 mr-8 font-bold">
              Round 1 starts in:
            </h3>
            <div className="flex text-white text-xl space-x-4  ">
              <button className="w-[64px]  h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
                <span>01</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[64px]  h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
                <span>21</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[64px] h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
                <span>15</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[64px] h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
                <span>45</span>
              </button>
            </div>
          </div>
          <div className="mt-8 flex-1 px-12 py-4 w-[265px] hover:bg-sky-700 h-[70px] rounded-full bg-blue-400">
            <div className="flex justify-center">
              <button className="mt-2">
                <span>Sign in to mint</span>
              </button>
            </div>
          </div>
          <div className="text-white mt-2 px-4">
            <p className="underline">check your mint allocation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

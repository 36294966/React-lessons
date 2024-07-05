import React from "react";
import logo512 from "../assets/logo512.png";

const Marketplace = () => {
  return (
    <div className="bg-blue-950 min-h-screen flex justify-start items-start pt-12 px-4">
      <div className="bg-blue-950 rounded-lg w-full max-w-[523px] ml-8">
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

        <div className="w-[500px] md:shrink-0  absolute right-0 m-8 top-16 flex-end h-[550px]">
          <img src={logo512} alt="logo512" class="md:center " />
          <button className="bg-blue-950 absolute m-2 px-2 top-96 mt-20 w-[480px] h-[52px]">
            <span className="text-white text-xl gap-60 text-bold flex-1 px-24 ">
              Round1Quota
              <button className="bg-blue-800 justify-self-end mx-4 gap-x-10 w-24 h-7">
                <span className="text-white text-xl text-bold  justify-items-center ">
                  1588
                </span>
              </button>
            </span>
          </button>
        </div>
        <div className="text-white py-10 px-12 mt-2">
          <button className="w-[635px] h-[70px] p-4 flex items-center bg-gradient-to-r from-[#59256D] to-[#716896] rounded-tl-lg opacity-100">
            <span className="ml-5 gap-2   text-2xl text-bold">COMING SOON</span>
          </button>
        </div>
        <div className="text-white px-12 mt-2">
          <div className=" justify-content justify-start flex flex-row">
            <h3 className="text-sm whitespace-nowrap py-1 mr-6 font-bold ">
              Round 1 starts in:
            </h3>
            <div className="flex text-white text-xl space-x-4 self-auto">
              <button className="w-[97px] h-[36px]   flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg opacity-100">
                <span>01</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[97px] h-[36px]  flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg opacity-100">
                <span>21</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[97px] h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg opacity-100">
                <span>15</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[97px] h-[36px]  flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg opacity-100">
                <span>45</span>
              </button>
            </div>
          </div>
          <div className=" mt-8 flex-1 px-12 w-96 hover:bg-sky-700 h-12 rounded-full bg-blue-400">
            <div className=" flex ">
              <button className=" justify-items-center flex-1 mt-2 ">
                <span>Sign in to mint</span>
              </button>
            </div>
          </div>
          <div className="text-white mt-2 px-4">
            <p class="underline">check your mint allocation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

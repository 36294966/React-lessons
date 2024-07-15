import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineWarningAmber } from "react-icons/md";
import logo512 from "../../assets/logo512.png";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast(
    <div className="toast-notification">
      <div className="bg-red-600 flex items-center justify-end fixed top-6 right-6 md:right-16 md:w-[396px] w-[100%] h-[74px] rounded-lg shadow-lg">
        <div className="text-white flex items-center">
          <MdOutlineWarningAmber className="mr-24" />
          <p className=" justify-center items-center px-2">Max 1 NFT per wallet</p>
          <IoCloseSharp
            className="cursor-pointer ml-4"
            onClick={() => toast.dismiss()}
          />
        </div>
      </div>
    </div>,
    {
      duration: 8000, 
    }
  );
};

const MarketplaceMinted = () => {
  const handleToastClick = () => {
    notify();
  };

  return (
    <div className="bg-blue-950 h-full md:justify-items-center pt-12 px-4">
      <div className="bg-blue-950 rounded-lg w-full md:w-auto md:max-w-[523px] ml-8">
        <div className="text-start text-blue-600">
          <h2 className="text-3xl font-bold mb-2 hidden md:block">
            GET YOUR OG EDITION
          </h2>
          <h2 className="text-3xl font-bold mb-2 hidden md:block">MYTHICAL BUDDY!</h2>
        </div>
        <div className="text-white flex-wrap-nowrap mt-8">
          <p className="hidden md:block">
            To celebrate our major product launch this year, we are offering a
            FREE mint of 1988 OG Edition Mythical Buddy NFTs
          </p>
        </div>
        <div className="w-full md:w-[500px] md:flex md:flex-col max-w-md mx-auto md:absolute md:right-24 md:m-2 md:top-32 h-[550px] mb-0">
          <img src={logo512} alt="logo512" className="flex flex-nowrap mx-auto md:mx-0" />
          <div className="flex-grow md:flex-grow-0">
            <div className="bg-red-600 flex items-center justify-end fixed top-6 right-6 md:right-16 md:w-[396px] w-[100%] h-[74px] rounded-lg shadow-lg">
              <button className="text-white m-4 text-center">
                <MdOutlineWarningAmber className="md:mr-0 mr-2 justify-start" />
                <IoCloseSharp className="ml-80 -mt-4" />
                <p className="-mt-4 px-8">
                  Max 1 NFT per wallet
                  <br />
                </p>
              </button>
            </div>
          </div>
          <div className="bg-blue-950 flex-wrap items-center justify-center mt-[-98px] w-[100%] md:w-[430px] h-[52px]">
            <span className="text-white justify-center text-lg font-bold px-20">
              Round1Quota
              <button className="bg-blue-800 my-4 mx-6 w-24 h-7 md:inline-block">
                <span className="text-white text-xl font-bold">1588</span>
              </button>
            </span>
          </div>
        </div>
        <div className="text-white mb-6 mt-12">
          <button className="w-[627px] sm:w-[100%] h-[88px] bg-gradient-to-r from-[#59256D] to-[#716896] rounded-tl-lg opacity-100">
            <span className="text-white flex flex-start text-2xl font-bold">Round1-Guaranteed mint</span>
          </button>
        </div>
        <div className="text-white mt-2">
          <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center">
            <h3 className="text-xl w-full md:w-auto h-[36px] p-4 text-center md:text-start whitespace-nowrap py-1 font-bold">Round 1 starts in:</h3>
            <div className="flex text-white text-xl mt-2 md:mt-0 space-x-4 justify-center md:justify-start">
              <button className="w-[64px] h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
                <span>01</span>
              </button>
              <span className="text-gray-600 font-bold">:</span>
              <button className="w-[64px] h-[36px] flex items-center justify-center bg-gradient-to-r from-[#4E37B3] to-[#59256D] rounded-lg">
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

          <div className="flex flex-col-reverse lg:flex-col max-w-full items-center">
            <div className="mt-8 flex-1 px-12 py-4 w-[265px] h-[70px] rounded-full bg-gray-700">
              <div className="flex justify-center">
                <button className="mt-2">
                  <span>MINTED</span>
                </button>
              </div>
            </div>
            <div className="mt-2 text-white cursor-pointer md:w-order-first">
              <p className="underline mt-8" onClick={handleToastClick}>
                check your mint allocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <MarketplaceMinted />
      <Toaster position="top-right" />
    </>
  );
}

export default App;



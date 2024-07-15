import React, { useState } from "react";
import logo512 from "../../assets/logo512.png";
import Modal from "../../Components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const MarketplaceCongratulation = () => {
    return (
      <div className="bg-blue-950 max-w- md:justify-items-center flex items-start pt-12 px-4">
        <div className="bg-blue-950 rounded-lg w-full max-w-[523px] md:w-auto md:max-w-[523px] ml-8">
          <div className="text-start text-blue-600">
            <h2 className="text-3xl font-bold mb-2">GET YOUR OG EDITION</h2>
            <h2 className="text-3xl font-bold mb-2">MYTHICAL BUDDY!</h2>
          </div>
          <div className="text-white mt-8">
            <p>
              To celebrate our major product launch this year, we are offering a
              FREE mint of 1988 OG Edition Mythical Buddy NFTs
            </p>
          </div>
          <div className="w-full md:w-[500px] md:flex md:flex-col max-w-md mx-auto md:absolute md:right-0 md:m-2 md:top-32 md:flex-end h-[550px] mb-0">
            <img
              src={logo512}
              alt="logo512"
              className="flex flex-nowrap mx-auto md:mx-0"
            />
            <div className="bg-blue-950 flex-nowrap items-center justify-center mt-[-98px] w-[430px] h-[52px]">
              <span className="text-white justify-center text-lg font-bold my-12 px-16">
                Round1Quota
                <button className="bg-blue-800 my-4 mx-6 w-24 h-7 md:inline-block">
                  <span className="text-white text-xl font-bold">1588</span>
                </button>
              </span>
            </div>
          </div>
          {/* <div className="flex-nowrap-wrap">
            <div
              className="bg-black md:w-[680px] order-first md:order-last w-max-auto md:h-[480px] md:flex md:flex-col rounded-xl border border-blue-500 md:absolute md:-mt-40 md:ml-48 z-30"
            >
              <div className="flex items-end justify-end mt-2 mr-2">
                <RxCross1 className="text-white text-2xl relative " />
              </div>
              <div className="text-white flex items-center justify-center ">
                <img
                  src="congrats.png"
                  alt="congrats.png"
                  className="rounded-full -mt-12"
                />
              </div>
              <div className="text-center mt-20">
                <h3 className="text-white text-2xl text-center">
                  Congratulations!
                </h3>
                <div className="text-white text-xl p-6">
                  <p>
                    You've successfully minted the Egg. Check
                    <br />
                    Marketplace inventory to see the egg
                  </p>
                  <div className="text-red-600 p-8">
                    <p>
                      Do not forget to do KYC within 30 days
                      <br />
                      otherwise your account will be suspended
                      <br />
                      <span className="underline">find out more</span>
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-400 rounded-full mt-12 w-[265px] h-[70px]">
                        <button className="text-white mt-4">
                          <p>check Inventory</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="text-white md:flex-grow mb-6 mt-12">
            <button className="sm:w-[627px] w-full h-[88px] bg-gradient-to-r from-[#59256D] to-[#716896] rounded-tl-lg opacity-100">
              <span className="text-2xl p-8 flex flex-start font-bold">
                Round1-Guaranteed mint
              </span>
            </button>
          </div>
          <div className="text-white mt-2 ">
            <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center">
              <h3 className="text-xl w-full md:w-auto h-[36px] p-4 text-center md:text-start whitespace-nowrap py-1 font-bold">
                Round 1 starts in:
              </h3>
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
            <div className="flex flex-col-reverse lg:flex-col max-w-full md:items-start items-center">
              <div className="mt-8 flex-1 px-12 py-4 w-[265px] h-[70px] rounded-full md:bg-gray-500 bg-blue-600">
                <div className="flex justify-center">
                  <button onClick={() => setShowModal(true)} className="mt-2">
                    <span className="hidden md:inline">MINTED</span>
                    <span className="md:hidden">Sign in to Mint</span>
                  </button>
                  {showModal && <Modal onClose={() => setShowModal(false)} />}
                </div>
              </div>
              <div className="text-white cursor-pointer md:w-order-first">
                <p className="underline mt-8 cursor-pointer">check your mint allocation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <MarketplaceCongratulation />;
}

export default App;


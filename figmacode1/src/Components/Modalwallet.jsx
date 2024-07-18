import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import wallet from "../assets/wallet.png";

function Modal({ onClose }) {
  const [isConnected, setIsConnected] = useState(false);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleContinue = () => {
    setIsConnected(true);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="inset-0 bg-black whitespace-nowrap min-h-screen absolute bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
    >
      <div className="relative bg-black w-full max-w-4xl md:h-[500px] h-[600px] border-2 border-white rounded-xl px-12 py-10 flex flex-col gap-5 items-center mx-72">
        <div
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X size={28} className="text-white" />
        </div>

        <h1 className="text-3xl font-extrabold h-full underline decoration-red-600 text-white">
          Bind Wallet
        </h1>
        <div className="text-white">
          <p className="-mt-40 md:-ml-48 ml-0">
            Bind your wallet and get full access to your account
          </p>
        </div>
        <form>
          <div className="-mt-32 whitespace-nowrap">
            <button
              type="button"
              className={`mt-4 flex whitespace-nowrap items-center text-xl justify-center rounded-lg ${
                isConnected
                  ? "bg-pink-500 border-pink-500"
                  : "border-2 border-pink-950"
              } md:w-[550px] w-[400px] h-[100px] text-white`}
            >
              <div className="w-[60px] h-[60px]">
                <img src={wallet} alt="Wallet" />
              </div>
              <span className="p-8">
                {isConnected ? "0xF1E*****5796F" : "Connect Metamask Wallet"}
              </span>
            </button>
          </div>
        </form>

        <form>
          <button
            type="button"
            onClick={handleContinue}
            className={`mt-12 flex items-center justify-center rounded-full ${
              isConnected ? "bg-blue-500" : "bg-gray-400"
            } w-[265px] h-[70px] text-white`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

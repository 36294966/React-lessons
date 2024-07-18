import { X } from "lucide-react"; // Assuming you have an Eye icon for password visibility
import React, { useRef } from "react";

function Modal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
    >
      <div className="relative bg-black w-[1500px] h-[500px] border-2 border-white rounded-xl px-12 py-10 flex flex-col gap-5 items-center mx-72">
        <div
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <X size={28} className="text-white" />
        </div>

        <h1 className="text-3xl font-extrabold h-full underline decoration-red-600 text-white">
          Bind Wallet
        </h1>
        <div className="text-white ">
          <p className="-mt-40 -ml-32 justify-start items-start">
            Bind you wallet and get full access of you account
          </p>
        </div>
        <form>
          <div className=" -mt-32 -ml-40">
            <button className="mt-4 flex items-center text-xl justify-center  rounded-lg border-2 border-orange-500  w-[300px] h-[80px] text-white">
              Connect Metamask wallet
            </button>
          </div>
        </form>

        <form>
          <button className="mt-12 flex items-center justify-center rounded-full bg-gray-400 w-[265px] h-[70px] text-white">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

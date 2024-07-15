import { X } from "lucide-react";
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
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
    >
      <div className="relative bg-black rounded-xl px-12 py-10 flex flex-col gap-5 items-center mx-72">
        <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
          <X size={28} className="text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-white">Congratulations!</h1>
        <p className="text-3xl font-bold text-center text-white">
          You've successfully minted the Egg. Check
          <br />
          your Market Inventory to see the egg.
        </p>
        <p className="text-xl max-w-md text-center text-red-800">
          Do not forget to do the KYC within 30 days, otherwise your account
          will be suspended.
        </p>
        <p className="text-red-800 text-xl underline cursor-pointer">Find out more</p>
        <form>
          <button className="mt-4 flex items-center justify-center rounded-full bg-blue-700 w-[265px] h-[70px] text-white">
            Check Inventory
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

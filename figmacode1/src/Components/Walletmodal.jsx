import { X, TriangleAlert } from "lucide-react";
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
      className="fixed inset-0 bg-red-500 bg-opacity-30 flex justify-end items-end z-50"
    >
      <div className="relative bg-red-400 rounded-xl px-12 py-10 flex flex-col gap-5 items-center">
        <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
          <X size={28} className="text-white" />
        </div>
        <div className="text-white">
          <TriangleAlert size={30} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">Max 1 NFT Per Wallet</h1>
      </div>
    </div>
  );
}

export default Modal;

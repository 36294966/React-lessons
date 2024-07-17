import { X } from "lucide-react";
import React, { useRef } from "react";

function Modalverifyopt({ onClose }) {
  const ModalverifyoptRef = useRef();

  const closeModalverifyopt = (e) => {
    if (ModalverifyoptRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={ModalverifyoptRef}
      onClick={closeModalverifyopt}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm mx-0-sm flex justify-center items-center z-50"
    >
      <div className="relative bg-black rounded-xl px-12 py-10 flex flex-col gap-5 items-center mx-72">
        <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
          <X size={28} className="text-white" />
        </div>
        <h1 className="text-3xl  font-extrabold underline decoration-red-600 text-white">Verify OTP</h1>
        <p className="text-xl font-bold text-center mt-10 text-white">
          An email OTP verification  have been sent to you registered email
        </p>
        <div className=" mt-10 align-items-start  flex-nowrap font-bold text-xl text-gray-500">
  <div class="space-x-2">
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
    <input type="text" class="w-16 h-16 bg-white border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
</div>
<div className="whitespace-nowrap">
        <p className="text-white whitespace-nowrap text-lg flex-white-space my-8  cursor-pointer">Resend OTP in 60 seconds</p>
        <form>
          <button className="mt-10 flex items-center justify-center rounded-full bg-gray-700 w-[265px] h-[70px] text-white">
            CONTINUE
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Modalverifyopt;





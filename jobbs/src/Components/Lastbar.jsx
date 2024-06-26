import React from "react";
import { FaBookmark, FaDollarSign, FaHeart } from "react-icons/fa6";
import { MdOutlinePersonPin, MdWork } from "react-icons/md";
import { TbArrowBigRightLine } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import Jackson from "../assests/Jackson.png";

const Lastbar = () => {
  return (
    <div className="absolute right-10 top-96 w-[420px] bg-[#F5F7FB] rounded-lg shadow-lg mt-0 p-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] rounded-lg  bg-green-700 mr-4 flex items-center justify-center">
            <img
              src={Jackson}
              alt="Profile"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-blue-500">
              Sr. Front End Engineer
            </span>
            <span className="text-sm text-gray-500">RikRok</span>
            <span className="text-sm text-gray-500">
              Los Angeles, CA (Remote)
            </span>
          </div>
        </div>
        <FaBookmark className="text-green-500" />
      </div>
      <div className="w-full mb-4">
        <span className="text-sm text-gray-500 block">
          Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc
          magna ultrices a lobortis. Quis turpis tristique in purus mauris id
          suscipit integer nunc. Sed eg...
        </span>
      </div>
      <div className="bg-gray-200 p-4 rounded w-full mt-4 mb-4">
        <div className="flex items-center mb-2">
          <FaDollarSign className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-700">
            Annual Salary $110k/year - $190k/year (check job description)
          </span>
        </div>
        <div className="flex items-center mb-2">
          <MdWork className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-700">
            Job Type: Full Time Position
          </span>
        </div>
        <div className="flex items-center mb-2">
          <TiHome className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-700">Office/Remote</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <button className="w-[178px] h-[50px] bg-blue-500 text-white font-bold rounded-[17px] flex items-center justify-center">
          APPLY NOW
          <TbArrowBigRightLine className="ml-2" />
        </button>
        <div className="w-[52px] h-[50px] bg-red-800 rounded-[12px] flex items-center justify-center">
          <FaHeart className="text-white" />
        </div>
        <div className="bg-black p-2 rounded flex items-center">
          <MdOutlinePersonPin className="text-white mr-2" />
          <div className="flex flex-col">
            <span className="text-sm text-white">9145871092</span>
            <span className="text-sm text-white">Applicants</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-700 font-poppins">
          Posuere aliquam purus pellentesque maecenas et tempus volutpat. Et
          egestas libero sit amet. Lacus convallis eu metus lectus in viverra.
          At augue erat vulputate nisl adipiscing mattis eget sem enim. Mattis
          cursus tristique ullamcorper donec odio massa luctus mauris. Semper
          velit nunc tellus in pretium rutrum. Rhoncus tortor et vel sit
          malesuada.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Our Team</h2>
        <p className="text-sm text-gray-700 mt-2 font-poppins">
          Posuere aliquam purus pellentesque maecenas et tempus volutpat. Et
          egestas libero sit amet. Lacus convallis eu metus lectus in viverra.
          At augue erat vulputate nisl adipiscing mattis eget sem enim. Mattis
          cursus tristique ullamcorper donec odio massa luctus mauris. Semper
          velit nunc tellus in pretium rutrum. Rhoncus tortor et vel sit
          malesuada.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Requirements</h2>
        <p className="text-sm text-gray-700 mt-2 font-poppins">
          5000 years of experience in React. Ut tortor fames pretium posuere
          pellentesque q consectetur vitae. Porttitor semper at non non id
          fringilla ac ac habitant. Et enim.Orci porta est odio enim lacus.
          Imperdiet sed risus cras sed potenti augue. Placerat.
        </p>
      </div>
    </div>
  );
};

export default Lastbar;

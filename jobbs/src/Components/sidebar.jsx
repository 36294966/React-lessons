import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

function valuetext(value) {
  return `$${value}k`;
}

const SideBar = () => {
  const [location, setLocation] = useState("eg New York");
  const [isEditing, setIsEditing] = useState(false);
  const [jobTypes, setJobTypes] = useState({
    fullTime: false,
    contract: false,
    partTime: false,
  });
  const [specialties, setSpecialties] = useState({
    frontEndDev: false,
    backendDev: false,
    uiUx: false,
    design: false,
    devOps: false,
  });
  const [availability, setAvailability] = useState({
    onsite: false,
    remote: false,
    twinRoom: false,
  });
  const [value, setValue] = useState([10, 500]);

  const toggleCheckbox = (type, section) => {
    if (section === "specialties") {
      setSpecialties((prev) => ({ ...prev, [type]: !prev[type] }));
    } else if (section === "availability") {
      setAvailability((prev) => ({ ...prev, [type]: !prev[type] }));
    } else {
      setJobTypes((prev) => ({ ...prev, [type]: !prev[type] }));
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="w-[420px] h-[720px] bg-gray-300 border border-gray-200 
    rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-y-auto"
    >
      <div className="p-4 w-full h-[100px] rounded-t-lg bg-gray-700 text-white">
        <div className="flex items-center justify-between px-4 h-full">
          <span className="font-medium">Filter</span>
          <button className="font-medium">Clear All</button>
          <MdOutlineClear />
        </div>
      </div>
      <div className="w-full flex flex-col px-4 py-6">
        <p className="text-xs font-bold text-gray-900 font-poppins">Location</p>
        <div className="flex items-center space-x-2 mt-2">
          <FaLocationDot className="text-blue-800" />
          {isEditing ? (
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onBlur={() => setIsEditing(false)}
              className="bg-gray-200 px-4 py-1 rounded text-sm text-gray-900 flex-grow hover:bg-gray-300 focus:outline-none"
              autoFocus
            />
          ) : (
            <div
              className="bg-gray-200 px-4 py-1 rounded text-sm text-gray-900 flex-grow hover:bg-gray-300 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              {location}
            </div>
          )}
        </div>
        <p className="text-xs font-bold text-gray-900 font-poppins mt-4">
          Job Type
        </p>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              jobTypes.fullTime ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("fullTime", "jobTypes")}
          >
            {jobTypes.fullTime && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Full Time</span>
          <span className="text-sm text-gray-900">22</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              jobTypes.contract ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("contract", "jobTypes")}
          >
            {jobTypes.contract && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Contract</span>
          <span className="text-sm text-gray-900">142</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              jobTypes.partTime ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("partTime", "jobTypes")}
          >
            {jobTypes.partTime && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Part Time</span>
          <span className="text-sm text-gray-900">31</span>
        </div>

        <p className="text-xs font-bold text-gray-900 font-poppins mt-4">
          Annual Salary Range
        </p>
        <Box sx={{ width: "100%", mt: 2 }}>
          <div className="flex justify-between text-xs text-gray-900 mb-1">
            <span>$10k</span>
            <span>$500k</span>
          </div>
          <Slider
            getAriaLabel={() => "Salary range"}
            value={value}
            min={10}
            max={500}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
              ".MuiSlider-thumb": {
                color: "blue",
              },
              ".MuiSlider-track": {
                color: "blue",
              },
              ".MuiSlider-rail": {
                color: "#ccc",
              },
            }}
          />
        </Box>

        <p className="text-xs tp-2 mb-4 font-bold text-gray-900 font-poppins mt-4">
          Specialties
        </p>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              specialties.frontEndDev ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("frontEndDev", "specialties")}
          >
            {specialties.frontEndDev && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Front End Dev</span>
          <span className="text-sm text-gray-900">42</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              specialties.backendDev ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("backendDev", "specialties")}
          >
            {specialties.backendDev && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Backend Dev</span>
          <span className="text-sm text-gray-900">122</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              specialties.uiUx ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("uiUx", "specialties")}
          >
            {specialties.uiUx && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">UI/UX</span>
          <span className="text-sm text-gray-900">103</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              specialties.design ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("design", "specialties")}
          >
            {specialties.design && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Design</span>
          <span className="text-sm text-gray-900">152</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              specialties.devOps ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("devOps", "specialties")}
          >
            {specialties.devOps && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">DevOps</span>
          <span className="text-sm text-gray-900">122</span>
        </div>

        <a href="#" className="text-sm text-blue-600 hover:underline mt-4">
          See More
        </a>

        <p className="text-xs font-bold mb-2 text-gray-900 font-poppins mt-4">
          Availability
        </p>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              availability.onsite ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("onsite", "availability")}
          >
            {availability.onsite && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Onsite</span>
          <span className="text-sm text-gray-900">252</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              availability.remote ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("remote", "availability")}
          >
            {availability.remote && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Remote</span>
          <span className="text-sm text-gray-900">15</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`w-5 h-5 flex items-center justify-center rounded ${
              availability.twinRoom ? "bg-red-500" : "bg-gray-200"
            }`}
            onClick={() => toggleCheckbox("twinRoom", "availability")}
          >
            {availability.twinRoom && <IoCheckbox className="text-white" />}
          </button>
          <span className="text-sm text-gray-900">Twin Room</span>
          <span className="text-sm text-gray-900">111</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

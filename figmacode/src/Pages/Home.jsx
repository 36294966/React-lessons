import React, { useState } from "react";
import careerImage from "../assessts/career.png"; 
import JobCard from '../Components/JobCard';
import JobDetailsCard from '../Components/JobDetailsCard';

const jobs = [
  {
    logo: "https://via.placeholder.com/150",
    title: "Sr. Front End Engineer",
    company: "RikRok",
    location: "Los Angeles, CA",
    type: "Remote",
    salary: "$110K/yr - $190K/yr",
    jobType: "Full-Time",
    description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc.",
    postedTime: "2 hrs ago"
  },
  {
    logo: "https://via.placeholder.com/150",
    title: "Sr. Front End Engineer",
    company: "RikRok",
    location: "Los Angeles, CA",
    type: "Remote",
    salary: "$110K/yr - $190K/yr",
    jobType: "Full-Time",
    description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc.",
    postedTime: "2 hrs ago"
  },
  {
    logo: "https://via.placeholder.com/150",
    title: "Sr. Front End Engineer",
    company: "RikRok",
    location: "Los Angeles, CA",
    type: "Remote",
    salary: "$110K/yr - $190K/yr",
    jobType: "Full-Time",
    description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc.",
    postedTime: "2 hrs ago"
  }
];

const Home = () => {
  const [filters, setFilters] = useState({
    fullTime: true,
    contract: true,
    partTime: true,
    frontEnd: true,
    backEnd: true,
    uiux: true,
    design: true,
    devOps: true,
    onSite: true,
    remote: true,
    twinRoom: false
  });

  const handleCheckboxChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-12">
      <div className="relative mt-24 p-4 w-full max-w-7xl">
        <img
          src={careerImage}
          alt="Find your dream career"
          className="w-full h-auto mb-4"
        />
        <div className="flex space-x-6">
          {/* Filter column */}
          <div
            className="bg-white shadow-lg overflow-y-auto transform transition-all duration-300 hover:scale-105 p-2 md:p-3 lg:p-4"
            style={{
              width: "300px",
              height: "calc(100vh - 237px)", 
              top: "247px", 
              left: "38px",
              padding: "2px"
            }}
          >
            <div className="flex flex-col h-full p-1">
              <div className="bg-black text-white flex justify-between items-center p-2 mb-4">
                <span className="font-bold">Filters</span>
                <button className="bg-transparent text-white">
                  clear all <span className="ml-2">×</span>
                </button>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Job Type</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.fullTime}
                      onChange={() => handleCheckboxChange("fullTime")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Full Time</span>
                  </div>
                  <span>22</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.contract}
                      onChange={() => handleCheckboxChange("contract")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Contract</span>
                  </div>
                  <span>142</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.partTime}
                      onChange={() => handleCheckboxChange("partTime")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Part Time</span>
                  </div>
                  <span>31</span>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Annual Salary Range</h2>
                <div className="mt-2">
                  <span>$10K</span>
                  <span className="float-right">$500K</span>
                  <div className="relative mt-2">
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Specialties</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.frontEnd}
                      onChange={() => handleCheckboxChange("frontEnd")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Front End Dev</span>
                  </div>
                  <span>42</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.backEnd}
                      onChange={() => handleCheckboxChange("backEnd")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Back End Dev</span>
                  </div>
                  <span>112</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.uiux}
                      onChange={() => handleCheckboxChange("uiux")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>UI/UX</span>
                  </div>
                  <span>103</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.design}
                      onChange={() => handleCheckboxChange("design")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Design</span>
                  </div>
                  <span>152</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.devOps}
                      onChange={() => handleCheckboxChange("devOps")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>DevOps</span>
                  </div>
                  <span>122</span>
                </div>
                <a href="#" className="text-blue-500 mt-2">
                  See More
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Availability</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.onSite}
                      onChange={() => handleCheckboxChange("onSite")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>On Site</span>
                  </div>
                  <span>252</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.remote}
                      onChange={() => handleCheckboxChange("remote")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Remote</span>
                  </div>
                  <span>15</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.twinRoom}
                      onChange={() => handleCheckboxChange("twinRoom")}
                      className="mr-2 custom-checkbox"
                    />
                    <span>Twin Room</span>
                  </div>
                  <span>111</span>
                </div>
              </div>
            </div>
          </div>
          {/* Job cards section */}
          <div className="flex flex-wrap w-[35%] space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-black text-white p-4 rounded-lg w-full flex justify-between items-center">
              <div className="text-xl font-bold">Search Result</div>
              <div>121 Jobs Found</div>
            </div>
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} className="lg:w-[]" />
            ))}
            <JobDetailsCard className="lg:w-3/5 padding-bottom: 40%"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

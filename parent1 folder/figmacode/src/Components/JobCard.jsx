import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className=" bg-white rounded-xl shadow-md w-full py-4  px-4 overflow-hidden p-y-3 mb-6 transform transition-all duration-300 hover:scale-105">
      <div className="p-2 flex items-start">
        <img
          className="h-12 w-10 object-cover rounded-full"
          src={job.logo}
          alt="Job Logo"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-blue-500">{job.title}</h3>
          <p className="text-gray-black-bold">{job.company}</p>
          <p className="text-gray-black-bold">
            {job.location} ({job.type})
          </p>
          <div className="flex items-center mt-2 space-x-4">
            <span className="text-gray-500 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
              {job.salary}
            </span>
            <span className="text-gray-500 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
              {job.jobType}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-black-bold">{job.description}</p>
      </div>
      <div className="px-4 py-2 text-black-bold">
        <span>Posted {job.postedTime}</span>
      </div>
    </div>
  );
};

export default JobCard;

import React, { useState } from 'react';

const JobPosting = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCardPosition = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="absolute right-0 py-2 px-4 flex-1 p-4 mx-auto bg-white shadow-md hover:shadow-lg transition-shadow duration-300 sm:w-3/5 md:w-1/3"
         onClick={toggleCardPosition} // Add click handler here to toggle the position
         style={{ marginTop: isActive ? '33.333%' : '0' }}> {/* Dynamically change the margin-top */}
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg mb-4 sm:mb-0 hover:shadow-lg transition-shadow duration-300 overflow-y-auto">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center mb-4">
            <img
              src="images.jfif"
              alt="Logo"
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">Job Title</h2>
              <p className="text-gray-600">
                Short description of the job goes here...
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="flex items-center">
                <span className="material-icons">attach_money</span>
                <span className="ml-2 font-bold">
                  Annual Salary $110K/year - $190K/year (check job description)
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-icons">work</span>
                <span className="ml-2 font-bold">
                  Job Type: Full Time Position
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-icons">home</span>
                <span className="ml-2 font-bold">Office: Remote</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2">
              Apply Now
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mb-2">
              Save
            </button>
            <button className="bg-gray-200 text-black font-bold py-2 px-4 rounded mb-2">
              9145871092 Applicants
            </button>
          </div>
          <div className="mt-8 flex-grow flex flex-col justify-end">
            <section className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">Our Team</h3>
              <p className="text-gray-700">
              Develop innovative software solutions using programming 
              languages such as JavaScript and Python, focusing on functionality and user experience..
              </p>
            </section>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Requirements</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>5000 years of experience in React.</li>
              <li>
                Ut tortor fames pretium posuere pellentesque q consectetuer
                vitae.
              </li>
              <li>
                Porttitor semper et non non id fringilla ac ac habitant. Et
                enim.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;

import React from "react";
import careerImage from "../assests/career.png";

const Dream = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="relative p-20 w-full max-w-5xl">
        <img
          src={careerImage}
          alt="Find your dream career"
          className="mb-2  right-2 z-8 fixed flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default Dream;

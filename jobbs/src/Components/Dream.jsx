import React from "react";
import careerImage from "../assests/career.png";

const Dream = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <img
        src={careerImage}
        alt="Find your dream career"
        className="mb-[29px] right-2 z-8"
      />
    </div>
  );
};

export default Dream;

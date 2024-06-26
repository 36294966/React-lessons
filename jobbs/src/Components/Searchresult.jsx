import React from "react";
import Jackson from "../assests/Jackson.png"; 
import { FaDollarSign } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import free from "../assests/free.png";
import sun from "../assests/sun.png";

const SearchResult = ({ image, title, name, location, salary, jobType, description, postedTime, imgStyle }) => {
  return (
    <div className="w-[328px] h-[319px] flex-shrink-0 bg-gray-300 rounded-lg p-2 mb-4">
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center mb-2">
          <div className="w-[30px] h-[30px] mr-4 rounded-lg" style={imgStyle}>
            <img src={image} alt="Profile" className="w-full h-full rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-blue-500 font-poppins">{title}</span>
            <span className="text-base text-gray-500 font-poppins">{name}</span>
          </div>
        </div>
        <span className="text-base text-gray-500 font-poppins">{location}</span>
        <div className="flex items-center mt-2">
          <FaDollarSign className="text-gray-500 mr-1" />
          <div className="w-[130px] h-[20px] bg-gray-200 rounded flex items-center justify-center mr-2">
            <span className="text-xs text-gray-700 font-poppins">{salary}</span>
          </div>
          <MdWork className="text-gray-500 mr-1" />
          <div className="w-[75px] h-[13px] bg-gray-200 rounded flex items-center justify-center">
            <span className="text-xs text-gray-700 font-poppins">{jobType}</span>
          </div>
        </div>
      </div>
      <div className="w-[291px] h-[100px] bg-gray-300 rounded p-2 mt-2">
        <span className="text-xs text-gray-700 font-poppins">{description}</span>
      </div>
      <div className="w-[93px] h-[11px] mt-4">
        <span className="text-xs text-gray-700 font-bold font-poppins">{postedTime}</span>
      </div>
    </div>
  );
};

const SearchResultsList = () => {
  const cardsData = [
    {
      image: Jackson,
      title: "Sr. Front End Engineer",
      name: "RikRok",
      location: "Los Angeles, CA (Remote)",
      salary: "$110k/yr - $190k/yr",
      jobType: "Full-time job",
      description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc. Sed eg.",
      postedTime: "Posted 2hr ago",
      imgStyle: { backgroundColor: 'green', borderRadius: '0.5rem' } 
    },
    {
      image: free,
      title: "Sr. Front End Engineer",
      name: "RikRok",
      location: "Los Angeles, CA (Remote)",
      salary: "$110k/yr - $190k/yr",
      jobType: "Full-time job",
      description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc. Sed eg.",
      postedTime: "Posted 2hr ago",
      imgStyle: { backgroundColor: '#B4554D', borderRadius: '0.5rem' }
    },
    {
      image: sun,
      title: "Sr. Front End Engineer",
      name: "RikRok",
      location: "Los Angeles, CA (Remote)",
      salary: "$110k/yr - $190k/yr",
      jobType: "Full-time job",
      description: "Quis at tellus nullam tincidunt imperdiet. Gravida tincidunt urna nunc magna ultrices a lobortis. Quis turpis tristique in purus mauris id suscipit integer nunc. Sed eg.",
      postedTime: "Posted 2hr ago",
      imgStyle: { backgroundColor: '#35948D', borderRadius: '0.5rem' }
    }
  ];

  return (
    <div className="flex flex-col items-center mr-96 h-screen pt-0">
      <div className="w-[328px] h-[50px] flex justify-between items-center bg-black rounded-full p-2 mb-4">
        <span className="font-bold text-sl text-white font-poppins">SEARCH RESULT</span>
        <span className="text-base text-white font-poppins">121 job</span>
      </div>
      {cardsData.map((card, index) => (
        <SearchResult key={index} {...card} />
      ))}
    </div>
  );
};

export default SearchResultsList;






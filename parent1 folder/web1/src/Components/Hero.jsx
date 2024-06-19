import React from "react";
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] at-[-96px] w-full h-screen mx-auto text-center flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH REACT</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with react.
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold"></p>

          
    <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-white'>Monitor your coding to increase Quality for BTB,BTC,&SASS platforms</p>
        <button class="bg-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto py-5 text-black">Get Started</button>
      </div>
    </div>
  );
};
export default Hero;

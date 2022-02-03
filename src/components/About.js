import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-6xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 mt-10 md:mt-32">
        <div className="mb-4 p-4 max-w-4xl flex justify-center">
          <h1 className="text-4xl text-center font-semibold tracking-wide text-black">
            Michelin star-worthy DeFi innovations crafted by our master chefs
          </h1>
        </div>
        <div className="flex flex-row mt-10">
          <div className="relative w-48 h-48 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-800 mx-3.5">
            <div className="absolute -top-10 left-16 bg-gray-800 text-white w-16 h-16 rounded-full"></div>
          </div>
          <div className="relative w-48 h-48 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-800 mx-3.5">
            <div className="absolute -top-10 left-16 bg-gray-800 text-white w-16 h-16 rounded-full"></div>
          </div>
          <div className="relative w-48 h-48 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-800 mx-3.5">
            <div className="absolute -top-10 left-16 bg-gray-800 text-white w-16 h-16 rounded-full"></div>
          </div>
          <div className="relative w-48 h-48 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-800 mx-3.5">
            <div className="absolute -top-10 left-16 bg-gray-800 text-white w-16 h-16 rounded-full"></div>
          </div>
          <div className="relative w-48 h-48 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-800 mx-3.5">
            <div className="absolute -top-10 left-16 bg-gray-800 text-white w-16 h-16 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

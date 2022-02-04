import React from "react";
import Fade from "react-reveal/Fade";

const Features = () => {
  return (
    <>
      <div
        className="max-w-6xl md:h-screen flex flex-col justify-center items-center mx-auto lg:px-2 "
        id="/features"
      >
        <div className="mb-4 p-4 max-w-4xl flex justify-center">
          <Fade up>
            <h1 className="text-4xl text-center font-semibold tracking-wide text-black">
              Michelin star-worthy DeFi innovations crafted by our master chefs
            </h1>
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row md:mt-10">
          <div className="relative w-48 h-52 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-300 shadow-gray-400 shadow-r- mx-3.5 md:my-0 my-10">
            <div className="absolute -top-10 left-12 bg-gray-600 text-white w-24 h-24 rounded-full"></div>
          </div>
          <div className="relative w-48 h-52 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-300 shadow-gray-400 shadow-r- mx-3.5 md:my-0 my-10">
            <div className="absolute -top-10 left-12 bg-gray-600 text-white w-24 h-24 rounded-full"></div>
          </div>
          <div className="relative w-48 h-52 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-300 shadow-gray-400 shadow-r- mx-3.5 md:my-0 my-10">
            <div className="absolute -top-10 left-12 bg-gray-600 text-white w-24 h-24 rounded-full"></div>
          </div>
          <div className="relative w-48 h-52 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-300 shadow-gray-400 shadow-r- mx-3.5 md:my-0 my-10">
            <div className="absolute -top-10 left-12 bg-gray-600 text-white w-24 h-24 rounded-full"></div>
          </div>
          <div className="relative w-48 h-52 flex flex-col  break-words  mb-6 shadow-lg rounded-lg bg-gray-300 shadow-gray-400 shadow-r- mx-3.5 md:my-0 my-10">
            <div className="absolute -top-10 left-12 bg-gray-600 text-white w-24 h-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

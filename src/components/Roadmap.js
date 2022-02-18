import React from "react";
import Fade from "react-reveal/Fade";

const Roadmap = () => {
  return (
    <>
      <div
        className="max-w-6xl h-full flex flex-col justify-center items-center mx-auto lg:px-2 mt-20 md:mt-52 "
        id="/roadmap"
      >
        <Fade up>
          <h1 className="text-4xl font-base tracking-tight bg-black text-white rounded-lg p-7 m-0 cursor-default">
            RoadMap
          </h1>
        </Fade>
        <div className="h-full my-10 p-6">
          <img className="h-96" src="./Images/rdmp.png"></img>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

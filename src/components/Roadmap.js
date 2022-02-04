import React from "react";
import Fade from "react-reveal/Fade";

const Roadmap = () => {
  return (
    <>
      <div
        className="max-w-6xl h-full flex flex-col justify-center items-center mx-auto lg:px-2 "
        id="/roadmap"
      >
        <Fade up>
          <h1 className="text-5xl font-base tracking-tightbg-black bg-black text-white rounded-md p-7 m-0 cursor-default">
            RoadMap
          </h1>
        </Fade>
        <div className="h-full my-10">
          <img src="./Images/rdmp.png"></img>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

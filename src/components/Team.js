import React from "react";
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <>
      <div
        className="max-w-6xl max-h-full flex flex-col justify-center items-center mx-auto lg:px-2  md:mt-80 "
        id="team"
      >
        <Fade up>
          <h1 className="text-4xl font-base tracking-tight bg-black text-white rounded-lg p-7 my-10 cursor-default">
            Team
          </h1>
        </Fade>
        <div className="h-96 flex flex-col w-full  ">
          <div className="flex flex-col items-center md:flex-row justify-around my-4">
            <div className="w-40 h-40 bg-gray-300 drop-shadow-2xl rounded-full m-2 flex justify-center items-center ">
              1
            </div>
            <div className="w-40 h-40 bg-gray-300 drop-shadow-2xl rounded-full m-2 flex justify-center items-center">
              2
            </div>
            <div className="w-40 h-40 bg-gray-300 drop-shadow-2xl rounded-full m-2 flex justify-center items-center">
              3
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-evenly my-4">
            <div className="w-40 h-40 bg-gray-300 drop-shadow-2xl rounded-full m-2 flex justify-center items-center">
              4
            </div>
            <div className="w-40 h-40 bg-gray-300 drop-shadow-2xl rounded-full m-2 flex justify-center items-center">
              5
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">dsf</div>
    </>
  );
};

export default Team;

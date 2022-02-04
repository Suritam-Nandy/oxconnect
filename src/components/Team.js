import React from "react";

const Team = () => {
  return (
    <>
      <div className="max-w-6xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2  md:my-40">
        <h1 className="text-5xl font-base tracking-tightbg-black bg-black text-white rounded-md p-7 my-10 cursor-default">
          Team
        </h1>
        <div className="h-96 flex flex-col w-full  ">
          <div className="flex flex-row justify-around my-4">
            <div className="w-40 h-40 bg-gray-300 rounded-full m-2 flex justify-center items-center ">
              1
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full m-2 flex justify-center items-center">
              2
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full m-2 flex justify-center items-center">
              3
            </div>
          </div>
          <div className="flex flex-row justify-evenly my-4">
            <div className="w-40 h-40 bg-gray-300 rounded-full m-2 flex justify-center items-center">
              4
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full m-2 flex justify-center items-center">
              5
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Team;

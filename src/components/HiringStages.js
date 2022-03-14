import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const HiringStages = () => {
  return (
    <div>
      {" "}
      <div className=" w-2/3 text-lg p-2 mx-2 pb-36">
        <h1 className="text-2xl font-bold my-2 mb-3">Hiring stages</h1>
        <p className=" text-base">
          Here's where you can manage the hiring stages for this Job. You can
          also control the order of the stages by dragging and dropping.
        </p>
        <div className="mt-10">
          <div className="flex flex-col justify-start  items-start  w-full m-1 my-5 wgray-100  bg-gray-200   px-4 rounded-md">
            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <h1 className="text-base font-semibold">Inbox</h1>
              <h1 className="text-xs">No candidates</h1>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <div className="flex flex-row w-full justify-between items-center">
                <div>
                  <h1 className="text-base font-semibold">Screen</h1>
                  <h1 className="text-xs">No candidates</h1>
                </div>
                <div>
                  <FiMoreVertical className="w-4 h-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <div className="flex flex-row w-full justify-between items-center">
                <div>
                  <h1 className="text-base font-semibold">Interview</h1>
                  <h1 className="text-xs">No candidates</h1>
                </div>
                <div>
                  <FiMoreVertical className="w-4 h-4 mx-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <div className="flex flex-row w-full justify-between items-center">
                <div>
                  <h1 className="text-base font-semibold">Decide</h1>
                  <h1 className="text-xs">No candidates</h1>
                </div>
                <div>
                  <FiMoreVertical className="w-4 h-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <div className="flex flex-row w-full justify-between items-center">
                <div>
                  <h1 className="text-base font-semibold">Offer</h1>
                  <h1 className="text-xs">No candidates</h1>
                </div>
                <div>
                  <FiMoreVertical className="w-4 h-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <h1 className="text-base font-semibold">Hired</h1>
              <h1 className="text-xs">No candidates</h1>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <h1 className="text-base font-semibold">Archived</h1>
              <h1 className="text-xs">No candidates</h1>
            </div>

            <div className="flex flex-col justify-start items-start w-full py-1.5 border-b border-white">
              <h1 className="text-base font-semibold">Started</h1>
              <h1 className="text-xs">No candidates</h1>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-row justify-start items-center m-1 my-5 w-full">
            <div className="px-2 py-1 rounded-md text-gray-100 hover:text-white bg-gray-600 hover:bg-gray-700 mr-8 text-base font-semibold">
              Add additional changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringStages;

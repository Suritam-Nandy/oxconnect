import React, { useState } from "react";
import Input from "../components/layout/Input";
import JobDetails from "../components/JobDetails";
import HiringTeam from "../components/HiringTeam";
import { FiChevronRight } from "react-icons/fi";
const JobSetup = () => {
  const [status, setStatus] = useState("JobDetails");

  const onInputChange = (status) => {
    setStatus(status);
  };
  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
        <div className="w-full  justify-start items-center my-10  px-2  ">
          <div className="w-full flex flex-row">
            <div className="w-3/12 text-lg  border-r p-1 ">
              <div
                onClick={() => onInputChange("JobDetails")}
                className="flex flex-row justify-between items-center my-2 text-black hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Job details</h1>
                <FiChevronRight className=" " />
              </div>
              <div className="flex flex-row justify-between items-center my-2 text-gray-600 hover:text-black hover:bg-gray-200 px-2 rounded">
                <h1 className=" font-semibold"> Job description</h1>

                <FiChevronRight className=" " />
              </div>
              <div className="flex flex-row justify-between items-center my-2 text-gray-600 hover:text-black hover:bg-gray-200 px-2 rounded">
                <h1 className=" font-semibold"> Application form</h1>

                <FiChevronRight className=" " />
              </div>
              <div className="flex flex-row justify-between items-center my-2 text-gray-600 hover:text-black hover:bg-gray-200 px-2 rounded">
                <h1 className=" font-semibold">Hiring Stages</h1>

                <FiChevronRight className=" " />
              </div>

              <div
                onClick={() => onInputChange("HiringTeam")}
                className="flex flex-row justify-between items-center my-2 text-gray-600 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold">Hiring team</h1>

                <FiChevronRight className=" " />
              </div>
            </div>

            {status === "JobDetails" ? (
              <JobDetails />
            ) : status === "HiringTeam" ? (
              <HiringTeam />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSetup;

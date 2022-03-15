import React, { useState } from "react";

import { AiOutlineInbox } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const AccountSettings = () => {
  const [status, setStatus] = useState("JobDetails");

  const onInputChange = (status) => {
    setStatus(status);
  };
  return (
    <div className="max-w-screen flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
      <div className="w-full  justify-start items-center my-10  px-2  ">
        <div className="w-full flex flex-row">
          <div className="w-3/12 text-lg  border-r p-1 ">
            <div className="flex flex-row justify-between my-2 px-2 text-gray-600 hover:text-black hover:bg-gray-200 rounded">
              <div className="flex flex-row">
                <h1 className="text-base">User profile</h1>
              </div>
              <label className="text-base">0</label>
            </div>
            <div
              onClick={() => onInputChange("JobDetails")}
              className="flex flex-row justify-between items-center my-2 text-black hover:text-black hover:bg-gray-200 px-2 rounded"
            >
              <h1 className=" font-semibold  ">Job details</h1>
              <FiChevronRight className=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

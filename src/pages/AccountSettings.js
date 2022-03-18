import React, { useState } from "react";

import { AiOutlineInbox } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import UserProfile from "../components/UserProfile";
import Preferences from "../components/Preferences";
import Organization from "../components/Organization";
import ACTeam from "../components/ACTeam";
import MessageTemplate from "../components/MessageTemplate";
import ReviewTemplate from "../components/ReviewTemplate";
import JobBoard from "../components/JobBoard";
import JobCategory from "../components/JobCategory";
import Integrations from "../components/Integrations";
import PlanBilling from "../components/PlanBilling";

const AccountSettings = () => {
  const [status, setStatus] = useState("UserProfile");

  const onInputChange = (status) => {
    setStatus(status);
  };
  return (
    <div className="max-w-screen flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
      <div className="w-full  justify-start items-center my-10  px-2  ">
        <div className="w-full flex flex-row">
          <div
            className="w-4/12 text-gray-600 
 border-r p-1 "
          >
            <div
              onClick={() => onInputChange("UserProfile")}
              className="flex flex-row justify-between items-center my-2 text-black hover:text-black hover:bg-gray-200 px-2 rounded"
            >
              <h1 className=" font-semibold  ">User Profile</h1>
              <FiChevronRight className=" " />
            </div>
            <div
              onClick={() => onInputChange("Preferences")}
              className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
            >
              <h1 className=" font-semibold  ">Preferences</h1>
              <FiChevronRight className=" " />
            </div>
            <div className="mt-20 ">
              <h1 className="px-2 font-bold text-xs text-black ">Admin</h1>
              <div
                onClick={() => onInputChange("Organization")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Organization</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("ACTeam")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Team</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("MessageTemplate")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Message Template</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("ReviewTemplate")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Review Template</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("JobBoard")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Job board</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("JobCategory")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Job category</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("Integrations")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Integrations</h1>
                <FiChevronRight className=" " />
              </div>
              <div
                onClick={() => onInputChange("PlanBilling")}
                className="flex flex-row justify-between items-center my-2 hover:text-black hover:bg-gray-200 px-2 rounded"
              >
                <h1 className=" font-semibold  ">Plan & billing</h1>
                <FiChevronRight className=" " />
              </div>
            </div>
          </div>
          <div className="w-8/12">
            {" "}
            {status === "UserProfile" ? (
              <UserProfile />
            ) : status === "Preferences" ? (
              <Preferences />
            ) : status === "Organization" ? (
              <Organization />
            ) : status === "ACTeam" ? (
              <ACTeam />
            ) : status === "MessageTemplate" ? (
              <MessageTemplate />
            ) : status === "ReviewTemplate" ? (
              <ReviewTemplate />
            ) : status === "JobBoard" ? (
              <JobBoard />
            ) : status === "JobCategory" ? (
              <JobCategory />
            ) : status === "Integrations" ? (
              <Integrations />
            ) : status === "PlanBilling" ? (
              <PlanBilling />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

import React, { useState } from "react";
import Input from "../components/layout/Input";
import { FiMoreVertical } from "react-icons/fi";

const HiringTeam = () => {
  const [showModal, setShowModal] = useState(false);

  const [job, setjob] = useState({
    company: "",
    linkedIn: "",
    gitHub: "",

    twitter: "",
  });
  const onInputChange = (e) => {
    setjob({ ...job, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-9/12 text-lg p-2 mx-2 ">
      <h1 className="text-2xl font-bold my-2 mb-3">Hiring team</h1>
      <p className=" text-base">
        Members who are assigned as part of the hiring team gain access to the
        job. They can interact with candidates and update the job settings.
      </p>
      <div className="mt-10">
        <div className="flex flex-row justify-between items-center m-1 my-5 wgray-100  bg-gray-200  p-2.5 px-4 rounded-md">
          <div className="flex flex-row justify-start items-start">
            <div className="rounded  bg-gray-500 w-10 h-10"></div>
            <div className="mx-2.5 ">
              <h1 className=" ">
                Suritam Nandy
                <label className="px-0.5  ml-1 text-xs text-gray-50 bg-gray-700 rounded ">
                  Admin
                </label>
              </h1>
              <h1 className="text-xs -mt-1 ml-0.5 ">some@email.com</h1>
            </div>
          </div>
          <FiMoreVertical className="w-4 h-4 " />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-row justify-start items-center m-1 my-5 w-full">
          <div className="px-2 py-1 rounded-md text-gray-100 hover:text-white bg-gray-600 hover:bg-gray-700 mr-8 text-base font-semibold">
            Add a team member
          </div>
          <div className="px-2 py-1 rounded-md text-gray-100 hover:text-white bg-gray-600 hover:bg-gray-700 mr-8 text-base font-semibold">
            Remove all non-admins
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringTeam;

import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileEducation = () => {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="education" className="  ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Education</h1>
          <div>
            <p className="text-gray-600">What schools have you studied at?</p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <div className="w-11/12 mb-6 ">
            <div
              className="flex flex-row m-1 my-3 w-full border border-gray-300 shadow-lg p-1 mr-40
             "
            >
              <img
                src="/Images/nopic_college.png"
                className="w-16 h-16 border mr-4"
              />
              <div>
                <h1 className="text-black font-medium">
                  Srm Institute Of Science And Technology
                </h1>
                <h1 className="text-gray-600 font-medium">
                  Computer Science and Engineering, Bachelor's
                </h1>
                <p className="text-gray-600">2023</p>
              </div>
            </div>
          </div>
          <h1 className="text-gray-700 hover:text-black font-medium w-max  mb-2">
            + Add education
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;

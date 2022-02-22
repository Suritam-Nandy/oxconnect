import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileSkills = () => {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="skills" className="  ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Your Skills</h1>
          <div>
            <p className="text-gray-600">
              This will help startups hone in on your strengths.
            </p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <div className="w-11/12 my-6 ">
            <input
              type="text"
              className="form-control w-56 md:w-64 xl:w-full shadow appearance-none border rounded  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g. Pythonc React"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;

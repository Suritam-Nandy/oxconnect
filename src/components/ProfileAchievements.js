import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileAchievements = () => {
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
      <div className="flex flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Achievements</h1>
          <div>
            <p className="text-gray-600">
              Sharing more details about yourself will help you stand out more.
            </p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <div className="w-11/12 mb-6 ">
            <div className="flex flex-col m-1 my-3 w-full">
              <label className="my-2 mr-1 flex justify-end text-gray-400">
                1000
              </label>
              <textarea
                placeholder="It's OK to brag - e.g. I launched 3 successful Facebook apps which in total reached 2M+ users and generated $100k+ in revenue. I built everything from the front-end to the back-end and everything in between."
                name="bio"
                value={profile.bio}
                onChange={onInputChange}
                rows="10"
                className="mr-20 w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAchievements;

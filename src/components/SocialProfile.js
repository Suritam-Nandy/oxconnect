import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const SocialProfile = () => {
  const [profile, setProfile] = useState({
    website: "",
    linkedIn: "",
    gitHub: "",

    twitter: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="social" className="  ">
      <div className="flex flex-col md:flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-full md:w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Social Profiles</h1>
          <div>
            <p className="text-gray-600">Where can people find you online?</p>
          </div>
        </div>
        <div className="w-full md:w-8/12 items-start p-2">
          <div className="w-full mb-10">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Website
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="https://"
                name="website"
                value={profile.website}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                LinkedIn
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="https://linkedin.com/username"
                name="linkedIn"
                value={profile.linkedIn}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                GitHub
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="https://gitHub.com/username"
                name="gitHub"
                value={profile.gitHub}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Twitter
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="https://twitter.com/username"
                name="twitter"
                value={profile.twitter}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;

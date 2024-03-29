import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import ProfileAbout from "../components/ProfileAbout";
import SocialProfile from "../components/SocialProfile";
import ProfileWorkExp from "../components/ProfileWorkExp";
import ProfileEducation from "../components/ProfileEducation";
import ProfileSkills from "../components/ProfileSkills";
import ProfileAchievements from "../components/ProfileAchievements";

import ProfileIdentity from "../components/ProfileIdentity";

import Input from "../components/layout/Input";
import Overview from "./Overview";

import Resume from "./Resume";
const UpdateProfile = () => {
  const [status, setStatus] = useState("Profile");

  const onInputChange = (status) => {
    setStatus(status);
  };
  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
        <div className="w-full flex justify-start items-center my-10  ">
          <div className="w-full px-2 flex flex-col ">
            <h1 className="text-4xl my-6">Edit your profile</h1>
            <div className="my-8 flex flex-row justify-start items-center border-b border-gray-200">
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1
                  onClick={() => onInputChange("Overview")}
                  className="cursor-pointer"
                >
                  Overview
                </h1>
              </div>
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1
                  onClick={() => onInputChange("Profile")}
                  className="cursor-pointer"
                >
                  Profile
                </h1>
              </div>
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1
                  onClick={() => onInputChange("Resume")}
                  className="cursor-pointer"
                >
                  Resume
                </h1>
              </div>
            </div>
          </div>
        </div>
        {status === "Overview" ? (
          <div className="p-2  w-full h-full border border-gray-300 rounded-md cursor-default">
            {/* <Fade up> */}
            <Overview />
            {/* </Fade> */}
          </div>
        ) : status === "Resume" ? (
          <div className="p-2  w-full h-full border border-gray-300 rounded-md cursor-default">
            {/* <Fade up> */}
            <Resume />
            {/* </Fade> */}
          </div>
        ) : status === "Profile" ? (
          <div className="p-2  w-full h-full border border-gray-300 rounded-md cursor-default">
            <Fade up>
              <ProfileAbout />
              <SocialProfile />
              <ProfileWorkExp />
              <ProfileEducation />
              <ProfileSkills />
              <ProfileAchievements />
              <ProfileIdentity />
            </Fade>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UpdateProfile;

import React, { useState } from "react";

import ProfileAbout from "../components/ProfileAbout";
import SocialProfile from "../components/SocialProfile";
import ProfileWorkExp from "../components/ProfileWorkExp";
import ProfileEducation from "../components/ProfileEducation";
import ProfileSkills from "../components/ProfileSkills";
import ProfileAchievements from "../components/ProfileAchievements";

import ProfileIdentity from "../components/ProfileIdentity";

import Input from "../components/layout/Input";

import Resume from "./Resume";
const UpdateProfile = () => {
  const [resu, setResu] = useState(false);
  const [pro, setPro] = useState(true);

  const onInputChange = () => {
    if (!resu) setResu(!resu);
    if (!pro) setPro(!pro);
  };
  console.log(resu);
  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 ">
        <div className="w-full flex justify-start items-center my-10  ">
          <div className="w-full px-2 flex flex-col ">
            <h1 className="text-4xl my-6">Edit your profile</h1>
            <div className="my-8 flex flex-row justify-start items-center border-b border-gray-200">
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1 onClick={() => onInputChange()} className="">
                  Profile
                </h1>
              </div>
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1 onClick={() => onInputChange()}>Resume</h1>
              </div>
            </div>
          </div>
        </div>
        {resu ? (
          <Resume />
        ) : (
          <div className="p-2  w-full h-full border border-gray-300 rounded-md cursor-default">
            <ProfileAbout />
            <SocialProfile />
            <ProfileWorkExp />
            <ProfileEducation />
            <ProfileSkills />
            <ProfileAchievements />
            <ProfileIdentity />
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateProfile;

import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileAbout = () => {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="about" className=" ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">About</h1>
          <div>
            <p className="text-gray-600">
              Tell us about yourself so startups know who you are.
            </p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <h1 className="text-3xl tracking-tighter mb-4">Suritam Nandy</h1>
          <div>
            <div className=" flex flex-row items-center justify-start">
              <img className="w-16 h-16" src="Images/1 (1).png"></img>
              <button className="mx-4 border border-gray-600 py-2 px-3 rounded-md text-gray-600 font-medium text-sm hover:text-gray-900">
                Upload new photo
              </button>
            </div>
          </div>

          <div className="w-full mb-10">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Where are you based?
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="Enter Name"
                name="displayName"
                value={profile.displayName}
                onChange={onInputChange}
              />
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col m-1 w-60">
                <h1 className="my-2 text-lg">
                  Select your primary role
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <Input
                  placeholder="Enter Name"
                  name="displayName"
                  value={profile.displayName}
                  onChange={onInputChange}
                />
              </div>

              <div className=" flex flex-col m-1 w-56">
                {/* <div className="w-40"> */}
                <h1 className="my-2 text-lg ">
                  Years of experience
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <input
                  type="text"
                  list="exp-years"
                  className="form-control w-16 md:w-40 xl:w-32 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder={placeholder}
                  // name={name}
                  // value={value}
                  // onChange={onChange}
                />
                <datalist id="exp-years" className="bg-white w-7">
                  <option className=""> less than 1 Year</option>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>2+ Years</option>
                </datalist>
                {/* </div> */}
                {/* <Input
                placeholder="Enter Name"
                name="displayName"
                value={profile.displayName}
                onChange={onInputChange}
              /> */}
              </div>
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Open to the following roles
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <Input
                placeholder="Enter Name"
                name="displayName"
                value={profile.displayName}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Your bio
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <textarea
                placeholder="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
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

export default ProfileAbout;

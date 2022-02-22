import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileWorkExp = () => {
  const [open, setOpen] = useState(true);
  const [profile, setProfile] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    bio: "",
    displayName: "",
    email: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="workExp" className="  ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Your work experience</h1>
          <div>
            <p className="text-gray-600">What other positions have you held?</p>
          </div>
        </div>
        <div className="w-8/12 items-start p-1 ">
          {!open && (
            <h1
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-black font-medium w-max mt-4 my-2 cursor-pointer"
            >
              + Add work experience
            </h1>
          )}
          {open && (
            <div className="w-full mt-4 mb-10 bg-gray-200 p-4 rounded-md ">
              <div className="flex flex-col m-1 my-3 w-full">
                <h1 className="my-2  text-lg">
                  Company
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <Input
                  placeholder="Company Name"
                  name="company"
                  value={profile.company}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col m-1 my-3 w-full">
                <h1 className="my-2  text-lg">
                  Title
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <Input
                  placeholder="title"
                  name="title"
                  value={profile.title}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col m-1 my-3 w-full">
                <h1 className="my-2  text-lg">
                  Start Date
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <Input
                  placeholder="  Start Date"
                  name="startDate"
                  value={profile.startDate}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col m-1 my-3 w-full">
                <h1 className="my-2  text-lg">
                  End Date
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <Input
                  placeholder="  End Date"
                  name="endDate"
                  value={profile.endDate}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col m-1 my-3 w-full">
                <h1 className="my-2  text-lg">
                  Description
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <textarea
                  placeholder="Description"
                  name="description"
                  value={profile.description}
                  onChange={onInputChange}
                  rows="10"
                  className="mr-20 w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              {/* <div className="flex flex-col m-1 my-3 w-full">
              <input
                type="text"
                list="exp-years"
                className="form-control  shadow appearance-none border rounded  py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="This position is a..."
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
            </div> */}
              <div className="flex flex-row justify-end m-1  my-3 w-full">
                <button
                  onClick={() => setOpen(!open)}
                  className="hover:bg-gray-300 text-gray-800 hover:text-black font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline mx-2"
                >
                  Cancel
                </button>
                <button className="bg-gray-800 text-gray-200 hover:text-white font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline mx-2">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileWorkExp;

import React, { useState, useMemo } from "react";
import CreatableSelect from "react-select/creatable";
import Input from "./layout/Input";

const ProfileSkills = () => {
  const options = useMemo(
    () => [
      { value: "python", label: "Python" },
      { value: "react", label: "React" },
      { value: "javascript", label: "Javascript" },
    ],
    []
  );
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  const handleChange = (inputValue: any, actionMeta: any) => {
    console.group("Input Changed");
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="skills" className="  ">
      <div className="flex  flex-col md:flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-full md:w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Your Skills</h1>
          <div>
            <p className="text-gray-600">
              This will help startups hone in on your strengths.
            </p>
          </div>
        </div>
        <div className="w-full md:w-8/12 items-start p-2">
          <div className="w-11/12 my-6 ">
            <CreatableSelect
              placeholder="e.g. Python, React"
              options={options}
              isMulti
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;

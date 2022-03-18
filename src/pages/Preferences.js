import React, { useState } from "react";
import Input from "../components/layout/Input";
import CreatableSelect from "react-select/creatable";

const handleChange = (inputValue: any, actionMeta: any) => {
  console.group("Input Changed");
  console.log(inputValue);
  console.log(`action: ${actionMeta.action}`);
  console.groupEnd();
};

const Preferences = () => {
  const [showModal, setShowModal] = useState(false);

  const [job, setjob] = useState({
    company: "",
    category: "",
    gitHub: "",

    twitter: "",
  });
  const onInputChange = (e) => {
    setjob({ ...job, [e.target.name]: e.target.value });
  };
  return (
    <div className=" w-full text-lg p-2 mx-2 pb-36">
      <h1 className="text-2xl font-bold my-2 mb-3">Preferences</h1>
      <p className=" text-base">
        Here's where you can edit the general information for this job. This
        includes things such as the job-type, hiring location, and if it's
        remote-friendly.
      </p>
      <div className="my-6">
        <h1 className="text-xl font-bold my-2 mb-3">Basic information</h1>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Title
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <Input
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Category
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <CreatableSelect
            className="form-control w-56 md:w-64 xl:w-96 shadow text-gray-700 leading-snug "
            placeholder="e.g. Sales"
            name="pronouns"
            isClearable
            onChange={handleChange}
            options={[
              { value: "SalesMarketing", label: "Sales & Marketing" },
              {
                value: "DesignUserExperience",
                label: "Design & User Experience",
              },
              { value: "ProductManagement", label: "Product Management" },
              { value: "CustomerCommunity", label: "Customer & Community" },
              { value: "ContentCopywriting", label: "Content & Copywriting" },
            ]}
          />
        </div>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Employment type
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <CreatableSelect
            className="form-control w-56 md:w-64 xl:w-96 shadow text-gray-700 leading-snug "
            placeholder="e.g. Full Time"
            name="pronouns"
            isClearable
            onChange={handleChange}
            options={[
              { value: "Full-Time", label: "Full Time" },
              {
                value: "Part-Time",
                label: "Part Time",
              },
              { value: "Temporary", label: "Temporary" },
              { value: "Contract", label: "Contract" },
              { value: "Internship", label: "Internship" },
              { value: "Volunteer", label: "Volunteer" },
            ]}
          />
        </div>
      </div>

      <div className="my-6">
        <h1 className="text-xl font-bold my-2 mb-3">Hiring location</h1>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Country
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <Input
            placeholder="e.g India"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            City
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <Input
            placeholder="e.g Bangalore"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="my-6">
        <h1 className="text-xl font-bold my-2 mb-3">Remote options</h1>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Is this job remote friendly?
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <CreatableSelect
            className="form-control w-56 md:w-64 xl:w-96 shadow text-gray-700 leading-snug "
            placeholder="e.g. No remote"
            name="pronouns"
            isClearable
            onChange={handleChange}
            options={[
              { value: "No-remote", label: "No remote" },

              { value: "Remote-friendly", label: "Remote friendly" },
              { value: "Remote(only)", label: "Remote(only)" },
            ]}
          />
        </div>
      </div>

      <div className="my-6">
        <h1 className="text-xl font-bold my-2 mb-3">Salary or wage</h1>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Display
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <CreatableSelect
            className="form-control w-56 md:w-64 xl:w-96 shadow text-gray-700 leading-snug "
            placeholder="e.g. Not shown"
            name="pronouns"
            isClearable
            onChange={handleChange}
            options={[
              { value: "Notshown", label: "Not shown" },

              { value: "Fixedamount", label: "Fixed amount" },
              { value: "Range", label: "Range" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Preferences;

import React, { useState } from "react";
import Input from "../components/layout/Input";

const JobDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const [job, setjob] = useState({
    company: "",
    linkedIn: "",
    gitHub: "",

    twitter: "",
  });
  const onInputChange = (e) => {
    setjob({ ...job, [e.target.name]: e.target.value });
  };
  return (
    <div className=" w-9/12 text-lg p-2 mx-2">
      <h1 className="text-2xl font-bold my-2 mb-3">Job details</h1>
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
          <Input
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 mb-5 w-full">
          <h1 className="my-2  text-sm">
            Employment type
            <label className="ml-1 text-lg text-gray-600">*</label>
          </h1>
          <Input
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
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
            placeholder="e.g Google"
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
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
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
            placeholder="e.g Google"
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
            placeholder="e.g Google"
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
          <Input
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
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
          <Input
            placeholder="e.g Google"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

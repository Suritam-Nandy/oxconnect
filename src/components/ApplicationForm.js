import React, { useState } from "react";
import Input from "../components/layout/Input";
import { FiMoreVertical } from "react-icons/fi";
import CreatableSelect from "react-select/creatable";

const handleChange = (inputValue: any, actionMeta: any) => {
  console.group("Input Changed");
  console.log(inputValue);
  console.log(`action: ${actionMeta.action}`);
  console.groupEnd();
};
const ApplicationForm = () => {
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
    <div>
      {" "}
      <div className=" w-2/3 text-lg p-2 mx-2 pb-36">
        <h1 className="text-2xl font-bold my-2 mb-3">Application Form</h1>
        <p className=" text-base">
          Here's where you can edit which fields appear on this job's
          application form and if they are required or not. You can further
          customize the application form by adding additional questions.
        </p>
        <div className="mt-10 ">
          <h1 className="text-xl font-bold my-2 mb-3">Basic information</h1>
          <h1 className="my-2  ">Add a question</h1>
          <Input
            placeholder="e.g State Node.js proficiency"
            name="company"
            value={job.company}
            onChange={onInputChange}
          />
        </div>

        <div className="mt-10">
          <div className="flex flex-row justify-start items-center m-1 my-5 w-full">
            <div className="px-2 py-1 rounded-md text-gray-100 hover:text-white bg-gray-600 hover:bg-gray-700 mr-8 text-base font-semibold">
              Add more questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;

import React, { useState } from "react";
import Input from "./layout/Input";
const ProfileWorkExp = () => {
  const [open, setOpen] = useState(true);
  const [workList, setWorkList] = useState([
    {
      company: "         LiteStore",
      title: "         Full Stack Developer",
      startDate: "   Jul 2021 to Dec 2021     ",
      endDate: "Jul 2021 to Dec 2021",
      description:
        "Worked as a Full Stack Developer and built the company's website which is their product as well, where people can lend and hire properties/places for temporary purpose. It is built with React.js Redux Firebase and Tailwind CSS technologies.",
      website: "https://litestore.in/",
    },
  ]);
  const [work, setWork] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    website: "",
  });
  const onInputChange = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    setWorkList([...workList, ...[work]]);
    setWork({
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      website: "",
    });
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
          {workList &&
            workList.map((wk) => (
              <div className="w-11/12 mb-6 ">
                <div className="flex flex-row m-1 my-3 w-full border border-gray-300 shadow-lg p-3">
                  <img
                    src="/Images/nopic_startup.png"
                    className="w-16 h-16 border mr-4"
                  />
                  <div>
                    <h1 className="text-black font-medium">{wk.company}</h1>
                    <h1 className="text-gray-600 font-medium">
                      <a href="https://litestore.in/" target="_blank">
                        {wk.title}
                      </a>
                    </h1>
                    <p className="text-gray-400">{`${wk.startDate} to ${wk.startDate}`}</p>
                    <p className="text-gray-900 mt-4">{wk.description}</p>
                  </div>
                </div>
              </div>
            ))}

          {!open && (
            <>
              <h1
                onClick={() => setOpen(!open)}
                className="text-gray-700 hover:text-black font-medium w-max mt-4 my-2 cursor-pointer"
              >
                + Add work experience
              </h1>
            </>
          )}
          {open && (
            <div className="w-11/12 mt-4 mb-10 bg-gray-200 p-4 rounded-md ">
              <form onSubmit={submitForm}>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Company
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Company Name"
                    name="company"
                    value={work.company}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Title
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Title"
                    name="title"
                    value={work.title}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Website
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Website"
                    name="website"
                    value={work.website}
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
                    value={work.startDate}
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
                    value={work.endDate}
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
                    value={work.description}
                    onChange={onInputChange}
                    rows="10"
                    className="mr-20 w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>

                <div className="flex flex-row justify-end m-1  my-3 w-full">
                  <button
                    onClick={() => setOpen(!open)}
                    className="hover:bg-gray-300 text-gray-800 hover:text-black font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline mx-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gray-800 text-gray-200 hover:text-white font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline mx-2"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileWorkExp;

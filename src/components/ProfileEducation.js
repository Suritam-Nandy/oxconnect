import React, { useState } from "react";
import Input from "./layout/Input";
const ProfileEducation = () => {
  const [open, setOpen] = useState(false);
  const [educationList, setEducationList] = useState([
    {
      college: "Srm Institute Of Science And Technology",
      degree: "Computer Science and Engineering, Bachelor's",
      graduation: "2023",
    },
  ]);
  const [education, setEducation] = useState({
    college: "",
    degree: "",
    graduation: "",
  });
  const onInputChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    setEducationList([...educationList, ...[education]]);
    setEducation({
      college: "",
      degree: "",
      graduation: "",
    });
    setOpen(!open);
  };
  return (
    <div id="education" className="  ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Education</h1>
          <div>
            <p className="text-gray-600">What schools have you studied at?</p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          {educationList &&
            educationList.map((edu) => (
              <>
                <div className="w-11/12 mb-6 ">
                  <div
                    className="flex flex-row m-1 my-3 w-full border border-gray-300 shadow-lg p-1 mr-40
             "
                  >
                    <img
                      src="/Images/nopic_college.png"
                      className="w-16 h-16 border mr-4"
                    />
                    <div>
                      <h1 className="text-black font-medium">{edu.college}</h1>
                      <h1 className="text-gray-600 font-medium">
                        {edu.degree}
                      </h1>
                      <p className="text-gray-400">{edu.graduation}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}

          {!open && (
            <>
              <h1
                onClick={() => setOpen(!open)}
                className="text-gray-700 hover:text-black font-medium w-max mt-4 my-2 cursor-pointer"
              >
                + Add education
              </h1>
            </>
          )}
          {open && (
            <div className="w-11/12 mt-4 mb-10 bg-gray-200 p-4 rounded-md ">
              <form onSubmit={submitForm}>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Education
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="College / University"
                    name="college"
                    value={education.college}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Graduation
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Year"
                    name="graduation"
                    value={education.graduation}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 my-3 w-full">
                  <h1 className="my-2  text-lg">
                    Degree & Major
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Degree"
                    name="degree"
                    value={education.degree}
                    onChange={onInputChange}
                  />
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

export default ProfileEducation;

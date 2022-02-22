import React, { useState, useEffect } from "react";

import Input from "./layout/Input";

const ProfileIdentity = () => {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="skills" className="  ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">Identity</h1>
          <div>
            <p className="text-gray-600 text-sm">
              At AngelList Talent, we’re committed to helping companies hire in
              a more inclusive way. Part of that includes asking candidates to
              share demographic information so we can help recruiters understand
              and build their pipeline. Self identifying is completely optional,
              and we'll handle your information with care. Your responses to
              gender and ethnicity will not be displayed on your profile, and
              displaying your pronouns is optional.
            </p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <div className="w-11/12 mb-6 ">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2 text-lg">Pronouns</h1>
              <input
                type="text"
                className="form-control w-56 md:w-64 xl:w-full shadow appearance-none border rounded  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g. He / Him"
              />
            </div>
          </div>

          <div className="w-11/12 mb-6 ">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2 text-lg">Gender Identity</h1>
              <input
                type="text"
                className="form-control w-56 md:w-64 xl:w-full shadow appearance-none border rounded  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g. Man"
              />
            </div>
          </div>
          <div className="w-11/12 mb-6 ">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2 text-lg flex flex-col mb-4">
                Race/Ethnicity
                <label className="text-gray-500 text-xs ">
                  You can select multiple
                </label>
              </h1>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    Black / African-American
                  </label>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    East Asian (including Chinese, Japanese, Korean, and
                    Mongolian)
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    Hispanic or Latino/a/x
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">Middle Eastern</label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    Native American or Alaskan Native
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">Pacific Islander</label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    South Asian (including Bangladeshi, Bhutanese, Indian,
                    Nepali, Pakistani, and Sri Lankan)
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">
                    Southeast Asian (including Burmese, Cambodian, Filipino,
                    Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean,
                    Thai, and Vietnamese)
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">White</label>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center  text-gray-600 hover:text-gray-800 text-lg">
                <div className="w-max ">
                  <input
                    type="checkbox"
                    className="text-gray-800   h-3 w-3 mx-1 "
                    name="Black / African-American"
                  />
                  <label className="  text-black mx-1">Prefer not to say</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIdentity;

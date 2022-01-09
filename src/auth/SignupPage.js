import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [role, setRole] = useState("");

  return (
    <div className="mx-auto h-full">
      <div className="flex content-center items-center justify-center min-h-100 h-screen">
        <div className="w-full lg:w-4/12 px-4 items-center ">
          <div className="relative container flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Sign up as
                </h6>
              </div>
              <div className="flex flex-row justify-evenly items-center text-center">
                <div>
                  <button
                    className={`${
                      role === "User"
                        ? "text-blueGray-700"
                        : "text-blueGray-500"
                    }  bg-white text-blueGray-500  hover:text-blueGray-700 active:text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150`}
                    type="button"
                    onClick={() => {
                      setRole("User");
                    }}
                  >
                    {/* <FcGoogle className="mr-1" size={20} /> */}
                    User
                  </button>
                  <hr className="mt-2 border-b-1 border-blueGray-300" />
                </div>
                <div>
                  <button
                    className={`${
                      role === "Apllicant"
                        ? "text-blueGray-700"
                        : "text-blueGray-500"
                    }  bg-white text-blueGray-500  hover:text-blueGray-700 active:text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150`}
                    type="button"
                    onClick={() => {
                      setRole("Apllicant");
                    }}
                  >
                    {/* <FcGoogle className="mr-1" size={20} /> */}
                    Apllicant
                  </button>
                  <hr className="mt-2 border-b-1 border-blueGray-300" />
                </div>
              </div>
              {role !== "" && (
                <>
                  {" "}
                  <div className="mt-6 py-2 flex justify-center items-center">
                    <Link
                      to={{
                        pathname: `/signup/${role}`,
                        role: `${role}`,
                      }}
                    >
                      <button
                        className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

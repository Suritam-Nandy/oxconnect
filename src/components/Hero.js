import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-6xl flex justify-center mx-auto lg:px-2 mb-2 mt-10 md:mt-56">
        <div className="mb-4 p-4">
          <div className=" mb-4 p-2  grid grid-rows-1 md:grid-cols-2 gap-1">
            <div className="flex flex-col justify-center mr-1 row-start-2 md:col-start-1 md:row-start-1">
              <h1 className="text-4xl font-semibold tracking-wide text-black cursor-default">
                World's first
                <span className="bg-black text-white rounded-md px-1 ml-2.5">
                  Blockchain
                </span>{" "}
                based hiring Platform.
              </h1>
              <div className="flex flex-row justify-center mt-8">
                <div className="mr-4 p-2">
                  <h1 className="text-2xl font-bold text-black my-2 cursor-default">
                    For Companies
                  </h1>
                  <p className="  my-8 text-base tracking-tight">
                    We are the market-leading technical interview platform to
                    identify and hire developers wherever they are.
                  </p>
                  <div className="p-2 flex justify-between items-center">
                    <button className="text-xl bg-gray-800 text-gray-300 hover:text-white hover:border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Create Profile
                    </button>
                  </div>
                </div>
                <div className="mr-4 p-2">
                  <h1 className="text-2xl font-bold text-black my-2 cursor-default">
                    For Applicants
                  </h1>
                  <p className=" my-8 text-base tracking-tight">
                    We are the market-leading technical interview platform to
                    identify and hire developers wherever they are.
                  </p>
                  <div className="p-2 flex justify-between items-center">
                    <button className=" text-xl border border-gray-700 text-gray-700 bg-white hover:text-black hover:border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="   row-start-1 h-full md:col-start-2">
              <div className="mt-4   ">
                <img
                  src="/Images/4565.png "
                  className="h-full w-full"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Hero;

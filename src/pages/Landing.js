import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="mt-20">
        <div className="flex flex-row justify-around">
          <div>
            <h1 className="text-4xl px-4     py-2">0xconnect</h1>
          </div>
          <div className="flex flex-row pl-32">
            <div className="mr-2">
              <h1 className="text-2xl px-4 py-2">Login</h1>
            </div>
            <div className="mr-2">
              <h1 className="text-2xl border-2 border-purple-400 rounded-md px-4 py-2">
                Signup
              </h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div className="mb-4 p-4">
          <div className="mb-4 p-2 grid grid-cols-2 gap-1">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold tracking-wide text-blueGray-600">
                Connecting Applicants to the recruiters.
              </h1>
              <div className="flex flex-row justify-center">
                <div className="mr-4 p-2">Applicant</div>
                <div>Company</div>
              </div>
            </div>

            <div>2</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Landing;

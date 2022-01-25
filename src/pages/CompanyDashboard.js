import React from "react";
// import {Card} form "../components/layout/Card";
import Card from "../components/layout/Card";

const CompanyDashboard = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div className="h-56 bg-purple-700 flex items-center p-2 mb-2">
          <h1 className="text-5xl font-black tracking-wider text-white">
            Name
          </h1>
        </div>
        <div className="mb-4 p-2">
          <h1 className="text-3xl font-bold tracking-wide text-warmGray-800">
            Applicant Tracker
          </h1>
        </div>
        <div className="  bg-blueGray-500 h-full mb-16 p-2 text-xl">
          <div className=" grid grid-cols-4 gap-1">
            <div className="col-span-2 bg-blueGray-400">
              <h1 className="text-xl font-bold tracking-wide text-warmGray-800 ">
                Applied
              </h1>
              <div className="flex flex-row flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="col-span-1 bg-blueGray-400">
              {" "}
              <h1 className="text-xl font-bold tracking-wide text-warmGray-800">
                Status
              </h1>
              <div className="flex flex-row flex-wrap">
                <Card />
              </div>
            </div>
            <div className="col-span-1 bg-blueGray-400">
              {" "}
              <h1 className="text-xl font-bold tracking-wide text-warmGray-800">
                Status
              </h1>
              <div className="flex flex-row flex-wrap">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;

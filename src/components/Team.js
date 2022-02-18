import React from "react";
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <>
      <div
        className="max-w-6xl max-h-full flex flex-col justify-center items-center mx-auto lg:px-2  md:mt-44 "
        id="team"
      >
        <Fade up>
          <h1 className="text-4xl font-base tracking-tight bg-black text-white rounded-lg p-7 my-10 cursor-default">
            Team
          </h1>
        </Fade>
        <div className="h-96 flex flex-col w-full  ">
          <div className="flex flex-col items-center md:flex-row justify-around my-4">
            <div className="w-40 h-40  m-2 flex drop-shadow-2xl justify-center items-center">
              <img
                className="rounded-full drop-shadow-2xl"
                src="/Images/team1.jpg"
              ></img>
            </div>
            <div className="w-40 h-40  m-2 flex drop-shadow-2xl justify-center items-center">
              <img
                className="rounded-full drop-shadow-2xl"
                src="/Images/team1.jpg"
              ></img>
            </div>
            <div className="w-40 h-40  m-2 flex drop-shadow-2xl justify-center items-center">
              <img
                className="rounded-full drop-shadow-2xl"
                src="/Images/team1.jpg"
              ></img>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-evenly my-4">
            <div className="w-40 h-40  m-2 flex drop-shadow-2xl justify-center items-center">
              <img
                className="rounded-full drop-shadow-2xl"
                src="/Images/team1.jpg"
              ></img>
            </div>
            <div className="w-40 h-40  m-2 flex drop-shadow-2xl justify-center items-center">
              <img
                className="rounded-full drop-shadow-2xl"
                src="/Images/team1.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

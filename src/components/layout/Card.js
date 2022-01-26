import React from "react";
import { Link } from "react-router-dom";

import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Card = () => {
  return (
    <Link to="applicant/randomID">
      <div className="w-64 m-1 bg-white rounded-md">
        <div className="flex flex-row justify-start p-2">
          <div class="w-16 h-16 m-1 mx-2">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user image"
            />
          </div>
          <div class="w-16 h-16 m-1 mx-2">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={66}
              duration={2.4}
              easingFunction={easeQuadInOut}
              // repeat
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you'-ci fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none" })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <h1 className="text-lg font-semibold text-warmGray-800 ">
            Suritam Nandy
          </h1>
          <h1 className="text-lg  text-warmGray-800 flex flex-row">
            <HiOutlineLocationMarker className="w-6 h-6 stroke-purple-800" />
            Chennai, India{" "}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;

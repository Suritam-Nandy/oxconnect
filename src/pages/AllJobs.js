import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { FiSettings, FiMoreVertical } from "react-icons/fi";
import { AiOutlineInbox } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import Loading from "../components/layout/Loading";
import Tooltip, { useTooltip, TooltipPopup } from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import "./AllJobs.css";

const AllJobs = () => {
  // const jobs = useSelector((state) => state.firestore.ordered.jobs);

  // useFirestoreConnect({
  //   collection: `alljobs`,
  //   storeAs: "jobs",
  // });
  // if (!jobs) {
  //   return <Loading />;
  // }
  const job = [
    {
      title: "frontent developer",
    },
  ];
  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
        <div className="w-full flex justify-start items-center my-10  ">
          <div className="w-full px-2 flex flex-col ">
            <h1 className="text-xl font-bold my-2">Your assigned jobs</h1>

            <div className=" text-3xl font-semibold px-2 my-12">
              <div className="">
                <div className=" p-2">
                  <div
                    key={job.index}
                    className="h-24 bg-gray-200 rounded-lg flex flex-row p-1 w-full mb-8"
                  >
                    <div className="flex flex-col p-1 w-9/12 border-r border-black ">
                      <div className="flex flex-row justify-between  p-1">
                        <h1 className="font-semibold text-black  text-xl">
                          Frontend Developer
                        </h1>
                        <div className="flex flex-row">
                          <Menu>
                            <Tooltip label="Job setup">
                              <MenuButton>
                                {" "}
                                <FiSettings className="w-4 h-4 mx-1" />
                              </MenuButton>
                            </Tooltip>

                            <MenuList>
                              <MenuItem>Download</MenuItem>
                              <MenuLink to="view">View</MenuLink>
                            </MenuList>
                          </Menu>
                          <Menu>
                            <Tooltip label="More options">
                              <MenuButton>
                                {" "}
                                <FiMoreVertical className="w-4 h-4 mx-1" />
                              </MenuButton>
                            </Tooltip>

                            <MenuList>
                              <MenuItem>Publish job post</MenuItem>
                              <MenuLink>Preview job post</MenuLink>
                              <MenuLink>Clone job</MenuLink>
                              <MenuLink>Archive job</MenuLink>
                            </MenuList>
                          </Menu>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-start w-full text-lg p-1 mt-1.5">
                        <p className="px-1 py-0.5 mr-2.5 text-sm border border-gray-700 rounded">
                          Not yet published
                        </p>
                        <p className="px-1 py-0.5 mr-2.5 text-sm border border-gray-700 rounded">
                          Full-time
                        </p>
                        <p className="px-1 py-0.5 mr-2.5 text-sm border border-gray-700 rounded">
                          we pay in crpto
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col p-1 px-5 w-3/12">
                      <div className="flex flex-row justify-between my-1">
                        <div className="flex flex-row">
                          <AiOutlineInbox className="w-5 h-5 mt-0.5 mx-2" />
                          <h1 className="text-base">Inbox</h1>
                        </div>
                        <label className="text-base">0</label>
                      </div>

                      <div className="flex flex-row justify-between my-1">
                        <div className="flex flex-row">
                          <IoPersonOutline className="w-5 h-5 mt-0.5 mx-2" />
                          <h1 className="text-base">Total Candedates</h1>
                        </div>
                        <label className="text-base">0</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;

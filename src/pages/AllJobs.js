import React, { useState } from "react";
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
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../components/layout/modal/Modal";
import "./AllJobs.css";
import Input from "../components/layout/Input";
const AllJobs = () => {
  const [showModal, setShowModal] = useState(false);
  // const jobs = useSelector((state) => state.firestore.ordered.jobs);

  // useFirestoreConnect({
  //   collection: `alljobs`,
  //   storeAs: "jobs",
  // });
  // if (!jobs) {
  //   return <Loading />;
  // }
  const [job, setjob] = useState({
    company: "",
    linkedIn: "",
    gitHub: "",

    twitter: "",
  });
  const onInputChange = (e) => {
    setjob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 cursor-default">
        <div className="w-full flex justify-start items-center my-10  ">
          <div className="w-full px-2 flex flex-col ">
            <div className="flex flex-row justify-between">
              <h1 className="text-xl font-bold my-2">Your assigned jobs</h1>

              <button
                onClick={() => setShowModal(true)}
                className="bg-gray-800 text-gray-200 hover:text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline"
              >
                Create new job
              </button>
              <Modal
                show={showModal}
                setShow={setShowModal}
                // hideCloseButton
              >
                <ModalHeader>
                  <h2>Create new job</h2>
                </ModalHeader>
                <ModalBody>
                  <p style={{ textAlign: "justify" }}>
                    Enter the name of the job position you're hiring for. Once
                    created, you'll be taken to its setup screen where you can
                    configure it.
                  </p>
                  <div className="flex flex-col m-1 mb-5 w-full">
                    <h1 className="my-2  text-sm">
                      Job title
                      <label className="ml-1 text-lg text-gray-600">*</label>
                    </h1>
                    <Input
                      placeholder="e.g Google"
                      name="company"
                      value={job.company}
                      onChange={onInputChange}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    className="bg-gray-600 text-gray-200 hover:text-white font-bold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </ModalFooter>
              </Modal>
            </div>

            <div className=" text-3xl font-semibold px-2 my-12">
              <div className="">
                <div className=" p-2">
                  <div
                    key={job.index}
                    className="h-24 bg-gray-200 rounded-lg flex flex-row p-1 w-full mb-8 hover:outline-none hover:outline-1	 hover:outline-black"
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
                          location
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

                  <div
                    key={job.index}
                    className="h-24 bg-gray-200 rounded-lg flex flex-row p-1 w-full mb-8 hover:outline-none hover:outline-1	 hover:outline-black"
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
                          location
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

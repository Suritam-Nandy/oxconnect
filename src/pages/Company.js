import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import {
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt,
  HiMail,
} from "react-icons/hi";
import Loading from "../components/layout/Loading";
const Company = () => {
  // const firebase = useFirebase();
  const firestore = useFirestore();

  const jobs = useSelector((state) => state.firestore.ordered.jobs);
  // const company = useSelector((state) => state.firestore.data.company);
  // const uid = firebase.auth().currentUser.uid;

  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useFirestoreConnect({
    collection: `users/${id}/jobs`,
    storeAs: "jobs",
  });
  // useFirestoreConnect({
  //   collection: `users/`,
  //   doc: `${uid}`,
  //   storeAs: "company",
  // });
  // console.log(company.displayName);
  useEffect(() => {
    loadCompany();
  }, [company]);
  const loadCompany = async () => {
    try {
      const docRef = firestore.collection("users").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setCompany(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  if (!company || !jobs) {
    return <Loading />;
  }
  return (
    <>
      <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div className="h-56 bg-purple-700 flex items-center p-2 mb-2">
          <h1 className="text-5xl font-black tracking-wider text-white">
            {company.displayName}
          </h1>
        </div>
        <div className="mb-4 p-2">
          <h1 className="text-3xl font-bold tracking-wide text-warmGray-800">
            {company.displayName}
          </h1>
          <h1 className="text-2xl  text-black">some tagline</h1>
        </div>
        <div className=" flex flex-row justify-start mb-16 p-2 text-xl">
          <div className="mr-10 flex flex-row ">
            <HiOutlineLocationMarker className="w-6 h-6 stroke-purple-800" />
            <div>location</div>
          </div>
          <div className="mr-10 flex flex-row ">
            <HiOutlineGlobeAlt className="mt-0.5 w-6 h-6  stroke-purple-800" />
            <div>website</div>
          </div>
          <div className="mr-10 flex flex-row ">
            <HiMail className="mt-1 w-6 h-6  fill-purple-800" />
            <div>mail</div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex flex-row justify-start text-3xl font-medium mb-10 border-black border-solid border-b pb-4">
            <div className="mr-10">About</div>
            <div className="font-normal">Jobs</div>
          </div>
        </div>
        <div className=" text-3xl font-semibold px-2 mb-14">
          <div className="">
            <h1 className="mb-2 ">About</h1>
            <p className="text-lg font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div className=" text-3xl font-semibold px-2 mb-16">
          <div className="">
            <h1 className=" ">Jobs</h1>
            <div className="h-96 bg-blueGray-100 p-2">
              {jobs.map((job, index) => (
                <Link to={`/job/${job.id}`}>
                  <div
                    key={job.index}
                    className="h-24 bg-purple-600 rounded-lg flex flex-row p-1 w-full my-5"
                  >
                    <div className="image h-16 w-16 bg-pink-300 m-3 rounded-md"></div>
                    <div className="flex flex-col p-1 w-7/12">
                      <h1 className="font- font-semibold text-white ml-5">
                        {job.title}
                      </h1>
                      <div className="flex flex-row items-center justify-around w-full text-lg p-1 mt-1.5">
                        <p className="">location</p>
                        <p>5 vacancy</p>
                        <p>we pay in crpto</p>
                      </div>
                    </div>
                    <div className="ml-16 p-5 flex justify-end w-3/12">
                      <h1 className="font-bold text-white">1W</h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* <table className="min-w-full divide-y divide-gray-200 h-96 ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 "> */}
            {/* {jobs.map((job, index) => (
                    <tr key={job.index}>
                      <td className="px-6 py-4 whitespace-nowrap h-32">
                        <div className="flex items-center">
                          <div className="text-sm text-left font-medium text-gray-900">
                            {index + 1}
                          </div>
                        </div>
                      </td>
                      <Link to={`/job/${job.id}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {job.title}
                          </div>
                        </td>
                      </Link>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.description}
                      </td>
                    </tr>
                ))} */}
            {/* </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;

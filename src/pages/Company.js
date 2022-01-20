import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";

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
        <div className="h-56 bg-blueGray-500 flex items-center p-2 mb-2">
          <h1 className="text-5xl font-black tracking-wider text-white">
            {company.displayName}
          </h1>
        </div>
        <div className="mb-4 p-2">
          <h1 className="text-3xl font-bold tracking-wide text-blueGray-500">
            {company.displayName}
          </h1>
          <h1 className="text-2xl  text-black">some tagline</h1>
        </div>
        <div className=" flex flex-row justify-start mb-16 p-2 text-xl">
          <div className="mr-10">location</div>
          <div className="mr-10">website</div>
          <div>mail</div>
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
            <h1 className="mb-2 ">Jobs</h1>
            <table className="min-w-full divide-y divide-gray-200 h-96 ">
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
              <tbody className="bg-white divide-y divide-gray-200 ">
                {jobs.map((job, index) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import Loading from "../components/layout/Loading";
const Company = () => {
  const jobs = useSelector((state) => state.firestore.ordered.jobs);
  const { id } = useParams();
  useFirestoreConnect({
    collection: `users/${id}/jobs`,
    storeAs: "jobs",
  });
  if (!jobs) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h1 className="text-2xl"> Jobs </h1>
      </div>
      <div>
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
    </>
  );
};

export default Company;

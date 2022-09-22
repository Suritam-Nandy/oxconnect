import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Loading from "../components/layout/Loading";

const Dashboard = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const role = useSelector((state) => state.firebase.profile.role);

  if (!uid) {
    return <Loading />;
  }
  return (
    <>
      <div>role:{role}</div>

      {role === "User" && (
        <Link to="addjob">
          <div className="mt-6 py-2">
            <button
              className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {}}
            >
              Create a Job Post
            </button>
          </div>
        </Link>
      )}
      {role === "Applicant" && (
        <ul>
          <li>
            <Link to="alljobs">
              <div className="mt-6 py-2">
                <button
                  className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {}}
                >
                  View Applied Jobs
                </button>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`updateprofile/${uid}`}>
              <div className="mt-6 py-2">
                <button
                  className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {}}
                >
                  Update Profile
                </button>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Dashboard;

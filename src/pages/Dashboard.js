import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";

const Dashboard = () => {
  const firebase = useFirebase();

  const role = useSelector((state) => state.firebase.profile.role);
  const uid = firebase.auth().currentUser.uid;

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
        <>
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
        </>
      )}
    </>
  );
};

export default Dashboard;

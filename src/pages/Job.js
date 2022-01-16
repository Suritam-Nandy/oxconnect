import React, { useState, useEffect } from "react";

import { useFirestore } from "react-redux-firebase";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../components/layout/Loading";
const Job = () => {
  const firestore = useFirestore();
  let history = useHistory();

  const { id } = useParams();
  const { uid } = useSelector((state) => state.firebase.auth);

  const role = useSelector((state) => state.firebase.profile.role);

  const [job, setJob] = useState(null);
  useEffect(() => {
    loadSpace();
  }, [job]);
  const loadSpace = async () => {
    try {
      const docRef = firestore.collection("alljobs").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setJob(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  if (job == null) {
    return <Loading />;
  }
  const apply = () => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("jobs")

      .add({
        ...job,

        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    history.replace("/dashboard");
  };

  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900 my-1">
        Title: {job.title}
      </h1>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900 my-1">
        Description: {job.description}
      </h1>
      {role === "User" && (
        <Link to={`/addjob/${id}`} className="btn btn-primary btn-profile">
          Edit
        </Link>
      )}
      {role === "Applicant" && (
        <button
          className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            apply();
          }}
        >
          Apply
        </button>
      )}
    </>
  );
};

export default Job;

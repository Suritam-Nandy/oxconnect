import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore, useFirebase } from "react-redux-firebase";

import Input from "../components/layout/Input";
const AddJob = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();
  let history = useHistory();
  const { id } = useParams();
  const uid = firebase.auth().currentUser.uid;
  const docRef = id
    ? firestore.collection("users").doc(uid).collection("jobs").doc(id)
    : null;
  const [job, setJob] = useState({
    title: "",
    location: "",
    vacancy: "",
    payment: "",

    description: "",
  });

  // load job to edit
  useEffect(() => {
    if (id) {
      loadJob();
    }
  }, [id]);
  const loadJob = async () => {
    try {
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

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    console.log("submitform");
    e.preventDefault();
    if (id) {
      // update user
      try {
        await docRef
          .update({
            ...job,
            updatedAt: firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            firestore
              .collection("alljobs")
              .doc(docRef.id)
              .set({
                ...job,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          });

        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      firestore
        .collection("users")
        .doc(uid)
        .collection("jobs")

        .add({
          ...job,
          createdAt: firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          firestore
            .collection("alljobs")
            .doc(docRef.id)
            .set({
              ...job,
              createdAt: firestore.FieldValue.serverTimestamp(),
            });
        });
    }
    console.log("job added");
    history.push("/dashboard");
  };
  return (
    <>
      <div>
        <h1 className="text-2xl"> Job Listing</h1>
      </div>
      <form onSubmit={submitForm}>
        <div className="flex flex-col m-1 w-full">
          <h1>Title</h1>
          <Input
            placeholder="Enter Title"
            name="title"
            value={job.title}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 w-full">
          <h1>Location</h1>
          <Input
            placeholder="Enter Location"
            name="location"
            value={job.location}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 w-full">
          <h1>Number of Vacancies</h1>
          <Input
            placeholder="Enter Vacancy"
            name="vacancy"
            value={job.vacancy}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col m-1 w-full">
          <h1>Payment mode</h1>
          <Input
            placeholder="Enter Payment"
            name="payment"
            value={job.payment}
            onChange={onInputChange}
          />
        </div>

        <div className="flex flex-col m-1 w-full">
          <h1>Description</h1>
          <Input
            placeholder="Enter Description"
            name="description"
            value={job.description}
            onChange={onInputChange}
          />
        </div>
        <div className="mt-6 py-2">
          <button
            type="submit"
            className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? "Update Job" : "Add Job"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddJob;

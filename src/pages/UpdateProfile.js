import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  useFirebase,
  useFirestore,
} from "react-redux-firebase";

import Loading from "../components/layout/Loading";
import Input from "../components/layout/Input";

const UpdateProfile = () => {
  const firebase = useFirebase();
  const firestore = useFirestore();
  const { id } = useParams();
  let history = useHistory();

  const uid = useSelector((state) => state.firebase.profile.uid);
  const docRef = id ? firestore.collection("users").doc(id) : null;
  // console.log(uid);
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    bio: "",
  });
  //  profile to edit
  useEffect(() => {
    loadProfile();
  }, [uid]);
  const loadProfile = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setProfile(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  if (!profile) {
    return <Loading />;
  }

  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    console.log("submitform");
    e.preventDefault();
    if (id) {
      // update user
      try {
        await docRef.update({
          ...profile,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });

        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      firestore
        .collection("users")
        .doc(uid)

        .update({
          ...profile,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
    }
    console.log("job added");
    history.push("/dashboard");
  };

  return (
    <>
      <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div>
          <h1 className="text-2xl">Edit your profile</h1>
        </div>
        <div className="border border-warmBlue-600 p-4">
          <form onSubmit={submitForm}>
            <div className="flex flex-col m-1 w-full">
              <h1>Name</h1>
              <Input
                placeholder="Enter Name"
                name="displayName"
                value={profile.displayName}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 w-full">
              <h1>Email</h1>
              <Input
                placeholder="Enter Email"
                name="email"
                value={profile.email}
                onChange={onInputChange}
              />
            </div>
            <div className="flex flex-col m-1 w-full">
              <h1>Bio</h1>
              <Input
                placeholder="Enter Bio"
                name="bio"
                value={profile.bio}
                onChange={onInputChange}
              />
            </div>

            <div className="mt-6 py-2">
              <button
                type="submit"
                className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {"Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;

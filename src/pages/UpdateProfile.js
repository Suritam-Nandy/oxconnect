import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  useFirebase,
  useFirestore,
} from "react-redux-firebase";

import Loading from "../components/layout/Loading";

const UpdateProfile = () => {
  const firebase = useFirebase();
  const firestore = useFirestore();

  const [profile, setProfile] = useState(null);
  const uid = firebase.auth().currentUser.uid;

  const user = useSelector((state) => state.firestore.data.user);
  useFirestoreConnect({
    collection: `users/`,
    doc: `${uid}`,
    storeAs: "user",
  });
  // load profile to edit
  useEffect(() => {
    loadProfile();
  }, [profile]);
  const loadProfile = async () => {
    try {
      const docRef = firestore.collection("users").doc(uid);
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
  if (user) {
    // var role = user.role;
    var name = firebase.auth().currentUser.displayName
      ? firebase.auth().currentUser.displayName
      : user.displayName;
  }
  console.log(profile);
  return (
    <>
      <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div>
          <h1 className="text-2xl">Edit your profile</h1>
        </div>
        <div className="border border-warmBlue-600 p-4">
          <h1 className="text-2xl">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;

import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  useFirebase,
  useFirestore,
} from "react-redux-firebase";

import ProfileAbout from "../components/ProfileAbout";
import SocialProfile from "../components/SocialProfile";
import ProfileWorkExp from "../components/ProfileWorkExp";
import ProfileEducation from "../components/ProfileEducation";
import ProfileSkills from "../components/ProfileSkills";
import ProfileAchievements from "../components/ProfileAchievements";

import ProfileIdentity from "../components/ProfileIdentity";

import Input from "../components/layout/Input";

const UpdateProfile = () => {
  // const firebase = useFirebase();
  // const firestore = useFirestore();
  // const { id } = useParams();
  // let history = useHistory();

  // const uid = useSelector((state) => state.firebase.profile.uid);
  // const docRef = id ? firestore.collection("users").doc(id) : null;
  // // console.log(uid);
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });
  // //  profile to edit
  // useEffect(() => {
  //   loadProfile();
  // }, [uid]);
  // const loadProfile = async () => {
  //   try {
  //     const result = await docRef.get();
  //     if (result.exists) {
  //       setProfile(result.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };
  // if (!profile) {
  //   return <Loading />;
  // }

  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  // const submitForm = async (e) => {
  //   console.log("submitform");
  //   e.preventDefault();
  //   if (id) {
  //     // update user
  //     try {
  //       await docRef.update({
  //         ...profile,
  //         updatedAt: firestore.FieldValue.serverTimestamp(),
  //       });

  //       console.log("Document successfully updated!");
  //     } catch (error) {
  //       console.error("Error updating document: ", error);
  //     }
  //   } else {
  //     firestore
  //       .collection("users")
  //       .doc(uid)

  //       .update({
  //         ...profile,
  //         createdAt: firestore.FieldValue.serverTimestamp(),
  //       });
  //   }
  //   console.log("job added");
  //   history.push("/dashboard");
  // };

  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto lg:px-2 mb-2 ">
        <div className="w-full flex justify-start items-center my-10  ">
          <div className="w-full px-2 flex flex-col ">
            <h1 className="text-4xl my-6">Edit your profile</h1>
            <div className="my-8 flex flex-row justify-start items-center border-b border-gray-200">
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1 className="">Profile</h1>
              </div>
              <div className=" px-3 py-2 mx-4 text-xl text-gray-600 font-medium hover:text-black w-20">
                <h1>Resume</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2  w-full h-full border border-gray-300 rounded-md ">
          <ProfileAbout />
          <SocialProfile />
          <ProfileWorkExp />
          <ProfileEducation />
          <ProfileSkills />
          <ProfileAchievements />
          <ProfileIdentity />
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;

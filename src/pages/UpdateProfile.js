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
        <div
          id="about"
          className=" p-2  w-full h-full border border-gray-300 rounded-md"
        >
          <div className="flex flex-row justify-between  items-start">
            <div className="w-4/12 items-start p-2 pr-28">
              <h1 className="text-black font-medium">About</h1>
              <div>
                <p className="text-gray-600">
                  Tell us about yourself so startups know who you are.
                </p>
              </div>
            </div>
            <div className="w-8/12 items-start p-2">
              <h1 className="text-3xl tracking-tighter mb-4">Suritam Nandy</h1>
              <div>
                <div className=" flex flex-row items-center justify-start">
                  <img className="w-16 h-16" src="Images/1 (1).png"></img>
                  <button className="mx-4 border border-gray-600 py-2 px-3 rounded-md text-gray-600 font-medium text-sm hover:text-gray-900">
                    Upload new photo
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col m-1 w-full">
                  <h1 className="my-2  text-base">
                    Where are you based?
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Enter Name"
                    name="displayName"
                    value={profile.displayName}
                    onChange={onInputChange}
                  />
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className="flex flex-col m-1 w-60">
                    <h1 className="my-2 text-base">
                      Select your primary role
                      <label className="ml-1 text-lg text-gray-600">*</label>
                    </h1>
                    <Input
                      placeholder="Enter Name"
                      name="displayName"
                      value={profile.displayName}
                      onChange={onInputChange}
                    />
                  </div>

                  <div className=" flex flex-col m-1 w-56">
                    {/* <div className="w-40"> */}
                    <h1 className="my-2 text-base ">
                      Years of experience
                      <label className="ml-1 text-lg text-gray-600">*</label>
                    </h1>
                    <input
                      type="text"
                      list="exp-years"
                      className="form-control w-16 md:w-40 xl:w-32 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // placeholder={placeholder}
                      // name={name}
                      // value={value}
                      // onChange={onChange}
                    />
                    <datalist id="exp-years" className="bg-white w-7">
                      <option className=""> less than 1 Year</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>2+ Years</option>
                    </datalist>
                    {/* </div> */}
                    {/* <Input
                      placeholder="Enter Name"
                      name="displayName"
                      value={profile.displayName}
                      onChange={onInputChange}
                    /> */}
                  </div>
                </div>
                <div className="flex flex-col m-1 w-full">
                  <h1 className="my-2  text-base">
                    Open to the following roles
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <Input
                    placeholder="Enter Name"
                    name="displayName"
                    value={profile.displayName}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 w-full">
                  <h1 className="my-2  text-base">
                    Your bio
                    <label className="ml-1 text-lg text-gray-600">*</label>
                  </h1>
                  <textarea
                    placeholder="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
                    name="bio"
                    value={profile.bio}
                    onChange={onInputChange}
                    rows="6"
                    className="mr-20 w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-4">
          <form onSubmit>
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

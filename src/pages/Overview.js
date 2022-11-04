import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
const Overview = () => {
  // const firestore = useFirestore();
  // const { id } = useParams();
  // const uid = useSelector((state) => state.firebase.auth.uid);

  // const docRef = id ? firestore.collection("users").doc(uid) : null;
  // const [applicantProfile, setApplicantProfile] = useState({
  //   wrk: [],

  //   edu: [],
  // });

  // // load job to edit
  // useEffect(() => {
  //   if (id) {
  //     loadJob();
  //   }
  // }, [id]);
  // const loadJob = async () => {
  //   try {
  //     const result = await docRef.get();
  //     if (result.exists) {
  //       setApplicantProfile(result.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };
  const wrk = useSelector(
    (state) => state.firebase.profile.applicantProfile.wrk
  );
  // useFirestoreConnect({
  //   collection: `users`,
  //   where: ["role", "==", "User"],
  //   storeAs: "companies",
  // });
  // if (!companies) {
  //   return <Loading />;
  // }
  console.log(wrk);
  return (
    <div id="overview" className=" ">
      <div className="flex flex-col md:flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className=" md:w-full items-start p-2 pr-2">
          <div className=" flex  flex-col md:flex-row-reverse justify-between w-full ">
            <div className="flex flex-row">
              <p className="text-xs px-3  leading-7 bg-blueGray-100 rounded-full h-min w-min">
                in
              </p>
              <p className="text-xs px-3  leading-7 bg-blueGray-100 rounded-full w-min h-min">
                website
              </p>
              <p className="text-xs px-3  leading-7 bg-blueGray-100 rounded-full w-min h-min">
                resume
              </p>
            </div>
            <div className="flex flex-row">
              <img
                src="/Images/ov.png "
                className="h-16 w-auto rounded-full"
                alt="ov"
              />
              <h1 className="text-3xl tracking-tighter my-1 ml-1">
                Suritam Nandy
              </h1>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600  my-1">Looking for</p>
            <div
            // className="px-12"
            >
              <p className="px-12">
                I am a Frontend Developer and a keen ML enthusiast. I like
                dabbling in various parts of frontend development and like to
                learn about new technologies, write technical articles or simply
                play games in my free hour. I am looking for internship where I
                can work from my home at flexible hours.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600  my-1">Experience</p>
            {wrk &&
              wrk.map((wk) => (
                <>
                  {" "}
                  <div className="flex flex-row m-1 my-3  p-3">
                    <img
                      src="/Images/nopic_startup.png"
                      className="w-16 h-16 border mr-4"
                    />
                    <div>
                      <h1 className="text-black font-medium">{wk.company} </h1>
                      <h1 className="text-gray-600 font-medium">
                        <a href="https://litestore.in/" target="_blank">
                          {wk.title}
                        </a>
                      </h1>
                      <p className="text-gray-400">Jul 2021 to Dec 2021</p>
                      <p className="text-gray-900 mt-1">{wk.description}</p>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div>
            <p className="text-sm text-gray-600  my-1">Education</p>
            <div
              className="flex flex-row m-1 my-3  p-1 mr-40
             "
            >
              <img
                src="/Images/nopic_college.png"
                className="w-16 h-16 border mr-4"
              />
              <div>
                <h1 className="text-black font-medium">
                  Srm Institute Of Science And Technology
                </h1>
                <h1 className="text-gray-600 font-medium">
                  Computer Science and Engineering, Bachelor's
                </h1>
                <p className="text-gray-400">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

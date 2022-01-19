import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
const Home = () => {
  const role = useSelector((state) => state.firebase.profile.role);
  const firebase = useFirebase();

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">0xconnect</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/alljobs">Jobs</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/signup",
              }}
              className="nav-link scrollto"
            >
              Sign Up
            </Link>
          </li>

          {role && (
            <ul>
              <li>
                <Link to="/dashboard">
                  <span className="text-sm  ml-2">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span
                    onClick={() => firebase.logout()}
                    className="text-sm  ml-2"
                  >
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </>
  );
};

export default Home;

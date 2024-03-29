import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <header className="fixed w-full top-0 z-50 bg-gray-50 border-b md:flex md:items-center md:justify-around  md:h-36 px-3 pb-0 shadow-lg  md:px-5">
        {/* <!-- Logo text or image --> */}
        <div className="flex items-center justify-between  md:mb-0">
          <div className="max-w-full h-auto flex justify-center items-center bg-gray-50">
            <Link smooth duration={1500} to="/hero">
              <h1 className="object-contain max-w-full text-gray-700 hover:text-black md:border-none md:p-0 text-3xl md:text-5xl md:font-bold my-1 w-auto cursor-pointer">
                0xconnect
              </h1>
            </Link>
          </div>
          <div className="md:hidden flex-row flex">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              onClick={() => setOpen(!open)}
            >
              <FiMenu size={16} className="text-gray-900" />
            </button>
          </div>
        </div>

        <nav>
          <ul
            className={`${
              open ? "block" : "hidden"
            } list-reset md:flex md:items-center md:justify-center `}
          >
            <li className="md:ml-10">
              <Link
                className="block no-underline hover:underline py-2 text-gray-700 hover:text-black md:border-none md:p-0 md:text-2xl md:font-base cursor-pointer"
                smooth
                duration={1500}
                to="/hero"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-10">
              <Link
                className="block no-underline hover:underline py-2 text-gray-700 hover:text-black md:border-none md:p-0 md:text-2xl md:font-base cursor-pointer"
                smooth
                duration={1500}
                to="/features"
              >
                Features
              </Link>
            </li>
            <li className="md:ml-10">
              <Link
                className="block no-underline hover:underline py-2 text-gray-700 hover:text-black md:border-none md:p-0 md:text-2xl md:font-base cursor-pointer"
                smooth
                duration={1500}
                to="/roadmap"
                exact
              >
                Roadmap
              </Link>
            </li>
            <li className="md:ml-10">
              <div className="block no-underline hover:underline py-2 text-gray-700 hover:text-black md:border-none md:p-0 md:text-2xl md:font-base cursor-pointer">
                <Link smooth duration={1500} to="team">
                  Team
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

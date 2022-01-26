import React from "react";
import { BiCaretDownCircle } from "react-icons/bi";
const Appplicant = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto lg:px-2 mb-2">
        <div className="mb-4 p-2">
          <h1 className="text-4xl font-bold tracking-wide text-warmGray-800">
            Suritam Nandy
          </h1>
        </div>
        <div className="mb-4 p-2 grid grid-cols-4 gap-1">
          <div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Role
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Email
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Employment
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>{" "}
              Location
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Skills
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>{" "}
              Source
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Stage
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Website
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Attachments
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Added
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              <h1 className="mr-2">
                <BiCaretDownCircle className="h-6 w-6" />
              </h1>
              Hirinng Manager
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-row p-1 hover:bg-warmGray-200">Role</div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">Email</div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              This is a very long sentence. 12334567890
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Location
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Skills
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Source
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">Stage</div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Website
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Attachments
            </div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">Added</div>
            <div className="flex flex-row p-1 hover:bg-warmGray-200">
              Hirinng Manager
            </div>
          </div>
        </div>
        <div className="mb-4 p-2 ">
          <h1 className="text-3xl font-semibold tracking-wide text-warmGray-800">
            Notes
          </h1>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Appplicant;

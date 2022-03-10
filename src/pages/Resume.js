import React, { useState } from "react";

const Resume = () => {
  const [files, setFiles] = useState([]);
  const getResume = (event) => {
    const newFile = event.target.files[0];
    newFile["id"] = Math.random();
    setFiles([newFile]);
  };
  return (
    <div id="resume" className=" ">
      <div className="flex flex-col md:flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-full md:w-4/12 items-start p-2 pr-28">
          <h1 className="text--gray-700 font-medium my-1">
            Upload your recent resume or CV
          </h1>
          <div>
            <p className="text-gray-600  my-1">
              Upload your most up-to-date resume
            </p>
          </div>
          <div>
            <p className="text-gray-600  my-1">File types: PDF, DOCX, PPTX</p>
          </div>
        </div>
        <div className="w-full md:w-8/12 items-start p-2">
          <div class="py-2 h-full px-2">
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
              <div class="md:flex">
                <div class="w-full">
                  <div class="mb-2">
                    <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                      <div class="absolute">
                        <div class="flex flex-col items-center ">
                          {files[0] ? (
                            <img
                              className="w-40 mr-2"
                              src={URL.createObjectURL(files[0])}
                            />
                          ) : (
                            <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                          )}
                          <span class="block text-gray-400 font-normal">
                            Attach you files here
                          </span>{" "}
                          <span class="block text-gray-400 font-normal">
                            or
                          </span>{" "}
                          <span class="block text-blue-400 font-normal">
                            Browse files
                          </span>{" "}
                        </div>
                      </div>{" "}
                      <input
                        type="file"
                        class="h-full w-full opacity-0"
                        name=""
                        onChange={(event) => {
                          getResume(event);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

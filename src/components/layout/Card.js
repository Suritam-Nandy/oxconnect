import React from "react";

const Card = () => {
  return (
    <div className="w-64 m-1 bg-pink-200">
      <div className="flex flex-row justify-start p-2">
        <div class="w-16 h-16 m-2">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
        </div>
        <div class="w-16 h-16 m-2">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-lg  text-warmGray-800 ">Name</h1>
        <h1 className="text-lg  text-warmGray-800 ">Location</h1>
      </div>
    </div>
  );
};

export default Card;

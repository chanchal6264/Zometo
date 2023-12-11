import React from "react";
import user from "../image/5231019.png";

function User() {
  return (
    <>
      <div className="flex">
        <div className="m-5">
          <img src={user} className="w-48" />
          <div className="text-center">
            <p className="text-green-300 text-2xl ">Basic Details</p>
            <p className="text-gray-500 text-lg cursor-pointer">Update</p>
            <p className="text-gray-500 text-lg cursor-pointer">Logout</p>
          </div>
        </div>
        <div className="m-5 w-[50%] py-8">
          <p className="text-green-500 font-bold text-4xl">Hello user</p>
          <p className="text-gray-500 text-xl">usergmail@.com</p>
          <div className=" m-5">
            <div className="space-x-4">
              <label className="font-bold text-lg">Name:</label>
              <span>User</span>
            </div>
            <div className="space-x-4">
              <label className="font-bold text-lg">Number:</label>
              <span>901234567</span>
            </div>
            <div className="space-x-4">
              <label className="font-bold text-lg">Gender</label>
              <span>Female</span>
            </div>
            <div className="space-x-4">
              <label className="font-bold text-lg">Address</label>
              <span>Near by people mall, Bhopal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

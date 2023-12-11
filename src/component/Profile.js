import React from "react";
import girl from "../image/5231019.png";

const Profile = () => {
  return (
    // <div className="content-center w-[80%]">
    //   <div className="p-3 border-2 w-[30%] h-[50%]">
    //     <img className="border-2 rounded-[50%] w-[20%] h-[10%]" src={girl} />
    //     <p className="font-semibold">Hi again, Chanchal</p>
    //     <p>Please Complete your profile</p>
    //   </div>
    //   <div className="flex">
    //     <div className="text-center border-2 p-3">
    //       <p className="font-semibold bg-slate-400 m-2">ODER INFORMATION</p>
    //       <p>Today Oder: 5</p>
    //       <p>Total Oder: 90</p>
    //     </div>
    //     <div className="border-2 p-3">
    //       <p className="bg-slate-400 font-semibold m-3">ORDER hISTORY</p>
    //       <p>ID</p>
    //       <p>Name</p>
    //       <p>Address</p>
    //       <p>Mob. no</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex p-4 max-w-3xl mx-auto m-8 border-4 rounded-2xl border-sky-500 ">
        <div className="grid items-center text-center justify-center border-2">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
        </div>
        <div className="border-2 w-full p-4">
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Kshiti Ghelani</p>
            <button className="bg-slate-300 p-2 rounded-xl font-semibold">
              Edit Profile
            </button>
          </div>
          <p className="text-xl  font-semibold text-sky-600">
            Kshiti@email.com
          </p>
          <div className="flex my-10 justify-around">
            <div className="text-xl">
              <p className="font-bold ">Name</p>
              <p className="font-bold ">Cat</p>
              <p className="font-bold ">Phone</p>
            </div>
            <div className="text-xl  text-sky-600">
              <p className="mx-20">Kshiti Ghelani</p>
              <p className="mx-20">Girl</p>
              <p className="mx-20">45698813322</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

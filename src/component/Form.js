import React from "react";

function Form() {
  return (
    <>
      <div className="bg-orange-50 flex place-content-center mx-auto py-16">
        <div>
          <img
            src={
              "https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            }
            className="rounded-3xl max-w-[250px]  mx-auto"
          />
        </div>
        <div>
          <p className="text-3xl  space-y-4">Get the Zomato app</p>
          <p className="text-xl text-gray-800">
            We will send you a link, open it on your phone to download the app
          </p>
          <div>
            <input className="w-5 h-4" type="radio" name="btn" />
            <label className="text-lg text-gray-800 m-3">Email</label>
            <input className="w-5 h-4" type="radio" name="btn" />
            <label className="text-lg text-gray-800 m-3">Phone</label>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="m-2 p-4 rounded-2xl border-2"
          />
          <button className="space-x-7 m-2 p-4 rounded-2xl text-white bg-red-500">
            Share
          </button>
          <p className=" text-gray-500 mt-5">Download app from</p>
          <button className="bg-slate-400 m-2 p-2 rounded-xl text-white">
            Google Play
          </button>
          <button className="bg-slate-400 m-2 p-2 rounded-xl text-white">
            App Store
          </button>
        </div>
      </div>

      {/*-----*/}

      <div className="text w-3/4 max-w-[66%] mx-auto my-16">
        <p className="text-4xl ">Explore options near me</p>
        <div>
          <p className="border-2 space-x-6 p-4 text-2xl text-slate-800 m-5 rounded-xl">
            Popular cuisines near me
          </p>
          <p className="border-2 space-x-6 p-4 text-2xl text-slate-800 m-5 rounded-xl">
            Popular restaurant types near me
          </p>
          <p className="border-2 space-x-6 p-4 text-2xl text-slate-800 m-5 rounded-xl">
            Top Restaurant Chains
          </p>
          <p className="border-2 space-x-6 p-4 text-2xl text-slate-800 m-5 rounded-xl">
            Cities We Deliver To
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;


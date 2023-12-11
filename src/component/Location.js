import React from "react";

function Location() {
  return (
    <div>
      <div className=" max-w-[66%] mx-auto my-16">
        <p className="text-5xl my-10">Popular localities in and around Surat</p>
        <div className="flex place-content-evenly  cursor-pointer">
          <div className="border-2 w-1/3 m-2 p-2  rounded-xl">
            <p className="m-1 text-2xl">Vesu</p>
            <p className="text-gray-600  m-1">415 places</p>
          </div>
          <div className="border-2 w-1/3 m-2 p-2 rounded-xl">
            <p className="m-1 text-2xl">Piplod</p>
            <p className="text-gray-600 m-1">161 places</p>
          </div>
          <div className="border-2 w-1/3 p-2 rounded-xl m-2">
            <p className="m-1 text-2xl">Adajan Gam</p>
            <p className="text-gray-600 m-1">306 places</p>
          </div>
        </div>



        <div className="flex place-content-evenly  cursor-pointer">
          <div className="border-2 w-1/3 m-2 p-2  rounded-xl">
            <p className="m-1 text-2xl">City Light</p>
            <p className="text-gray-600  m-1">104 places</p>
          </div>
          <div className="border-2 w-1/3 m-2 p-2 rounded-xl">
            <p className="m-1 text-2xl">Athwa</p>
            <p className="text-gray-600 m-1">122 places</p>
          </div>
          <div className="border-2 w-1/3 m-2 p-2 rounded-xl">
            <p className="m-1 text-2xl">Nanpura</p>
            <p className="text-gray-600 m-1">46 places</p>
          </div>
        </div>


        <div className="flex place-content-evenly  cursor-pointer">
          <div className="border-2 w-1/3 m-2 p-2  rounded-xl">
            <p className="m-1 text-2xl">Dumas</p>
            <p className="text-gray-600  m-1">26 places</p>
          </div>
          <div className="border-2 w-1/3 m-2 p-2 rounded-xl">
            <p className="m-1 text-2xl">Katargam</p>
            <p className="text-gray-600 m-1">201 places</p>
          </div>
          <div className="border-2 w-1/3 m-2 p-2 rounded-xl">
            <p className="m-1 text-2xl">See More</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Location;

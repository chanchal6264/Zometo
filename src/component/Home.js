import React from "react";
import food from "../image/food.jpg";
import girl from "../image/5231019.png";
import { useNavigate } from "react-router-dom";
import Location from "./Location";
import Form from "./Form";
import arr from "../Product/product";

function Home() {
  const navigate = useNavigate("");
  console.log(arr);
  return (
    <>
      <div className="border-2 bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)] text-white">
        <div className=" flex justify-around p-4 px-4 place-items-center">
          <div className=" font-mono text-xl">Get the App</div>

          <ul className="flex space-x-4">
            <li className="cursor-pointer font-extralight text-xl ">
              Investor Relations
            </li>
            <li className="cursor-pointer font-extralight text-xl">
              Add restaurant
            </li>
            <li>
              {<img className="rounded-full border-2 w-8 h-8" src={girl} />}
            </li>
            <li className="cursor-pointer bg-transparent border-color-red-500 font-extralight text-xl">
              <select className="bg-transparent border-none" name="" id="admin">
                <option className="text-black">My Profile</option>
                <option
                  className="text-black"
                  value="profile"
                  onClick={() => navigate("/user")}
                >
                  Payment
                </option>
                <option className="text-black" value="logout">
                  Logout
                </option>
              </select>
            </li>

            {/* <li
              className="cursor-pointer border-color-red-500 font-extralight text-xl"
              onClick={() => navigate("/login")}
            >
              Log in
            </li>
            <li
              className="cursor-pointer font-extralight text-xl"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </li> */}
          </ul>
        </div>
        <div className="text-center space-y-5 my-20">
          <p className="font-extrabold  text-9xl">Zomato</p>
          <p className="text-6xl">Discover the best food & drinks in Surat</p>
          <input
            type="text"
            className="w-1/4 text-black p-3 rounded-md text-lg"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>

      {/* -------- */}

      <div className="max-w-max mx-auto py-10 space-x-4 flex">
        <div className="border-2 rounded-xl max-w-max text-center p-5">
          <img
            src={
              "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            }
            className="rounded-3xl max-w-[250px] hover:bg-slate-400 mx-auto"
          />

          <button className="grid-rows-3  text-xl m-1">Order Online</button>
          <p className="grid text-gray-600">
            Stay home and order to your doorstep
          </p>
        </div>
        <div className="border-2 rounded-xl max-w-max text-center p-5">
          <img
            src={
              "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            }
            className="rounded-3xl max-w-[250px] hover:bg-slate-400 mx-auto"
          />

          <button className="grid-rows-3  text-xl m-1 ">Dining</button>
          <p className="grid text-gray-600">
            View the city's favourite dining venues
          </p>
        </div>
        <div className="border-2 rounded-xl max-w-max text-center p-5">
          <img
            src={
              "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              // "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            }
            className="rounded-3xl max-w-[250px] hover:bg-slate-400 mx-auto"
          />

          <button className="grid-rows-3  text-xl m-1">
            Nightlife and Clubs
          </button>
          <p className="grid text-gray-600">
            Explore the city's top nightlife outlets
          </p>
        </div>
      </div>

      <div className="max-w-[66%] mx-auto">
        <p className="text-4xl font-mono my-1">Collections</p>
        <div className="flex place-content-between">
          <p className="text-xl mb-5">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Surat, based on trends
          </p>
          <button className="text-red-500">All Collections in Surat</button>
        </div>
        <div className="flex  place-content-around cursor-pointer">
          <div
            onClick={() => navigate("/allfood", { state: "gujrati" })}
            className="content-end grid p-1 max-w-sm w-1/4 h-72 my-6 m-2 rounded-xl text-white bg-center bg-cover bg-[url(https://b.zmtcdn.com/data/collections/4531ccbcfd8b86011b48929470daee3e_1686316381.png?output-format=webp)]"
          >
            <p className="font-semibold text-lg">
              13 Unmissable Gujatati Deliver
            </p>
            <p className="font-semibold text-lg">13 places</p>
          </div>

          <div
            onClick={() => navigate("/allfood", { state: "Drinking" })}
            className="content-end  grid p-1 max-w-sm w-1/4 h-72 my-6 m-2  rounded-xl text-white bg-center bg-cover bg-[url(https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1687781175.jpg?output-format=webp)]"
          >
            <p className="font-semibold text-lg">11 Great Cafes</p>
            <p className="font-semibold text-lg">17 places</p>
          </div>

          <div
            onClick={() => navigate("/allfood", { state: "Breakfast" })}
            className="content-end  grid p-1 max-w-sm w-1/4 m-2 h-72 my-6  rounded-xl text-white bg-center bg-cover bg-[url(https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png?output-format=webp)]"
          >
            <p className="font-semibold text-lg">Breakfast Dises</p>
            <p className="font-semibold text-lg">8 places</p>
          </div>

          <div onClick={()=>navigate("/allfood", {state:"places"})}
           className="content-end grid p-1 max-w-sm w-1/4 m-2 h-72 my-6  rounded-xl text-white bg-center bg-cover bg-[url(https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1687783029.jpg?output-format=webp)]">
            <p className="font-semibold text-lg">7 Serene Rooftop Places</p>
            <p className="font-semibold text-lg">6 places</p>
          </div>
        </div>
      </div>
      <Location />
      <Form />
    </>
  );
}

export default Home;

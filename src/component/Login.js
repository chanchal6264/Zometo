import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" border-[1px] border-gray-50 bg-gray-100 shadow-2xl shadow-slate-400 my-24 rounded-md  mx-auto max-w-lg p-4">
        <p className="font-semibold text-4xl text-center  text-gray-800">
          Login
        </p>

        <div className="grid my-10 w-4/5 mx-auto space-y-5">
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="email"
            placeholder="Email"
          />
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-500  text-white rounded-md text-xl p-2">
            Login
          </button>
          <p className="text-center m-3 text-2xl">or</p>
          <button className="border-gray-400 bg-white border-[1px] p rounded-md p-3">
            Continue With Google
          </button>
          <p className=" text-xl text-gray-600 font-extralight">
            New to Zomato?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

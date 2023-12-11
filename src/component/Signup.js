import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmpassword] = useState();

  const register = (e) => {
    e.preventDefault();
    const data = { name, email, password, Phone, ConfirmPassword };
    console.log(data);
    axios
      .post("https://651d3aaa44e393af2d596b7e.mockapi.io/user", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className=" border-[1px] border-gray-50 bg-gray-100 shadow-2xl shadow-slate-400 my-24 rounded-md  mx-auto max-w-lg p-4">
        <p className="font-semibold text-4xl text-center  text-gray-800">
          Signup
        </p>

        <div className="grid my-10 w-4/5 mx-auto space-y-5">
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className=" border-gray-300 border-2 rounded-md p-3"
            type="password"
            placeholder="ConfirmPassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <button
            onClick={register}
            className="bg-red-500  text-white rounded-md text-xl p-2"
          >
            Signup
          </button>
          <p className="text-center m-3 text-2xl">or</p>
          <button className="border-gray-400 bg-white border-[1px] p rounded-md p-3">
            Continue With Google
          </button>
          <p className=" text-xl text-gray-600 font-extralight">
            Allready have Account?{" "}
            <spam className="text-red-500 cursor-pointer">Login</spam>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;

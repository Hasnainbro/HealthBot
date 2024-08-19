import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="h-full w-full  mt-44 ">
        <div className=" ml-16">
          <h1 className="text-center mt-16 text-3xl font-bold">Register</h1>
        </div>

        <div className="mt-14">
          <div className="flex flex-col items-center">
            <div className="w-60">
              <label className="font-medium text-lg mb-2">Username:</label>
              <input
                type="text"
                className="border border-zinc-500 py-2 rounded-sm w-80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-60">
              <label className="font-medium text-lg mb-2">Email:</label>
              <input
                type="text"
                className="border border-zinc-500 py-2 rounded-sm w-80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="w-60">
              <label className="font-medium text-lg mb-2">Password:</label>
              <input
                type="password"
                className="border border-zinc-500 py-2 rounded-sm w-80"
              />
              <div className=" flex justify-center ml-20 mt-1">
                {" "}
                <Link to={"/login"}>
                  <button className=" mt-5 text-lg bg-black text-white px-4 py-2 border-white rounded-md">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

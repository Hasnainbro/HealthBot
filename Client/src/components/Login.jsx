import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-full w-full mt-28">
      <div className="flex justify-end"></div>
      <div className=" ml-16">
        <h1 className="text-center mt-16 text-3xl font-bold">Welcome Back!</h1>
        <p className="text-center text-xl font-medium mt-3">
          Hope you are feeling better today.
        </p>
      </div>

      <div className="mt-14">
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
            <div className="flex justify-between items-center mt-5 w-80">
              <button className=" text-lg mt-5 bg-black text-white px-4 py-2 border-white rounded-md">
                Sign In
              </button>
              <p className="text-sm mt-4 font-medium">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

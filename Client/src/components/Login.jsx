import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const URL = "http://localhost:8000/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(URL, {
        email,
        password,
      });

      setEmail("");
      setPassword("");

      navigate("/home");
    } catch (error) {
      console.log("error occoured will log in", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <div className="w-60">
              <label className="font-medium text-lg mb-2">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border border-zinc-500 py-2 rounded-sm w-80 text-lg font-normal pl-3"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="w-60">
              <label className="font-medium text-lg mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border border-zinc-500 py-2 rounded-sm w-80 text-lg font-normal pl-3"
              />
              <div className="flex justify-between items-center mt-5 w-80">
                <button
                  type="submit"
                  className=" text-lg mt-5 bg-black text-white px-4 py-2 border-white rounded-md"
                >
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
        </form>
      </div>
    </div>
  );
};

export default Login;

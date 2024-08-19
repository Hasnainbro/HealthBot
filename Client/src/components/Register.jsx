import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const URL = "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(URL, {
        name,
        email,
        password,
      });
      alert("Registration Successfull!!");

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      console.log("error occoured will registring user", error);
    }
  };

  return (
    <div>
      <div className="h-full w-full  mt-44 ">
        <div className=" ml-16">
          <h1 className="text-center mt-16 text-3xl font-bold">Register</h1>
        </div>

        <div className="mt-14">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <div className="w-60">
                <label className="font-medium text-lg mb-2">Username:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="border border-zinc-500 py-2 rounded-sm w-80 text-lg font-normal pl-3"
                />
              </div>
            </div>
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
                <div className=" flex justify-center ml-20 mt-1">
                  <button
                    type="submit"
                    className=" mt-5 text-lg bg-black text-white px-4 py-2 border-white rounded-md"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

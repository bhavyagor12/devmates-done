import React, { useState } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [tempsearch, setTempSearch] = useState("");
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(tempsearch);
  };
  return (
    <div>
      <div className="flex justify-center font-sans text-4xl font-bold ">
        <span className="mr-2 text-white">Profile!!</span>
      </div>
      <div className="max-w-screen flex max-h-screen items-center justify-center overflow-hidden py-10  ">
        <div className="xl:w-2/7 easy-in-out container transform bg-white    shadow-lg  duration-200    sm:w-full   md:w-2/3 lg:w-2/6">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="-mt-12 flex justify-center  px-5">
            <img
              className="h-32 w-32 rounded-full bg-white p-1   "
              src={user.photoURL ? user.photoURL : user.displayName}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="px-14 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {user.displayName}
              </h2>
              <p className="mt-2 text-gray-400">@{user.displayName}</p>
              <p>{search}</p>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="w-1/2 cursor-pointer p-4 text-center hover:bg-gray-100">
                <p>
                  <span className="font-semibold">
                    {user.phoneNumber
                      ? user.phoneNumber
                      : "Pls use email to contact"}
                  </span>
                </p>
              </div>
              <div className="w-1/2 cursor-pointer p-4 text-center hover:bg-gray-100">
                <Link href="/chat">
                  <span className="font-semibold">{user.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-3xl">Enter description</p>
        <form
          className="mt-4 pl-7 pr-7 rounded-3xl box-borded w-72 h-9 justify-center flex items-center font-poppins bg-[#E3F4FE]
        "
          onSubmit={handleSubmit}
        >
          <input
            type="textbox"
            id="header-search"
            placeholder="enter description"
            name="city"
            value={tempsearch}
            onChange={(e) => setTempSearch(e.target.value)}
            className=" rounded-3xl  w-64 bg-[#E3F4FE] text-black placeholder-gray pl-2"
          />
          &nbsp;&nbsp;
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

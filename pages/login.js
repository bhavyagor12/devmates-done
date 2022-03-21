import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
import Link from "next/link";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const login = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Login" />
      <Particle />
      <Firework />
      <center className="grid">
        <div className="fixed flex w-full flex-1 flex-col items-center justify-center px-20 text-center min-h-full ">
          <div className="flex w-2/3 max-w-7xl rounded-2xl bg-white shadow-2xl">
            <div className="w-3/5 p-5 ">
              <div className="text-left text-2xl  font-bold">
                <span className="text-[#0082EF]">Dev</span>Mates
              </div>

              <div className="py-10 ">
                <h2 className="mb-2 text-3xl font-bold text-[#0082EF] ">
                  Sign into your account
                </h2>
                <div className="mb-2 inline-block w-10 border-2 border-[#0082EF]"></div>
                <div className="my-2 flex justify-center ">
                  <button className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#0082EF]">
                    <FaGoogle className="text-xl" />
                  </button>
                  <button className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#0082EF]">
                    <FaGithub className="text-xl " />
                  </button>
                  <button className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-[#0082EF]">
                    <FaTwitter className="text-xl" />
                  </button>
                </div>
                <p className="text-gray-500 mt-2">or use your email address</p>
              </div>
            </div>
            I
            <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-[#0082EF] py-36 px-12 text-white">
              <h2 className="mb-2 text-3xl font-bold "> Hello There!</h2>
              <div className="mb-2 inline-block w-10 border-2 border-white"></div>
              <p className="mb-10">
                {" "}
                You have to login to use our amazing features
              </p>
              <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                <Link href="/homePage">Explore</Link>
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default login;

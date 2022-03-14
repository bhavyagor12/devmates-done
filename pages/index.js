import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" min-h-screen bg-[#0082EF] dark:bg-[#032A5D]  text-center">
      <Title
        title="Devmates"
        name="welcome page"
        content="welcome to devmates"
      />
      <Firework />
      <Particle />
      <center>
        <div className="grid place-items-center justify-center  h-screen">
          <div className="flex flex-col align-center  fixed w-auto h-100 bg-[#0082EF] dark:bg-[#032A5D]  p-5 border-rounded box-border z-1 ">
            <div className="flex flex-col justify-center text-[#032A5D] dark:text-white  font-bold p-4">
              <div className="text-4xl p-1">
                <span className="text-black dark:text-[#0082EF]">Dev</span>Mates
              </div>
              <div className="text-2xl">
                <span className=" text-black dark:text-[#0082EF]">
                  Collabrative{" "}
                </span>
                Platform
              </div>
              <div className="text-lg text-black dark:text-white">
                (Work with other developers while having fun)
              </div>
            </div>
            <button class="font-semi rounded-full  bg-white dark:bg-[#18181b] py-2 px-4 text-xl text-[#0082EF] hover:bg-white  dark:hover:bg-white dark:hover:text-[#0082EF]">
              <Link href="/login">Get Started</Link>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

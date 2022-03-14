import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
export default function Home() {
  return (
    <div className=" min-h-screen bg-black text-center">
      <Title
        title="Devmates"
        name="welcome page"
        content="welcome to devmates"
      />
      <Firework />
      <Particle />
      <center>
        <div className="grid place-items-center h-screen">
          <div className="flex flex-direction-column text-white"></div>
        </div>
      </center>
    </div>
  );
}

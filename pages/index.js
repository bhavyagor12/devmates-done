import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";
export default function Home() {
  return (
    <div className=" min-h-screen bg-[#032A5D] text-center">
      <Title
        title="Devmates"
        name="welcome page"
        content="welcome to devmates"
      />
      <Firework />
      <Particle />
    </div>
  );
}

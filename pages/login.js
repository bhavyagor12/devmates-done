import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Particle from "../components/Particles";
import Firework from "../components/Firework";

const login = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Login" />
      <Particle />
      <Firework />
      <center></center>
    </div>
  );
};

export default login;

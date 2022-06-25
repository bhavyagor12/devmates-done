import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
const profile = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Profile" />
      <Navbar />
      <Profile />
    </div>
  );
};

export default profile;

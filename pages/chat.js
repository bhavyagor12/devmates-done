import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
const chat = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Chat" />
      <Navbar />
    </div>
  );
};

export default chat;

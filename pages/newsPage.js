import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
const newsPage = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="News Page" />
      <Navbar />
    </div>
  );
};

export default newsPage;

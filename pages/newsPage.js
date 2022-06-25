import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import NewsItem from "../components/NewsItem";
import { NewsContextProvider } from "../context/NewsContext";
import News from "../components/News";

const newsPage = () => {
  return (
    <NewsContextProvider>
      <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
        <Title title="News Page" />
        <Navbar />
        <News />
      </div>
    </NewsContextProvider>
  );
};

export default newsPage;

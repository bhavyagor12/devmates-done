import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsItem from "./NewsItem";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="min-h-screen flex-grow  flex-col  bg-[#032A5D]">
      <div className="flex-col flex items-center justify-center text-2xl text-white">
        <div className="mt-5 justify-center font-sans text-6xl font-bold">
          <span className="ml-2 text-[#0082EF]">Dev</span>eloper
          <span className="ml-2 text-[#0082EF]">News</span>
        </div>
        <p className="text-sm mt-2">Catch up quick on some reads</p>
      </div>
      <div className=" flex flex-col">
        {data
          ? data.results.map((news) => (
              <div className="flex flex-row justify-center  ">
                {" "}
                <NewsItem data={news} key={data.Link} />{" "}
              </div>
            ))
          : "no news"}
      </div>
    </div>
  );
}

export default News;

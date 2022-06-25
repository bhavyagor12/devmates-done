import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="min-h-screen w-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-[100vh] w-full top-0 left-0 z--1"
        >
          <source src={require("../public/videos/background.mp4")} />
        </video>
      </div>
    </div>
  );
};

export default Banner;

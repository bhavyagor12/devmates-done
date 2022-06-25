import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

const HomeCard2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center">
      <Card2
        title="Chat"
        desc="Adding features like grp chat and image/video sharing"
      />
      <Card2
        title="Projects"
        desc="Have a filter option to filter between projects and search option"
      />
      <Card2
        title="Profile"
        desc="Use different apis to pull more info about the same user"
      />
    </div>
  );
};

export default HomeCard2;

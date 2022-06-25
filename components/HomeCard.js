import React from "react";
import Card from "./Card";

const HomeCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center">
      <Card
        title="Chat"
        desc="Chat with other developers by using their gmail address and connect with them"
      />
      <Card
        title="Projects"
        desc="Share your personal projects that you are excited to work on"
      />
      <Card
        title="Profile"
        desc="Personalize your profile and show what you want others to know about you"
      />
    </div>
  );
};

export default HomeCard;

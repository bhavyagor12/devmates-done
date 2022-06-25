import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { Button } from "@material-ui/core";
const Project = ({
  name,
  description,
  techStack,
  image,
  people,
  github,
  linkedIn,
  gmail,
}) => {
  return (
    <div className="flex flex-col ">
      <div className="">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <p>{techStack}</p>
        <div className="w-[60vw]">
          <img src={image} alt="" />
        </div>

        <p>People :{people}</p>
        <div className="flex space-x-2 items-center">
          <a href={github}>
            <BsGithub />
          </a>
          <a href={linkedIn}>
            <BsLinkedin />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <p>{gmail}</p>
          <AiOutlineCopy />
        </div>
        <Button
          className="font-semi rounded-full  bg-white dark:bg-[#18181b] py-2 px-4 text-xl text-[#0082EF] hover:bg-[#032A5D] hover:text-white  dark:hover:bg-white dark:hover:text-[#0082EF]"
          onClick={() =>
            alert(
              `User has been sent a notification please wait for user to connect`
            )
          }
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Project;

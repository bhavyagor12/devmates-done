import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: "1",
      username: "Bhavya",
      description: "Building Developers social media ",
      techStack: "MERN",
      image:
        "https://imgs.search.brave.com/3GlJIrrxc03mpQxVjGkwXvIdPF4cD4V27noiPxpFhnA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/Z2FkZ2V0LXJ1bW91/cnMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzEyL01F/Uk4uanBn",
      people: 2,
      github: "https://github.com/bhavyagor12/CSI_Hackathon_Frontend",
      linkedIn: "https://www.linkedin.com/in/bhavya-gor/",
      gmail: "bhavya.gor9999@gmail.com",
    },
    {
      id: "2",
      username: "Bhavya",
      description: "Language translator",
      techStack: "Django",
      image:
        "https://imgs.search.brave.com/Q7RYP-HhqZy4ouZrcu7D81F1L6y4FJLR8EL3C_eX4zE/rs:fit:1200:418:1/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLTEubWVk/aXVtLmNvbS9tYXgv/MTIwMC8xKm5DOTRY/WlhjYktKUVZGMXZo/ajMwblEucG5n",
      people: 2,
      github: "https://github.com/bhavyagor12/CSI_Hackathon_Frontend",
      linkedIn: "https://www.linkedin.com/in/bhavya-gor/",
      gmail: "bhavya.gor9999@gmail.com",
    },
  ];
  return (
    <div className="bg-white border-2 ml-2">
      {projects.map((project) => (
        <div className="border-2 px-4 py-4 m-3">
          <Project
            id={project.id}
            username={project.username}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
            people={project.people}
            github={project.github}
            linkedIn={project.linkedIn}
            gmail={project.gmail}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;

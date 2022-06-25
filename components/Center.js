import React from "react";
import Projects from "./Projects";
import AddProject from "./addProject";
const center = () => {
  return (
    <main className="flex items-center justify-center ">
      <section className="col-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl">List of projects</h2>
        </div>
        <Projects />
      </section>
    </main>
  );
};

export default center;

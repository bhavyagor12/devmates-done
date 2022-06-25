import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Title from "../components/Title";
import Center from "../components/Center";
const projects = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Projects" />
      <Navbar />
      <Center />
    </div>
  );
};

export default projects;

import Navbar from "../components/Navbar";
import Title from "../components/Title";
const home = () => {
  return (
    <div className="min-h-screen bg-[#0082EF] dark:bg-[#032A5D]">
      <Title title="Home" />
      <Navbar />
    </div>
  );
};

export default home;

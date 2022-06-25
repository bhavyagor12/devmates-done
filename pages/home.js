import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Firework from "../components/Firework";
import Banner from "../components/Banner";
import BannerMobile from "../components/BannerMobile";
import HomeCard from "../components/HomeCard";
import Card2 from "../components/Card2";
import HomeCard2 from "../components/HomeCard2";
const home = () => {
  return (
    <div className="">
      <Title title="Home" />
      <nav>
        <Navbar />
      </nav>
      <div className="hidden md:block">
        <Banner />
        <div className="flex items-center justify-center text-3xl ml-2 my-6 ">
          {" "}
          <h1>Features available right now</h1>
        </div>

        <HomeCard />
        <div className="flex items-center justify-center text-3xl ml-2 my-2">
          {" "}
          <h1>Future Scope</h1>
        </div>
        <HomeCard2 />
      </div>
      <div className="block md:hidden">
        <BannerMobile />
        <div className="flex items-center justify-center text-3xl ml-2 my-2">
          {" "}
          <h1>Features available right now</h1>
        </div>

        <HomeCard />
        <div className="flex items-center justify-center text-3xl ml-2 my-2">
          {" "}
          <h1>Future Scope</h1>
        </div>
        <HomeCard2 />
      </div>
    </div>
  );
};

export default home;

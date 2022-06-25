import { Circle } from "better-react-spinkit";
import Image from "next/image";

const loading = () => {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        background: "#032a5d",
      }}
    >
      <div>
        <Image
          src={require("../../public/images/icon.png")}
          alt=""
          height={200}
          width={200}
          style={{ marginBottom: 20 }}
        />
        <Circle color="white" size={60} />
      </div>
    </center>
  );
};

export default loading;

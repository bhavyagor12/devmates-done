import Image from "next/image";
import React from "react";

const BannerMobile = () => {
  return (
    <div>
      <Image src={require("../public/images/bannerMobile.png")} alt="hi" />
    </div>
  );
};

export default BannerMobile;

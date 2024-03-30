import React from "react";
import bannerImg from "../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="h-screen flex  justify-center items-center xl:pt-11 max-w-[1240px] w-full mx-auto pt-4">
      <div className="max-w-[600px] w-full mx-auto">
        <p className="font-bold xl:text-7xl text-gray-600">
          Explore the Biggest Sale Offers
        </p>
        <p className="text-1xl font-semibold text-gray-600 max-w-[450px]">
          Find the right electronic device for yourself today only at{" "}
          <span className="text-red-500">Hamro Gadget.</span>
        </p>
      </div>
      <div className="max-w-[500px] w-full mx-auto">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

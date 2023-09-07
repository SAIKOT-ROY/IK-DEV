import Image from "next/image";
import React from "react";
import bannerImg from "../../../../img/web-development 1.png";
import ellipse from "../../../../img/Ellipse 180 edit.png";

const Banner = () => {
  return (
    <div className="">
      <div
        style={{ color: "rgba(255, 255, 255, 1)" }}
        className="flex flex-col md:flex-row md:items-center md:justify-center gap-20 mb-36"
      >
        <div className="flex flex-col gap-6 md:gap-12 md:text-left mx-auto justify-center md:w-[700px] text-center">
          <div className="md:w-[531px]">
            <div className="md:text-5xl text-4xl text-[#1A202C]">
              <p className="md:mb-7 mb-2">
                <span>Great</span> <span className="text-gradient font-bold">Product</span> <span>is</span>
            </p>
              <p>
                <span className="font-bold">built by great</span> <span className="text-gradient font-bold">teams</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[#4A5568] md:text-lg w-4/5 md:w-full mx-auto">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </h2>
          </div>
          <div>
            <button className="bg-[#3D63EA] p-4 md:px-8 md:py-4 rounded-lg text-white">
              Let’s get started!
            </button>
          </div>
        </div>
        <div className="w-[400px] md:w-[614px] mx-auto">
          <Image src={bannerImg} alt="BannerImg" />
        </div>
      </div>
      <div className="pl-[170px] md:pl-[600px]">
        <Image src={ellipse} alt="Ellipse" />
      </div>
    </div>
  );
};

export default Banner;

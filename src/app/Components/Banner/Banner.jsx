import Image from "next/image";
import React from "react";
import bannerImg from "../../../../img/web-development 1.png";
import ellipse from "../../../../img/Ellipse 180 edit.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{ color: "rgba(255, 255, 255, 1)" }}
        className="flex flex-col md:flex-row items-center justify-center gap-20 mb-36"
      >
        <div className="flex flex-col gap-12 md:text-left justify-center md:w-[700px] text-center">
          <div className="md:w-[531px]">
            <div className="md:text-5xl text-[#1A202C]">
              <p className="mb-7">
                <span>Great</span> <span className="text-gradient font-bold">Product</span> <span>is</span>
            </p>
              <p>
                <span className="font-bold">built by great</span> <span className="text-gradient font-bold">teams</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[#4A5568] md:text-lg md:w-full mx-auto w-1/3">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </h2>
          </div>
          <div>
            <button className="bg-[#3D63EA] md:px-8 md:py-4 rounded-lg text-white">
              Let’s get started!
            </button>
          </div>
        </div>
        <div className="w-[300px] md:w-[614px]">
          <Image src={bannerImg} alt="BannerImg" />
        </div>
      </div>
      <div className="md:ml-[500px] ml-[120px] md:w-full">
        <Image src={ellipse} alt="Ellipse" />
      </div>
    </div>
  );
};

export default Banner;

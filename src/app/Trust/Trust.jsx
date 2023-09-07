import Image from "next/image";
import React from "react";
import paraArrow from "../../../img/arrow-right-line.png";
import trustImg from "../../../img/Rectangle 9.png";
import playBtn from "../../../img/play-circle-fill (1).png";
import moon from "../../../img/Ellipse 181.png";
import moon1 from "../../../img/Ellipse 180 edit.png";
import deco from "../../../img/Deco-line.png";
import left from "../../../img/Btn-left.png";
import right from "../../../img/eva_arrow-back-fill.png";

const Trust = () => {
  return (
    <div className="md:w-full mx-auto border">
        <div className="md:ml-20 pb-24">
            <Image src={moon} alt="halfmoon" />
        </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center px-32 pb-16 md:pb-32">
        <div className="md:w-[540px] md:h-[320px] w-96 flex flex-col gap-9">
         <Image src={deco} alt="deco" />
          <h2 className="text-3xl flex flex-col gap-4">
            Leading companies trust us <span className="font-bold">to develop software</span>
          </h2>
          <p className="text-[#718096]">
            We <span className="text-[#cf4f55] leading-[2]">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-[#57007B] font-bold">See more Informations</p>
            <Image width={24} height={24} src={paraArrow} alt="paraArrow" />
          </div>
        </div>
        <div>
          <div className="relative">
            <Image width={600} height={460} src={trustImg} alt="trust" />
            <div className="absolute md:top-2 inset-0 flex items-center rounded-full justify-center">
              <Image width={58} height={58} src={playBtn} alt="play" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-32 ml-12">
        <Image className="mb-4" src={deco} alt="dco" />
        <p className="text-3xl mb-4">Meet the people</p>
        <p className="text-3xl font-bold">We are Working With</p>
      </div>
      <div className="flex gap-3 md:gap-6 justify-end pr-6 md:mr-32">
        <Image className="w-8 h-8 md:w-[45px] md:h-[45px]" src={left} alt="leftBtn" />
        <div>
        <Image className="bg-[#57007B] w-8 h-8 md:w-[45px] md:h-[45px] p-3 rounded-full" src={right} alt="rightBtn" />
        </div>
      </div>
      <div className="ml-64 md:ml-[1111px]">
      <Image src={moon1} alt="halfmoon" />
      </div>
    </div>
  );
};

export default Trust;

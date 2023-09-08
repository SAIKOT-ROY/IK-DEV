import CommonTitle from "@/app/CommonTitle/CommonTitle";
import Image from "next/image";
import React from "react";
import backend from "../../../../img/Backend.png";
import recta from "../../../../img/Rectangle 28.png";
import node from "../../../../img/NodeJS.png";
import php from "../../../../img/PHP.png";
import sql from "../../../../img/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png";
import java from "../../../../img/Java.png";
import netCore from "../../../../img/NETCore.png";
import python from "../../../../img/Python.png";
import rails from "../../../../img/RubyOnRails.png";
import golang from "../../../../img/Go.png";
import mongo from "../../../../img/mon 1.png";

const TechStark = () => {
  return (
    <div className="py-20 border border-[#E7DAED]">
      <CommonTitle heading="Our" subHeading="Tech Stack" />
      <div className="flex justify-center items-center gap-4 pb-16">
        <div className="flex flex-col justify-center items-center mt-2 gap-1">
          <Image className="md:w-[76px] w-12  md:h-[16px]" src={backend} alt="backend" />
          <Image src={recta} alt="rectangle" />
        </div>
        <h1 className="text-xs md:text-xl">Frontend</h1>
        <h1 className="text-xs md:text-xl">Database</h1>
        <h1 className="text-xs md:text-xl">CMS</h1>
        <h1 className="text-xs md:text-xl">CloudTesting</h1>
        <h1 className="text-xs md:text-xl">DevOps</h1>
      </div>
      <div className="flex justify-center items-center gap-8 md:gap-16 mb-16">
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={node} alt="default" />
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={php} alt="default" />
        <Image className="md:w-[160px] w-16 md:h-[90px]" src={sql} alt="default" />
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={java} alt="default" />
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={netCore} alt="default" />
      </div>
      <div className="flex justify-center items-center gap-8 md:gap-16">
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={python} alt="default" />
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={rails} alt="default" />
        <Image className="md:w-[166px] w-16 md:h-[94px]" src={golang} alt="default" />
        <Image className="md:w-[201px] w-16 md:h-[54px]" src={mongo} alt="default" />
      </div>
    </div>
  );
};

export default TechStark;

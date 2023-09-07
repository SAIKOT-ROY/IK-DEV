import Image from "next/image";
import React from "react";
import deco from "../../../img/Deco-line.png";

const CommonTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-20">
      <div className="flex justify-center mb-6 items-center">
        <Image src={deco} alt="deco" />
      </div>

      <div className="text-2xl md:text-3xl flex flex-col gap-3 text-[#1A202C] justify-center items-center">
        <p>{heading}</p>
        <p className="font-bold">{subHeading}</p>
      </div>
    </div>
  );
};

export default CommonTitle;

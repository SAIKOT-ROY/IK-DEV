import React from "react";
import btn from "../../../../img/Nav-button.png";
import sideArrows from "../../../../img/Group 40.png";
import Image from "next/image";

const Hire = () => {
  return (
    <div className="py-28">
      <div
        style={{
          background:
            "var(--gradient-secondery-bg, linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%))",
        }}
        className="md:w-[1230px] mx-auto rounded-3xl h-[250px] md:h-[285px] bg-gradient-secondery-bg"
      >
        <div className="flex justify-between items-center mx-10 md:mx-20 pt-20 md:pt-28">
          <p className="md:text-4xl text-xl font-bold">
            Hire the best developers and <br /> designers around!
          </p>
          <div className="relative">
            <Image src={btn} alt="btn" />
            <div className="absolute -top-20 md:-top-16 right-7 md:left-14">
              <Image src={sideArrows} alt="sidearrows" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;

import React from "react";
import CommonTitle from "../CommonTitle/CommonTitle";
import Image from "next/image";
import comma1 from "../../../img/fluent_comma-24-regular (1).png";
import comma2 from "../../../img/fluent_comma-24-regular.png";
import left from "../../../img/Btn-left.png";
import right from "../../../img/eva_arrow-back-fill (1).png";
import person1 from "../../../img/Rated-person.png";
import person2 from "../../../img/Rated-person (1).png";
import person3 from "../../../img/Rated-person (2).png";
import person4 from "../../../img/Rated-person (3).png";
import person5 from "../../../img/Rated-person (4).png";

const Review = () => {
  return (
    <div className="py-32 border">
      <CommonTitle heading="Why customers love" subHeading="working with us" />
      <div className="flex relative items-center justify-center gap-8 md:gap-40 mb-20">
        <Image src={comma2} alt="comma1" className="md:pb-20 pb-36" />
        <p className="text-[#718096] w-72 md:w-[501px] md:text-center">
          Without any doubt I recommend Alcaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
        <Image src={comma1} alt="comma2" className="md:pt-20 pt-36" />
        <div className="absolute top-20 md:top-20">
          <div className="flex items-center gap-96 md:gap-[1190px]">
            <Image src={left} alt="left" />
            <Image
              className="bg-[#FAFAFA] rounded-full border-[#57007B] border-2 p-2"
              width={45}
              height={45}
              src={right}
              alt="right"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 md:gap-20">
        <Image className="w-16 md:w-[121px] md:h-[162px]" src={person1} alt="person1" />
        <Image className="w-16 md:w-[138px] md:h-[172px]" src={person2} alt="person1" />
        <Image className="w-16 md:w-[160px] md:h-[197px]" src={person3} alt="person1" />
        <Image className="w-16 md:w-[138px] md:h-[171px]" src={person4} alt="person1" />
        <Image className="w-16 md:w-[121px] md:h-[162px]" src={person5} alt="person1" />
      </div>
    </div>
  );
};

export default Review;

import CommonTitle from "@/app/CommonTitle/CommonTitle";
import Image from "next/image";
import React from "react";
import smlLine from "../../../../img/Line 10.png";
import bigLine from "../../../../img/Line 5.png";
import trophy from "../../../../img/Trophy_perspective_matte.png";
import article from "../../../../img/Rectangle 33.png";
import article1 from "../../../../img/Rectangle 33 (1).png";
import article2 from "../../../../img/Rectangle 33 (2).png";
import article3 from "../../../../img/Rectangle 33 (3).png";
import article4 from "../../../../img/Rectangle 33 (4).png";
import article5 from "../../../../img/Rectangle 33 (5).png";

const Alcline = () => {
  return (
    <div className="py-20">
      <CommonTitle
        heading="How development"
        subHeading="through Alcaline works"
      />
      <div className="flex items-center md:ml-96 gap-5 md:gap-20">
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article} alt="article" />
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article1} alt="article1" />
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article2} alt="article2" />
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="flex justify-center items-center">
          <div>
            <div className="flex md:ml-44 items-center gap-40 ml-20 md:gap-96">
              <Image src={smlLine} alt="smlLIne" />
              <Image src={smlLine} alt="smlLIne" />
              <Image src={smlLine} alt="smlLIne" />
            </div>
            <Image src={bigLine} alt="bigLine" />
            <div className="flex md:gap-96 gap-44 ml-8 md:ml-60 items-center">
              <Image src={smlLine} alt="smlLIne" />
              <Image src={smlLine} alt="smlLIne" />
              <Image src={smlLine} alt="smlLIne" />
            </div>
          </div>
        </div>
        <div>
          <Image src={trophy} alt="trophy" />
        </div>
      </div>
      <div className="flex items-center md:ml-[440px] gap-5 md:gap-20">
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article3} alt="article3" />
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article4} alt="article4" />
            <Image className="md:w-[299px] w-[130px] md:h-[159px]" src={article5} alt="article5" />
      </div>
    </div>
  );
};

export default Alcline;

import CommonTitle from "@/app/CommonTitle/CommonTitle";
import React from "react";
import resources from "../../../../img/Rectangle 10.png";
import resources1 from "../../../../img/Rectangle 10 (1).png";
import resources2 from "../../../../img/Rectangle 10 (2).png";
import resources3 from "../../../../img/Rectangle 10 (3).png";
import resources4 from "../../../../img/Rectangle 10 (4).png";
import readMore from "../../../../img/See more Informations.png";
import rightArrow from "../../../../img/arrow-right-line (1).png";
import Image from "next/image";

const Resources = () => {
  return (
    <div>
      <CommonTitle heading="Featured" subHeading="Resources" />
      <div className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-5 justify-items-center">
        <div className="md:w-[254px] md:h-[315px]">
          <Image className="mb-5 md:w-[254px] mx-auto w-20 md:h-[175px]" src={resources} alt="reso" />
          <p className="font-semibold">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="flex gap-2 items-center justify-end">
            <Image className="md:w-[83px] w-10" src={readMore} alt="readmore" />
            <Image className="md:w-[24px] w-2 md:h-[24px]" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="md:w-[254px] md:h-[315px]">
          <Image className="mb-5 md:w-[254px] mx-auto w-20 md:h-[175px]" src={resources1} alt="reso" />
          <p className="font-semibold">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="flex gap-2 items-center justify-end">
            <Image className="md:w-[83px] w-10" src={readMore} alt="readmore" />
            <Image className="md:w-[24px] w-2 md:h-[24px]" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="md:w-[254px] md:h-[315px]">
          <Image className="mb-5 md:w-[254px] mx-auto w-20 md:h-[175px]" src={resources2} alt="reso" />
          <p className="font-semibold">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="flex gap-2 items-center justify-end">
            <Image className="md:w-[83px] w-10" src={readMore} alt="readmore" />
            <Image className="md:w-[24px] w-2 md:h-[24px]" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="md:w-[254px] md:h-[315px]">
          <Image className="mb-5 md:w-[254px] mx-auto w-20 md:h-[175px]" src={resources3} alt="reso" />
          <p className="font-semibold">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="flex gap-2 items-center justify-end">
            <Image className="md:w-[83px] w-10" src={readMore} alt="readmore" />
            <Image className="md:w-[24px] w-2 md:h-[24px]" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="md:w-[254px] md:h-[315px]">
          <Image className="mb-5 md:w-[254px] mx-auto w-20 md:h-[175px]" src={resources4} alt="reso" />
          <p className="font-semibold">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="flex gap-2 items-center justify-end">
            <Image className="md:w-[83px] w-10" src={readMore} alt="readmore" />
            <Image className="md:w-[24px] w-2 md:h-[24px]" src={rightArrow} alt="rightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

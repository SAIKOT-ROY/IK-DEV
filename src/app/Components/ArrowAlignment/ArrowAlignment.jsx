import React from "react";
import CaseStudies from "../CaseStudies/CaseStudies";
import Review from "@/app/Review/Review";
import arrow1 from "../../../../logo/arrow-right-s-line (1).png";
import arrow2 from "../../../../logo/arrow-right-s-line (2).png";
import vector from "../../../../logo/Vector 1.png";
import vector2 from "../../../../logo/Vector 1 (1).png";
import Image from "next/image";

const ArrowAlignment = () => {
  return (
    <div className="relative">
      <Review />
      <div>
        <div className="absolute top-[730px] right-10 md:top-[700px] md:right-52">
          <div className="flex flex-row-reverse items-end">
            <div>
              <Image
                className="pb-5 w-20 md:w-[155px] md:h-[259px]"
                src={vector}
                alt="vector"
              />
            </div>
            <div>
              <Image
                className="md:w-[44px] w-10 md:h-[44px]"
                src={arrow1}
                alt="arrow1"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-20 top-[720px] left-10 md:top-[700px] md:left-52">
          <Image className="w-[33px] h-[33px]" src={arrow2} alt="arrow2" />
          <Image
            className="md:w-[115px] md:h-[192px]"
            src={vector2}
            alt="vector2"
          />
        </div>
      </div>
      <CaseStudies />
    </div>
  );
};

export default ArrowAlignment;

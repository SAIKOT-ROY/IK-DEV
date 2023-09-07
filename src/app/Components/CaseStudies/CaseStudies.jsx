import CommonTitle from "@/app/CommonTitle/CommonTitle";
import Image from "next/image";
import React from "react";
import case1 from "../../../../img/Case-study__image.png";
import case2 from "../../../../img/Case-study__image (1).png";
import case3 from "../../../../img/Case-study__image (2).png";
import arrow from "../../../../img/arrow-right-s-line.png";
import ellipse from "../../../../img/Ellipse 184 (1).png";
import read from "../../../../img/Raed more.png";
import readMore from "../../../../img/Read more case studies.png";

const CaseStudies = () => {
  return (
    <div className="py-20 bg-[#F7F7FA] border border-[#E7DAED]">
      <div className="md:pl-[477px] ml-28">
        <Image src={ellipse} alt="ellipse" />
      </div>
      <CommonTitle heading="Our Recent" subHeading="Case studies" />
      <div className="flex flex-col gap-14 mb-8">
        <div className="md:w-[1232px] md:h-[416px] mx-auto w-full h-[500px] border border-[#E7DAED] bg-[#F1F2FF] flex flex-col md:flex-row rounded-3xl">
          <Image
            className="md:w-[601px] w-full md:h-[416px]"
            src={case1}
            alt="case1"
          />
          <div className="md:w-[529px] w-full md:h-[259px] md:mx-auto md:my-auto">
            <div className="text-center">
              <h1 className="md:text-3xl text-base mb-4 md:mb-7">
                Website Design for SCFC Canada
              </h1>
              <p className="text-[#4A5568] text-xs mb-6 md:mb-14">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex justify-end items-center">
                <Image width={73} height={16} src={read} alt="read" />
                <Image width={16} height={16} src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[1232px] md:h-[416px] mx-auto w-full h-[500px] border border-[#E7DAED] bg-[#F0FFF7] flex flex-col md:flex-row rounded-3xl">
          <Image
            className="md:w-[601px] w-full md:h-[416px]"
            src={case2}
            alt="case2"
          />
          <div className="md:w-[529px] w-full md:h-[259px] md:mx-auto md:my-auto">
            <div className="text-center">
              <h1 className="md:text-3xl text-base mb-4 md:mb-7">
                Website Design for SCFC Canada
              </h1>
              <p className="text-[#4A5568] text-xs mb-6 md:mb-14">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex justify-end items-center">
                <Image width={73} height={16} src={read} alt="read" />
                <Image width={16} height={16} src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[1232px] md:h-[416px] mx-auto w-full h-[500px] border border-[#E7DAED] bg-[#FFF4F4] flex flex-col md:flex-row rounded-3xl">
          <Image
            className="md:w-[601px] w-full md:h-[416px]"
            src={case3}
            alt="case3"
          />
          <div className="md:w-[529px] w-full md:h-[259px] border md:mx-auto md:my-auto">
            <div className="text-center">
              <h1 className="md:text-3xl text-base mb-4 md:mb-7">
                Website Design for SCFC Canada
              </h1>
              <p className="text-[#4A5568] text-xs mb-6 md:mb-14">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
              <div className="flex justify-end items-center">
                <Image width={73} height={16} src={read} alt="read" />
                <Image width={16} height={16} src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center md:w-[1232px] mx-auto">
        <Image src={readMore} width={231} height={27} alt="read"/>
        <Image src={arrow} width={27} height={27} alt="ar" />
      </div>
    </div>
  );
};

export default CaseStudies;

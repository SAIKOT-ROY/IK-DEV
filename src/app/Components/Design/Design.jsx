import CommonTitle from "@/app/CommonTitle/CommonTitle";
import React from "react";
import rocket from "../../../../img/Group 34.png";
import vsCode from "../../../../img/Group 34 (1).png";
import privacy from "../../../../img/Group 34 (2).png";
import lock from "../../../../img/Group 34 (3).png";
import heart from "../../../../img/Group 34 (5).png";
import correct from "../../../../img/Group 34 (6).png";
import Image from "next/image";

const Design = () => {
  return (
    <div className="bg-[#F7F7FA] py-20">
      <CommonTitle heading="Our Design and" subHeading="development approach" />
      <div className="grid md:grid-cols-2 justify-center items-center md:w-2/3 mx-auto gap-10">
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]">
          <div className="w-[140px] h-[100px]">
            <Image className="" src={rocket} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">UX Driven Engineering</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]">    
          <div className="w-[140px] h-[100px]">
            <Image className="" src={vsCode} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">Developing Shared Understanding</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a <span className="text-[#509CF5]">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]">
          <div className="w-[140px] h-[100px]">
            <Image className="" src={heart} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">Proven Experience and Expertise</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a <span className="text-[#FF3D9A]">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]"> 
          <div className="w-[140px] h-[100px]">
            <Image className="" src={privacy} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">Security & Intellectual Property (IP)</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a <span className="text-[#24E795]">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]">
          <div className="w-[140px] h-[100px]">
            <Image className="" src={correct} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">Code Reviews</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a <span className="text-[#cdbf41]">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="md:w-[604px] mx-auto py-6 w-5/6 gap-5 flex md:h-[230px] justify-center px-6 justify-items-center  items-center border border-[#E7DAED] bg-[#FAFAFA]">
          <div className="w-[140px] h-[100px]">
            <Image className="" src={lock} alt="rocket" />
          </div>
          <div className="">
            <h2 className="font-semibold text-xl pb-4">Quality Assurance & Testing</h2>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a <span className="text-[#57007B]">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;

import Image from "next/image";
import React from "react";
import code from "../../../../img/Code_perspective_matte.png";
import mobile from "../../../../img/Mobile_app_perspective_matte.png";
import dashboard from "../../../../img/Dashboard_perspective_matte.png";

const Services = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div>
        <h1 className="font-bold text-center mb-20 pt-11 text-4xl">Services we offer</h1>
      </div>
      {/* Card Part */}
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="w-[177px] hidden md:block rounded-lg [h-287px] bg-[#FAFAFA] pr-4 py-6 shadow-lg border text-left">
          <Image
            style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
            src={mobile}
            className="rounded-full mb-4 w-12 p-2"
            alt="code"
          />
          <h1 className="mb-4 web-size">opment</h1>
          <p>of yourself and we properly. your e marketing asset l age</p>
        </div>
        <div
          className="w-[335px] text-[#4A5568] rounded-lg [h-287px] bg-[#FAFAFA] px-4 py-6 shadow-lg border text-left"
        >
          <Image
            style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
            src={mobile}
            className="rounded-full mb-4 w-12 p-2"
            alt="code"
          />
          <h1 className="mb-4 web-size">Mobile App Development</h1>
          <p>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </p>
        </div>
        <div
          style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
          className="w-[335px] rounded-lg text-[#4A5568] mt-20 [h-287px] bg-[#FAFAFA] px-4 py-6 shadow-xl text-left"
        >
          <Image
            style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
            src={code}
            className="rounded-full mb-4 w-12 p-2"
            alt="code"
          />
          <h1 className="web-gradient mb-4 web-size">
            Web Design & Development
          </h1>
          <p>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </p>
        </div>
        <div
          className="w-[335px] text-[#4A5568] rounded-lg [h-287px] bg-[#FAFAFA] px-4 py-6 shadow-lg border text-left"
        >
          <Image
            style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
            src={dashboard}
            className="rounded-full mb-4 w-12 p-2"
            alt="code"
          />
          <h1 className="mb-4 web-size">Software Testing Service</h1>
          <p>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </p>
        </div>
        <div className="w-[177px] hidden md:block rounded-lg [h-287px] bg-[#FAFAFA] pl-4 py-6 shadow-lg border text-left">
          <Image
            style={{ border: "1px solid var(--gradient-primary-bg, #F76680)" }}
            src={mobile}
            className="rounded-full mb-4 w-12 p-2"
            alt="code"
          />
          <h1 className="mb-4 web-size">Software Tes</h1>
          <p>A website is an ext can help you to exp website is your num because we live in</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

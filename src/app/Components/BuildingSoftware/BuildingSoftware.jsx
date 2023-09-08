import CommonTitle from "@/app/CommonTitle/CommonTitle";
import Image from "next/image";
import React from "react";
import profile from "../../../../img/Ellipse 185 (5).png";
import profile1 from "../../../../img/Ellipse 185 (4).png";
import profile2 from "../../../../img/Ellipse 185 (3).png";
import lay2 from "../../../../img/Ellipse 186.png";
import layover from "../../../../img/Ellipse 177 (2).png";
import ban1 from "../../../../img/Rectangle 17.png";
import ban2 from "../../../../img/Rectangle 18.png";
import ban3 from "../../../../img/Rectangle 19.png";
import recta from "../../../../img/Rectangle 20.png";
import sim from "../../../../img/_Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules_.png";

const BuildingSoftware = () => {
  return (
    <div className="md:py-20 py-16 border border-[#E7DAED]">
      <CommonTitle heading="Way of building" subHeading="Great Software" />
      <div>
        <div className="flex flex-col mb-10 md:flex-row justify-center items-center gap-24">
          <div className="md:w-[534px] w-[400px]">
            <h1 className="text-3xl mb-4 font-bold">
              Build the right team to scale
            </h1>
            <p className="text-[#2D3748] mb-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="mb-6">
              Our <span>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="mb-8 flex gap-4">
              <Image src={recta} alt="recta" />
              <Image width={435} height={87} src={sim} alt="seemp" />
            </div>
            <div className="flex gap-4">
              <div>
                <Image src={profile} alt="profile" />
              </div>
              <div>
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="md:w-[575px] w-[400px] h-[483px]">
          <div className="relative">
              <div className="absolute right-[420px] -bottom-8 md:-top-5 md:-left-[580px]">
                <Image
                  className="flex ml-[555px]"
                  width={64}
                  height={64}
                  src={layover}
                  alt="layover"
                />
              </div>
              <div className="absolute -bottom-[340px] left-[70px] md:-bottom-[490px] md:left-[250px]">
                <Image src={lay2} alt="layover" />
              </div>
              <Image className="absolute" src={ban1} alt="ban1" style={{ zIndex: 1 }} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-24">
          <div className="md:w-[534px] w-[400px]">
            <h1 className="text-3xl mb-4 font-bold">
              Build the right team to scale
            </h1>
            <p className="text-[#2D3748] mb-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="mb-6">
              Our <span>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="mb-8 flex gap-4">
              <Image src={recta} alt="recta" />
              <Image width={435} height={87} src={sim} alt="seemp" />
            </div>
            <div className="flex gap-4">
              <div>
                <Image src={profile1} alt="profile" />
              </div>
              <div>
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="md:w-[575px] w-[400px] h-[483px]">
            <div className="relative">
              <div className="absolute right-5 -bottom-4 md:-top-3 md:left-0">
                <Image
                  className="flex ml-[555px]"
                  width={29}
                  height={29}
                  src={lay2}
                  alt="layover"
                />
              </div>
              <div className="absolute -bottom-[350px] left-[70px] md:-bottom-[505px] md:left-[90px]">
                <Image src={layover} alt="layover" />
              </div>
              <Image className="absolute" src={ban2} alt="ban1" style={{ zIndex: 1 }} />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-10 md:flex-row justify-center items-center gap-24">
          <div className="md:w-[534px] w-[400px]">
            <h1 className="text-3xl mb-4 font-bold">
              Build the right team to scale
            </h1>
            <p className="text-[#2D3748] mb-4">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="mb-6">
              Our <span>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="mb-8 flex gap-4">
              <Image src={recta} alt="recta" />
              <Image width={435} height={87} src={sim} alt="seemp" />
            </div>
            <div className="flex gap-4">
              <div>
                <Image src={profile2} alt="profile" />
              </div>
              <div>
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="md:w-[575px] w-[400px] h-[483px]">
          <div className="relative">
              <div className="absolute right-[420px] -bottom-8 md:-top-5 md:-left-[300px]">
                <Image
                  className="flex ml-[555px]"
                  width={40}
                  height={40}
                  src={lay2}
                  alt="layover"
                />
              </div>
              <div className="absolute -bottom-[340px] left-[70px] md:-bottom-[490px] md:-left-4">
                <Image width={50} height={50} src={layover} alt="layover" />
              </div>
              <Image className="absolute" src={ban3} alt="ban1" style={{ zIndex: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingSoftware;

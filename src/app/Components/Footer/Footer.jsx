import Image from "next/image";
import React from "react";
import logo from "../../../../img/Logo.png";
import google from "../../../../img/google-page-speed 1 (1).png";
import facebook from "../../../../logo/Ellipse 1 (2).png";
import instagram from "../../../../logo/Group 8.png";
import twitter from "../../../../logo/Group 7.png";
import linkedin from "../../../../logo/Group 6.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center md:gap-20 gap-5 py-20">
        <div className="flex pb-24 md:pb-0 flex-col gap-9">
          <Image src={logo} alt="logo" />
          <p className="text-[#718096] text-start">
            We are always try to be innovative and creative <br /> about work
          </p>
          <Image src={google} alt="google" />
        </div>
        <div className="text-[#4A5568]">
          <h1 className="font-bold mb-2">Links</h1>
          <div className="text-[#718096]">
            <h6>About Us</h6>
            <h6>Services</h6>
            <h6>Case Studies</h6>
            <h6>How it works</h6>
            <h6>Blog</h6>
            <h6>Careers</h6>
            <h6>Areas we Serve</h6>
          </div>
        </div>
        <div className="flex flex-col pb-40 md:pb-24">
          <h1 className="font-bold pb-3 text-[#4A5568]">Contact Us</h1>
          <div className="text-[#718096]">
            <h6>You can contact us using this Email</h6>
            <p>ikdev@gmail.com</p>
            <p>+923183561921</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col pt-28 items-end">
          <Image src={facebook} alt="facebook" />
          <Image src={instagram} alt="instagram" />
          <Image src={twitter} alt="twitter" />
          <Image src={linkedin} alt="linkedin" />
        </div>
      </div>
      <div className="flex py-8 text-[#4A5568] justify-center border items-center">
          <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;

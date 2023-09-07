"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../img/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const makeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div
      style={{ color: "rgba(255, 255, 255, 1)" }}
      className="relative flex flex-row-reverse md:flex-row justify-between items-center px-6 py-3 md:px-10 md:py-4 shadow-lg mb-20"
    >
      <div className="w-[120px] md:h-[50px] md:w-[190px] p-2">
        <Image src={logo} className="md:w-[170px]" alt="NavLogo" />
      </div>
      <div className="text-violet-500 md:hidden" onClick={makeVisible}>
        <RxHamburgerMenu />
      </div>
      {visible && (
        <div className="absolute font-bold bg-[#3D63EA] top-0 left-0 mt-16 ml-6 gap-12 z-10 md:hidden text-white py-3 px-4 rounded-lg">
          <h1>About Us</h1>
          <h1>Services</h1>
          <h1>Case Studies</h1>
          <h1>Blog</h1>
          <h1>How it works</h1>
          <h1>Hire</h1>
          <button
            className="py-1 px-2 text-white rounded-lg"
            style={{
              background: "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",
            }}
          >
            Contact us
          </button>
        </div>
      )}
      <div className="hidden md:block">
        <div className="flex items-center gap-12 text-[#4A5568]">
          <h1>About Us</h1>
          <h1>Services</h1>
          <h1>Case Studies</h1>
          <h1>Blog</h1>
          <h1>How it works</h1>
          <h1>Hire</h1>
        </div>
      </div>
      <div className="md:block hidden">
        <button
          className="py-3 px-5 text-white rounded-lg"
          style={{
            background: "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",
          }}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Navbar;

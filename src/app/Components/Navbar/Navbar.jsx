import Image from "next/image";
import React from "react";
import logo from "../../../../img/Logo.png";

const Navbar = () => {
  return (
    <div style={{color: "rgba(255, 255, 255, 1)"}} className="flex justify-between items-center px-10 py-4  shadow-lg">
      <div>
        <Image src={logo} width={190} height={50} alt="NavLogo" />
      </div>
      <div className="flex justify-between gap-12 text-[#4A5568]">
        <h1>About Us</h1>
        <h1>Services</h1>
        <h1>Case Studies</h1>
        <h1>Blog</h1>
        <h1>How it works</h1>
        <h1>Hire</h1>
      </div>
      <div>
      <button className='py-3 px-5 text-white rounded-lg' style={{ background: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)' }}>
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Navbar;

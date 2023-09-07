import Image from 'next/image';
import React from 'react';
import logo1 from "../../../../img/Logo-9.png"
import logo2 from "../../../../img/Logo-7.png"
import logo3 from "../../../../img/Logo-6.png"
import logo4 from "../../../../img/logo9.png"
import logo5 from "../../../../img/logo8.png"
import logo6 from "../../../../img/logo5.png"
import logo7 from "../../../../img/logo3.png"

const AdSection = () => {
    return (
        <div className='flex md:w-full justify-between items-center py-4 md:py-10 bg-[#F7F7FA] border-[#E7DAED] border'>
            <Image className='w-14 md:w-[170px] md:h-20' src={logo1} alt='logo1' />
            <Image className='w-14 md:w-[101px] md:h-20' src={logo5} alt='logo1' />
            <Image className='w-14 md:w-[215px] md:h-20' src={logo6} alt='logo1' />
            <Image className='w-14 md:w-[215px] md:h-20' src={logo2} alt='logo1' />
            <Image className='w-14 md:w-[215px] md:h-20' src={logo4} alt='logo1' />
            <Image className='w-14 md:w-[215px] md:h-20' src={logo3} alt='logo1' />
            <Image className='w-6 h-16 md:w-10 md:h-28' src={logo7} alt='logo1' />
        </div>
    );
};

export default AdSection;
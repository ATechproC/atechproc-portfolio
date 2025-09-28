import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return <div className="bg-dark-5 w-[100%] max-sm:flex-col p-2 md:px-10 max-sm:px-8 flex-between">
        <div className=' flex-items'>
            <a target="_blank" href='https://github.com/ATechproC' className='w-[25px] h-[25px] bg-dark-2 group  flex-center rounded-md'>
                <FaGithub className='text-[25px]  text-white' />
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/anass-choraichi-80a403267/' className='w-[40px] h-[40px] bg-dark-2 flex-center rounded-md'>
                <FaLinkedin className='text-[25px]  text-white' />
            </a>
        </div>
        <p className="mr-6 font-medium text-dark-4 md:mr-5 whitespace-nowrap">
            &copy;All Right Reserved By <span className="text-bold text-white text-[20px] text-shadow-logoMobile">A_Techpro_C</span>
        </p>
    </div>
};

export default Footer;
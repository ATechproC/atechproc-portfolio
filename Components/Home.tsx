import { assets } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {

    return <div className='w-[90%] mx-auto my-10 mt-24 p-10 flex-between'>
        <div className='w-[60%] flex flex-col gap-3'>
            <p className='text-[30px] font-semibold '>Hello! I'm <span className='text-dark-2'>Anass Choraichi</span> 👋</p>
            <p className='relative text-[25px] text-dark-2 w-fit text-shadow-logo'>
                Front-end Web Developer
                <span className='absolute bottom-0 left-0 w-[100%] shadow-line h-[2px] bg-dark-2' />
            </p>
            <p className='mt-5 font-semibold text-dark-4 text-sm/1'>
                &nbsp;&nbsp;&nbsp;As a front-end developer, I specialize in creating responsive and performant web
                applications using modern JavaScript and React. My curiosity drives me beyond the interface,
                and I'm currently exploring the world of data engineering to understand how to better manage,
                process, and visualize data from the ground up.
                I'm always eager to learn new technologies and tackle challenging projects.
            </p>
            <div className='gap-3 mt-1 flex-items'>
                <a href='https://github.com/ATechproC' className='w-[40px] h-[40px] bg-dark-2 group hover:bg-white  flex-center rounded-md transition duration-300 hover:rotate-360'>
                    <FaGithub className='text-[25px]  text-white group-hover:text-dark-2 transition duration-300' />
                </a>
                <a href='https://www.linkedin.com/in/anass-choraichi-80a403267/' className='w-[40px] h-[40px] group  transition duration-300 hover:bg-white bg-dark-2 flex-center rounded-md hover:rotate-360'>
                    <FaLinkedin className='text-[25px]  text-white group-hover:text-dark-2  transition  duration-300'  />
                </a>
            </div>
        </div>
        <div className='relative w-[250px] h-[250px] p-3'>
            <Image
                src={assets.atechpro}
                alt='A_Techpro_C'
                className='object-cover w-[100%] h-[100%] rounded-full border-[4px] border-dark-2 p-[5px] border-dashed shadow-line'
            />
        </div>
    </div>
}

export default Home
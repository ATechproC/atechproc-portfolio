import { assets } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Home = () => {

    return <div id="home" className='p-10 center-element md:mt-20 flex-between max-sm:flex-col-reverse max-sm:text-center scroll-mt-20'>
        <div className='md:w-[60%] flex flex-col gap-3'>
            <p className='text-[30px] font-semibold max-sm:text-[20px] whitespace-nowrap'>Hello! I'm <span className='text-dark-2'>Anass Choraichi</span> 👋</p>
            <p className='relative max-sm:mx-auto text-[25px] max-sm:text-[20px] whitespace-nowrap text-center text-dark-2 w-fit dark:text-shadow-dev font-medium'>
                Front-end Web Developer
                <span className='absolute bottom-0 left-0 w-[100%] shadow-line h-[2px] bg-dark-2' />
            </p>
            <p className='mt-5 font-semibold max-sm:hidden dark:text-dark-4 text-sm/1 text-main-light'>
                &nbsp;&nbsp;&nbsp;As a front-end developer, I specialize in creating responsive and performant web
                applications using modern JavaScript and React. My curiosity drives me beyond the interface,
                and I'm currently exploring the world of data engineering to understand how to better manage,
                process, and visualize data from the ground up.
                I'm always eager to learn new technologies and tackle challenging projects.
            </p>
            <p className='mt-5 font-semibold md:hidden text-start dark:text-dark-4 text-sm/1'>
                I build responsive, high-performance web apps with JavaScript and React.
                Curious beyond the interface, I’m exploring data engineering to learn how to manage, process,
                and visualize data. Always eager to pick up new tech and take on challenges.
            </p>
            <div className='gap-3 mt-3 max-sm:mx-auto flex-items max-sm:w-fit'>
                <a target="_blank" href='https://github.com/ATechproC' className='w-[40px] h-[40px] bg-dark-2 group hover:bg-white flex-center rounded-md transition duration-300 hover:rotate-360'>
                    <FaGithub className='text-[25px]  text-white group-hover:text-dark-2 transition duration-300' />
                </a>
                <a target="_blank" href='https://www.linkedin.com/in/anass-choraichi-80a403267/' className='w-[40px] h-[40px] group  transition duration-300 hover:bg-white bg-dark-2 flex-center rounded-md hover:rotate-360'>
                    <FaLinkedin className='text-[25px]  text-white group-hover:text-dark-2  transition  duration-300' />
                </a>
            </div>
            <div className='gap-3 mt-4 max-sm:gap-2 flex-items max-sm:flex-col'>
                <button className='flex text-white gap-2 px-3 py-2 text-sm rounded-xl hover:bg-[rgb(112_54_235)] transition-colors bg-dark-2 flex-items'>
                    View My Work <FaArrowRight className='mt-[2px]' />
                </button>
                <button className='flex gap-2 px-3 py-2 text-sm font-bold bg-white rounded-xl text-dark-2 flex-items hover:shadow-[0_0_3px_#fff] transition duration-200 max-sm:px-7'>
                    Contact Me
                </button>
            </div>
        </div>
        <div className='relative w-[250px] h-[250px] max-sm:mb-5 up-down'>
            <Image
                src={assets.atechpro}
                alt='A_Techpro_C'
                className='object-contain w-[100%] h-[100%] rounded-full border-[4px] border-dark-2 border-dashed dark:shadow-image shadow-2xl bg-black'
            />
        </div>
    </div>
}

export default Home
"use client";

import { assets, homeLinks } from '@/constants'
import { useColorPicker } from '@/providers/ColorPickerProvider';
import { useTheme } from '@/providers/ThemeProvider';
import Image from 'next/image'
import React, { useState } from 'react'
import {FaArrowRight } from 'react-icons/fa';
import GetIcons from './GetIcons';

const Home = () => {

    const { pickedColor } = useColorPicker();

    const { isDark } = useTheme();

    const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false)

    return <div id="home" className='p-10 center-element md:mt-20 flex-between max-sm:flex-col-reverse max-sm:text-center scroll-mt-20'>
        <div className='md:w-[60%] flex flex-col gap-3'>
            <p className='text-[30px] font-semibold max-sm:text-[20px] whitespace-nowrap'>Hello! I'm <span
                style={{ color: pickedColor }}
            >Anass Choraichi</span> 👋</p>
            <p
                style={{ color: pickedColor, textShadow: isDark ? `0 0px 10px ${pickedColor}` : "" }}
                className='relative max-sm:mx-auto text-[25px] max-sm:text-[20px] whitespace-nowrap text-center w-fit font-medium'>
                Front-end Web Developer
                <span
                    style={{ backgroundColor: pickedColor, boxShadow: `0 0 5px ${pickedColor}` }}
                    className='absolute bottom-0 left-0 w-[100%]  h-[2px]' />
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
                {
                    homeLinks.map(({ id, link, iconName }) => <a key={id} target="_blank" href={link}
                        style={{ backgroundColor: pickedColor }}
                        className='w-[40px] h-[40px] group  transition duration-300 hover:bg-white flex-center rounded-md hover:rotate-360'>
                        <GetIcons iconName={iconName} className={`text-[25px]  text-white group-hover:text-[${pickedColor}]  transition  duration-300`} />
                    </a>)
                }
            </div>
            <div className='gap-3 mt-4 max-sm:gap-2 flex-items max-sm:flex-col'>
                <button
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                    style={{ backgroundColor: pickedColor, boxShadow : isButtonHovered ? `0 0 6px ${pickedColor}` : "", transition : "box-shadow 0.3s ease" }}
                    className='flex text-white gap-2 px-3 py-2 text-sm rounded-xl hover:bg-[rgb(112_54_235)] transition-colors flex-items'>
                    View My Work <FaArrowRight className='mt-[2px]' />
                </button>
                <button
                    style={{ color: pickedColor }}
                    className='flex gap-2 px-3 py-2 text-[15px] font-bold bg-white rounded-xl flex-items hover:shadow-[0_0_3px_#fff] transition duration-200 max-sm:px-7'>
                    Contact Me
                </button>
            </div>
        </div>
        <div className='relative w-[250px] h-[250px] max-sm:mb-5 up-down'>
            <Image
                src={assets.atechpro}
                alt='A_Techpro_C'
                style={{ borderColor: pickedColor, boxShadow: isDark ? `0 0px 30px ${pickedColor}` : "" }}
                className='object-contain w-[100%] h-[100%] rounded-full border-[4px]  border-dashed shadow-2xl bg-black'
            />
        </div>
    </div>
}

export default Home
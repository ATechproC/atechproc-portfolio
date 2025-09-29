"use client";

import { useColorPicker } from '@/providers/ColorPickerProvider';
import { useTheme } from '@/providers/ThemeProvider';
import React from 'react'
import { FaStar } from "react-icons/fa6";

interface SectionHeaderProps {title: string; description?: string}

const SectionHeader = ({title, description} : SectionHeaderProps) => {

    const {pickedColor} = useColorPicker();

    const {isDark} = useTheme();

    return <div className='mx-auto w-fit'>
        <p 
        style={{color : pickedColor}}
        className='text-[30px] text-center font-semibold'> {title} </p>
        <div className='gap-1 -mt-1 text-center flex-center'>
            <div 
            style={{backgroundColor : pickedColor}}
            className='h-[3px] w-[50px]' />
            <FaStar
            style={{color : isDark ? "#fff" : pickedColor}}
            className='w-[20px] h-[20px] mb-[5px]' />
            <div
            style={{backgroundColor : pickedColor}}
            className='h-[3px] w-[50px]'/>
        </div>
        <p className='text-sm font-semibold text-center md:text-[15px] dark:text-dark-4 text-main-light'> {description} </p>
    </div>
}

export default SectionHeader
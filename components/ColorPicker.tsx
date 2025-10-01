"use client";

import { colors, } from '@/constants';
import { useColorPicker } from '@/providers/ColorPickerProvider';
import { ColorsProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6';

const ColorPicker = () => {

    const { isColorPickerOpen, setIsColorPickerOpen, pickedColor, setPickedColor } = useColorPicker();

    const [checkColors, setCheckColors] = useState<ColorsProps[]>(colors);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsColorPickerOpen(false)
        })
    }, [isColorPickerOpen])

    const handleClickedLink = (id: number) => {
        const newCheckColors = [...checkColors];
        for (let i = 0; i < newCheckColors.length; i++) {
            if (newCheckColors[i].id === id) {
                newCheckColors[i].isClicked = true;
                setPickedColor(newCheckColors[i].color);
            } else {
                newCheckColors[i].isClicked = false;
            }
        }
        setCheckColors(newCheckColors);
    }

    if (isColorPickerOpen)

        return <>
        <div className='fixed z-50 p-3 rounded-md max-sm:right-20 max-sm:top-12 dark:right-48 top-16 right-52 dark:bg-white bg-main-card '>
            <FaTimes
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                style={{ color: pickedColor }}
                className='absolute top-2 right-2 text-[17px] cursor-pointer' />
            <p
                style={{ color: pickedColor }}
                className=' text-[20px] font-bold'>Change Color</p>
            <div className='gap-2 mt-3 flex-items'>
                {
                    colors.map(({ id, color, isClicked }) => <div
                        key={id}
                        onClick={() => handleClickedLink(id)}
                        style={{ backgroundColor: color }}
                        className='w-[24px] flex-center h-[24px] rounded-full cursor-pointer'
                    >
                        {
                            isClicked && <FaCheck className='text-white'/>
                        }
                    </div>
                    )
                }
            </div>
            <div
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                style={{ color: pickedColor }}
                className='text-end text-md font-medium cursor-pointer w-[100%] mt-2'>
                cancel
            </div>
        </div>
        </>

    return null;
}

export default ColorPicker
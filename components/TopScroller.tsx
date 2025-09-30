"use client";

import { cn } from '@/lib/utils';
import { useColorPicker } from '@/providers/ColorPickerProvider';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const TopScroller = () => {

    const {pickedColor} = useColorPicker();

    const [isShow, setIsShow] = useState<boolean>(false);

    const handleClick = () => {
        scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 500) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        });
    }, []);

    return <div
    onClick={handleClick}
    style={{backgroundColor : pickedColor}}
    className={cn('fixed hidden z-50 right-3 bottom-3 w-[40px] cursor-pointer h-[40px] rounded-md',
        isShow && "block"
    )}>
        <FaArrowUp className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] text-white' />
    </div>
}

export default TopScroller
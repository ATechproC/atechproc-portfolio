import React from 'react'
import { FaStar } from "react-icons/fa6";

const SectionHeader = ({title, description} : {title: string; description: string}) => {
    return <div className='mx-auto w-fit'>
        <p className='text-dark-2 text-[30px] text-center font-semibold'> {title} </p>
        <div className='gap-1 -mt-1 text-center flex-center'>
            <div className='h-[3px] w-[50px] bg-dark-2 m' />
            <FaStar className='text-white w-[20px] h-[20px] mb-[5px]' />
            <div className='h-[3px] w-[50px] bg-dark-2'/>
        </div>
        <p className='text-sm font-semibold text-center md:text-[15px] text-dark-4'> {description} </p>
    </div>
}

export default SectionHeader
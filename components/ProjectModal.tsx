"use client";


import { useModal } from '@/providers/ProjectModalProvider';
import Image from 'next/image';
import React from 'react'
import { FaTimes } from 'react-icons/fa';

import GetIcons from './GetIcons';
import { cn } from '@/lib/utils';
import { FaStar } from 'react-icons/fa6';
import { useColorPicker } from '@/providers/ColorPickerProvider';

const Modal = () => {

    const {pickedColor} = useColorPicker();

    const { isModalOpen, setIsModalOpen, source, title, modalDesc, techStack } = useModal();

    return <>
        <div
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={cn('fixed hidden top-0 left-0 w-[100%] h-[100%] backdrop-blur-md',
                isModalOpen && "block"
            )} />
        <div 
        style={{backgroundColor : pickedColor}}
        className={cn('fixed -translate-x-1/2 hidden gap-5 items-center -translate-y-1/2 left-1/2 top-1/2 w-[80%] p-4 rounded-md',
            isModalOpen && "flex max-sm:flex-col"
        )}>
            <FaTimes
                onClick={() => setIsModalOpen(!isModalOpen)}
                className='absolute z-10 text-white cursor-pointer max-sm:right-2 max-sm:top-2 right-3 top-3' />
            <div className='md:w-[50%] max-sm:mt-3 w-[100%] h-full rounded-md overflow-hidden'>
                {
                    source && <Image
                        src={source}
                        alt=''
                        className="object-cover w-full h-full"
                    />
                }
            </div>
            <div className='text-center md:w-[50%] w-[100%] flex-items flex-col gap-4 max-sm:gap-5'>
                <p className='text-2xl font-bold text-white text-shadow-text_modal'> {title} </p>
                <div className='gap-1 -mt-4 text-center flex-center'>
                    <div className='h-[3px] w-[50px] bg-white' />
                    <FaStar className='text-white w-[20px] h-[20px] mb-[5px]' />
                    <div className='h-[3px] w-[50px] bg-white' />
                </div>
                <p className='text-white text-md'> {modalDesc} </p>
                <div className='gap-2 flex-items'> 
                    <span className='text-[20px] text-white font- max-sm:hidden'>Technologies : </span>
                    <div className='gap-3 flex-items'>
                        {techStack.map(({ id, name }) => <div key={id} className='w-[30px] h-[30px] bg-white flex-center rounded-md'>
                            <GetIcons style={{color : pickedColor}}
                            className='text-[22px]' iconName={name} />
                        </div>)}
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Modal
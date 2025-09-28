"use client";

import SectionHeader from './SectionHeader'
import GetIcons from './GetIcons';
import { CategoryProps, categorySkills, skills, tools } from '@/constants';
import { FaBookOpen } from "react-icons/fa6";
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
// import Loader from './Loader';
// import { useLoader } from '@/providers/LoaderProvider';

interface EducationProps {
    title: string;
    period: string;
    description: string;
}

const Education = ({ title, period, description }: EducationProps) => {
    return <div className='relative md:w-[50%] flex flex-col gap-1 mt-3 ml-5'>
        <div className='absolute top-1 -left-[15px] w-[3px] h-4/5 bg-dark-2 '>
            <span className='absolute top-0 -translate-x-[50%] left-[50%] inline-block w-[15px] h-[15px] rounded-full bg-dark-2 shadow-image' />
        </div>
        <p className='font-semibold text-white text-[15px]'> {title} </p>
        <p className='font-bold text-dark-2'> {period} </p>
        <p className='text-dark-4'> {description} </p>
    </div>
}

const Resume = () => {

    const [selectedItems, setSelectedItems] = useState<CategoryProps[]>(categorySkills);

    const [categoryId, setCategoryId] = useState<number>(1);

    const [category, setCategory] = useState(skills);

    // const { setIsLoading, isLoading } = useLoader();

    // useEffect(() => {

    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000)

    //     return () => { };

    // }, [isLoading])

    useEffect(() => {

        switch (categoryId) {
            case 1: setCategory(skills)
                break;
            case 2: setCategory(tools)
                break;
            default: setCategory(skills);
        }

    }, [categoryId])

    const handleClickedItems = (id: number) => {
        const newSelectedItems = [...selectedItems];
        for (let i = 0; i < newSelectedItems.length; i++) {
            if (newSelectedItems[i].id === id) {
                newSelectedItems[i].isSelected = true;
            } else {
                newSelectedItems[i].isSelected = false;
            }
        }
        setCategoryId(id);
        setSelectedItems(newSelectedItems);
        // setIsLoading(true)
    }

    return <div id='resume' className='flex flex-col gap-3 pt-20 pb-16 center-element'>
        <SectionHeader
            title='Resume'
            description='My technical toolkit, development workflow, and learning journey' />
        <div className='md:gap-20 max-sm:gap-14 flex-items md:mt-8'>
            <div className='relative bg-main-card md:w-[200px] flex flex-col py-10 items-center md:pl-5 pr-0 gap-5 mt-5 rounded-md'>
                <div className='absolute right-0 top-0 w-[6px] h-[100%] bg-dark-2 rounded-md' />
                {
                    selectedItems.map(({ id, icon_name, type, isSelected }) => {
                        return <div key={id}
                            onClick={() => handleClickedItems(id)}
                            className={cn('gap-4 w-[100%] p-1 rounded-md cursor-pointer max-sm:p-3',
                                isSelected && "bg-dark-2"
                            )}>
                            <div className='md:w-[80%] flex-between mx-auto'>
                                <GetIcons iconName={icon_name} />
                                <p className='text-[20px] w-[80%] text-center max-sm:hidden'> {type} </p>
                            </div>
                        </div>
                    })
                }
            </div>
                {/* <Loader /> */}
            {
                (categoryId !== 3) && <div className='md:grid grid-cols-3 gap-10 w-[60%] max-sm:flex max-sm:flex-col max-sm:gap-3'>
                    {
                        category.map(({ id, icon_name, name }) => {
                            return <div key={id} className='relative flex gap-2 px-4 py-[15px] rounded-md flex-center bg-main-card bg-red-items border border-dark-2 group hover:bg-dark-2 cursor-pointer transition duration-300 m'>
                                <div className='absolute p-2 transition duration-300 -translate-y-1/2 rounded-md top-1/2 -left-4 bg-dark-2 group-hover:text-dark-2 group-hover:bg-main-card'>
                                    <GetIcons iconName={icon_name} size={20} />
                                </div>
                                <p> {name} </p>
                            </div>
                        })
                    }
                </div>
            }
            {
                (categoryId === 3) && <div className=' bg-main-card md:w-[60%] p-4 rounded-md max-sm:-ml-5'>
                    <div className='gap-2 flex-items'>
                        <div className='p-2 rounded-md bg-dark-2'>
                            <FaBookOpen size={20} className='text-white' />
                        </div>
                        <p className='text-xl font-bold'>Education</p>
                    </div>
                    <div className='gap-2 flex-items max-sm:flex-col max-sm:gap-3'>
                        <Education
                            title='National School of Applied Sciences'
                            period='2023 | 2028'
                            description='Pursuing an Engineering degree in Big Data Engineering, 
                            gaining skills in data processing, analytics, and visualization.'
                        />
                        <Education
                            title='Self-Improvement Web Development'
                            period='2023 | present'
                            description='Self-taught in modern web technologies including React, Next.js,
                            and TailwindCSS. Building full-stack applications to complement.'
                        />
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Resume
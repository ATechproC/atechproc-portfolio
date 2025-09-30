"use client";

import SectionHeader from './SectionHeader'
import GetIcons from './GetIcons';
import { categorySkills, skills, tools } from '@/constants';
import { FaBookOpen } from "react-icons/fa6";
import { useEffect, useReducer, useState } from 'react';
import { useColorPicker } from '@/providers/ColorPickerProvider';
import selectedItemsReducer from '@/reducers/selectedItemsReducer';
import { SkillsProps } from '@/public/types';

interface EducationProps {
    title: string;
    period: string;
    description: string;
}

const Education = ({ title, period, description }: EducationProps) => {

    const { pickedColor } = useColorPicker();

    return <div className='relative md:w-[50%] flex flex-col gap-1 mt-3 ml-5'>
        <div
            style={{ backgroundColor: pickedColor }}
            className='absolute top-1 -left-[15px] w-[3px] h-4/5'>
            <span
                style={{ backgroundColor: pickedColor, boxShadow : `0 0px 30px ${pickedColor}` }}
                className='absolute top-0 -translate-x-[50%] left-[50%] inline-block w-[15px] h-[15px] rounded-full' />
        </div>
        <p className='font-semibold text-white text-[15px]'> {title} </p>
        <p
            style={{ color: pickedColor }}
            className='font-bold'> {period} </p>
        <p className='text-dark-4'> {description} </p>
    </div>
}

const Resume = () => {

    const { pickedColor } = useColorPicker();

    const [categoryId, setCategoryId] = useState<number>(1);

    const [category, setCategory] = useState<SkillsProps[]>(skills);

    useEffect(() => {

        switch (categoryId) {
            case 1: setCategory(skills)
                break;
            case 2: setCategory(tools)
                break;
            default: setCategory(skills);
        }

    }, [categoryId]);

    const [selectedItemsState, dispatchSelectItems] = useReducer(selectedItemsReducer, categorySkills)

    const handleClickedItems = (id: number) => {
        dispatchSelectItems({type : "selectedItem", payload : {id}})
        setCategoryId(id);
    }

    const whileMouseHovered = (id : number, type : "enter" | "leave") => {
        const newCategory = [...category]
        for(let i = 0; i < newCategory.length; i++) {
            if(type === "enter") {
                if(newCategory[i].id === id) {
                    newCategory[i].isHovered = true;
                }else {
                    newCategory[i].isHovered = false;
                }
            }else {
                newCategory[i].isHovered = false;
            }
        }
        setCategory(newCategory)
    }

    return <div id='resume' className='flex flex-col gap-3 py-20 center-element scroll-mt-7'>
        <SectionHeader
            title='Resume'
            description='My technical toolkit, development workflow, and learning journey'
        />
        <div className='md:gap-20 max-sm:gap-14 flex-items md:mt-8'>
            <div className='relative bg-main-card md:w-[200px] flex flex-col py-10 items-center md:pl-5 pr-0 gap-5 mt-5 rounded-md'>
                <div
                    style={{ backgroundColor: pickedColor }}
                    className='absolute right-0 top-0 w-[6px] h-[100%] rounded-md' />
                {
                    selectedItemsState.map(({ id, icon_name, type, isSelected }) => {
                        return <div key={id}
                            onClick={() => handleClickedItems(id)}
                            style={{ backgroundColor: isSelected ? pickedColor : "transparent" }}
                            className='gap-4 w-[100%] p-1 rounded-md cursor-pointer max-sm:p-3'>
                            <div className='md:w-[80%] flex-between mx-auto'>
                                <GetIcons iconName={icon_name} className='text-white' />
                                <p className='text-[20px] w-[80%] text-center max-sm:hidden text-white'> {type} </p>
                            </div>
                        </div>
                    })
                }
            </div>
            {/* <Loader /> */}
            {
                (categoryId !== 3) && <div className='md:grid grid-cols-3 gap-10 w-[60%] max-sm:flex max-sm:flex-col max-sm:gap-3'>
                    {
                        category.map(({ id, icon_name, name, isHovered }) => {
                            return <div key={id}
                            onMouseEnter={() => whileMouseHovered(id, "enter")}
                            onMouseLeave={() => whileMouseHovered(id, "leave")}
                                style={{ borderColor: pickedColor, backgroundColor : isHovered ? pickedColor : "#1B1E27" }}
                                className='relative flex gap-2 px-4 py-[15px] rounded-md flex-center bg-main-card bg-red-items border group hover:bg-dark-2 cursor-pointer transition duration-300 m'>
                                <div
                                    style={{ backgroundColor: pickedColor }}
                                    className='absolute p-2 transition duration-300 -translate-y-1/2 rounded-md top-1/2 -left-4 group-hover:text-dark-2 group-hover:bg-main-card'>
                                    <GetIcons iconName={icon_name} size={20} className='text-white' />
                                </div>
                                <p className='text-white'> {name} </p>
                            </div>
                        })
                    }
                </div>
            }
            {
                (categoryId === 3) && <div className=' bg-main-card md:w-[60%] p-4 rounded-md max-sm:-ml-5'>
                    <div className='gap-2 flex-items'>
                        <div
                            style={{ backgroundColor: pickedColor }}
                            className='p-2 rounded-md'>
                            <FaBookOpen size={20} className='text-white' />
                        </div>
                        <p className='text-xl font-bold text-white'>Education</p>
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
                            description='Self-learning modern web technologies including React, Next.js,
                            and TailwindCSS. Building full-stack applications to complement.'
                        />
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Resume
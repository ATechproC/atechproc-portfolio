"use client";

import { TechStackProps } from "@/data";
import { useColorPicker } from "@/providers/ColorPickerProvider";
import { useModal } from "@/providers/ProjectModalProvider";
import { StaticImageData } from "next/image";

interface ProjectButtonProps {
    title: string;
    modalDesc : string;
    source : StaticImageData
    techStack : TechStackProps[];
}

const ProjectButton = ({title, modalDesc,source, techStack} : ProjectButtonProps) => {

    const {pickedColor} = useColorPicker();

    const {setTitle, setModalDesc, setSource, setTechStack, setIsModalOpen, isModalOpen} = useModal();

    return (
        <button
            onClick={() => { 
                setTitle(title);
                setModalDesc(modalDesc);
                setSource(source);
                setTechStack(techStack);
                setIsModalOpen(!isModalOpen);
            }}
            style={{backgroundColor : pickedColor}}
            className="py-1 px-2 rounded-md text-white text-[15px] md:mt-7 mt-5 font-semibold hover:bg-white hover:text-dark-2 transition duration-300"
        >
            More Info
        </button>
    );
};

export default ProjectButton;

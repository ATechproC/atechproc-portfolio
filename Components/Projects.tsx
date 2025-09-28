import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLink } from "react-icons/fa6";
import { projects, ProjectsProps } from "@/data";
import Modal from "./ProjectModal";
import ProjectButton from "./ProjectButton";

interface ProjectsCardProps {
    project: ProjectsProps;
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
    const { source, title, description, gitHub, demo, modal_desc, techStack } =
        project;

    return (
        <div className="relative rounded-md group/parent">
            <div className="w-[100%] h-[100%] rounded-md overflow-hidden">
                <Image
                    src={source}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full p-5 transition duration-300 opacity-0 bg-project group-hover/parent:opacity-100">
                <div className="relative -translate-y-1/2 top-1/2">
                    <p className="md:text-[40px] text-dark-2 font-bold max-sm:text-[25px]">
                        {" "}
                        {title}{" "}
                    </p>
                    <p className="font-semibold md:text-[20px] text-white max-sm:text-[17px]">
                        {description}
                    </p>
                    <div className="hidden gap-3 mt-4 flex-items group-hover/parent:flex">
                        <a
                            target="_blank"
                            href={gitHub}
                            className="w-[40px] h-[40px] bg-dark-2 group hover:bg-white  flex-center rounded-md transition duration-300"
                        >
                            <FaGithub className="text-[25px] text-white group-hover:text-dark-2  transition duration-300" />
                        </a>
                        <a
                            target="_blank"
                            href={demo}
                            className="w-[40px] h-[40px] group  transition duration-300 hover:bg-white bg-dark-2 flex-center rounded-md"
                        >
                            <FaLink className="text-[25px]  text-white group-hover:text-dark-2  transition  duration-300" />
                        </a>
                    </div>
                    <ProjectButton
                        title={title}
                        source={source}
                        modalDesc={modal_desc}
                        techStack={techStack}
                    />
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="projects" className="pb-20 center-element scroll-mt-16">
            <SectionHeader title="Projects" />
            <div className="grid gap-4 md:grid-cols-2 max-sm:grid-col-1 md:mt-10 max-sm:gap-8">
                {projects.map((project, index) => (
                    <ProjectsCard project={project} key={index} />
                ))}
            </div>
            <Modal />
        </div>
    );
};

export default Projects;

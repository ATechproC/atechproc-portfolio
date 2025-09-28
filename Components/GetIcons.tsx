import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaTools,
    FaGraduationCap,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiVite,
    SiOpenai,
    SiPostman,
    SiNpm,
    SiShadcnui,
    SiStreamlit,
    SiClerk,
    SiI18Next
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

interface GetIconsProps {
    iconName: string;
    size?: number;
    className?: string;
}

const GetIcons: React.FC<GetIconsProps> = ({
    iconName,
    size = 24,
    className,
}) => {
    switch (iconName) {
        case "tools":
            return <FaTools size={size} className={className} />;
        case "code":
            return <FaCode size={size} className={className} />;
        case "graduation":
            return <FaGraduationCap size={size} className={className} />;
        case "html5":
            return <FaHtml5 size={size} className={className} />;
        case "css3":
            return <FaCss3Alt size={size} className={className} />;
        case "javascript":
            return <SiJavascript size={size} className={className} />;
        case "typescript":
            return <SiTypescript size={size} className={className} />;
        case "react":
            return <FaReact size={size} className={className} />;
        case "nextdotjs":
            return <SiNextdotjs size={size} className={className} />;
        case "tailwindcss":
            return <SiTailwindcss size={size} className={className} />;
        case "shadcn":
            return <SiShadcnui size={size} className={className} />;
        case "clerk":
            return <SiClerk size={size} className={className} />;
        case "getstream":
            return <SiStreamlit size={size} className={className} />;
        case "i18next":
            return <SiI18Next size={size} className={className} />;
        case "git": 
            return <FaGitAlt size={size} className={className} />;
        case "github":
            return <FaGithub size={size} className={className} />;
        case "vscode":
            return <VscVscode size={size} className={className} />;
        case "figma":
            return <SiFigma size={size} className={className} />;
        case "vite":
            return <SiVite size={size} className={className} />;
        case "chatgpt":
            return <SiOpenai size={size} className={className} />;
        case "postman":
            return <SiPostman size={size} className={className} />;
        case "npm":
            return <SiNpm size={size} className={className} />;
        default:
            return null;
    }
};

export default GetIcons;

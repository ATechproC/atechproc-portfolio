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
    SiShadcnui
} from "react-icons/si";


import { VscVscode } from "react-icons/vsc";


interface GetIconsProps {
    iconName: string;
    size?: number;
    color?: string;
    className?: string;
}

const GetIcons: React.FC<GetIconsProps> = ({
    iconName,
    size = 24,
    color = "currentColor",
    className,
}) => {
    switch (iconName) {
        case "tools":
            return <FaTools size={size} color={color} />;
        case "code":
            return <FaCode size={size} color={color} />;
        case "graduation":
            return <FaGraduationCap size={size} color={color} />;
        case "html5":
            return <FaHtml5 size={size} color={color} className={className} />;
        case "css3":
            return <FaCss3Alt size={size} color={color} className={className} />;
        case "javascript":
            return <SiJavascript size={size} color={color} className={className} />;
        case "typescript":
            return <SiTypescript size={size} color={color} className={className} />;
        case "react":
            return <FaReact size={size} color={color}  className={className}/>;
        case "nextdotjs":
            return <SiNextdotjs size={size} color={color} className={className} />;
        case "tailwindcss":
            return <SiTailwindcss size={size} color={color}  className={className}/>;
        case "shadcn":
            return <SiShadcnui size={size} color={color}  className={className}/>;
        case "git":
            return <FaGitAlt size={size} color={color} />;
        case "github":
            return <FaGithub size={size} color={color} />;
        case "vscode":
            return <VscVscode size={size} color={color} />;
        case "figma":
            return <SiFigma size={size} color={color} />;
        case "vite":
            return <SiVite size={size} color={color} />;
        case "chatgpt":
            return <SiOpenai size={size} color={color} />;
        case "postman":
            return <SiPostman size={size} color={color} />;
        case "npm":
            return <SiNpm size={size} color={color} />;
        default:
            return null;
    }
};

export default GetIcons;


import { GetIconsProps } from "@/public/types";
import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaTools,
    FaGraduationCap,
    FaLinkedin,
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
    SiI18Next,
    SiAxios,
    SiRedux,
    SiMui,
    SiFramer,
    SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";



const GetIcons: React.FC<GetIconsProps> = ({
    iconName,
    size = 24,
    className,
    style,
}) => {

    switch (iconName) {
        case "tools":
            return <FaTools style={style} size={size} className={className} />;
        case "code":
            return <FaCode style={style} size={size} className={className} />;
        case "graduation":
            return <FaGraduationCap style={style} size={size} className={className} />;
        case "html5":
            return <FaHtml5 style={style} size={size} className={className} />;
        case "css3":
            return <FaCss3Alt style={style} size={size} className={className} />;
        case "javascript":
            return <SiJavascript style={style} size={size} className={className} />;
        case "typescript":
            return <SiTypescript style={style} size={size} className={className} />;
        case "react":
            return <FaReact style={style} size={size} className={className} />;
        case "nextdotjs":
            return <SiNextdotjs style={style} size={size} className={className} />;
        case "tailwindcss":
            return <SiTailwindcss style={style} size={size} className={className} />;
        case "framer":
            return <SiFramer style={style} size={size} className={className} />;
        case "shadcn":
            return <SiShadcnui style={style} size={size} className={className} />;
        case "clerk":
            return <SiClerk style={style} size={size} className={className} />;
        case "getstream":
            return <SiStreamlit style={style} size={size} className={className} />;
        case "i18next":
            return <SiI18Next style={style} size={size} className={className} />;
        case "redux":
            return <SiRedux style={style} size={size} className={className} />;
        case "vercel":
            return <SiVercel style={style} size={size} className={className} />;
        case "mui":
            return <SiMui style={style} size={size} className={className} />;
        case "axios":
            return <SiAxios style={style} size={size} className={className} />;
        case "git":
            return <FaGitAlt style={style} size={size} className={className} />;
        case "github":
            return <FaGithub style={style} size={size} className={className} />;
        case "linkedIn":
            return <FaLinkedin style={style} size={size} className={className} />;
        case "vscode":
            return <VscVscode style={style} size={size} className={className} />;
        case "figma":
            return <SiFigma style={style} size={size} className={className} />;
        case "vite":
            return <SiVite style={style} size={size} className={className} />;
        case "chatgpt":
            return <SiOpenai style={style} size={size} className={className} />;
        case "postman":
            return <SiPostman style={style} size={size} className={className} />;
        case "npm":
            return <SiNpm style={style} size={size} className={className} />;
        default:
            return null;
    }
};

export default GetIcons;

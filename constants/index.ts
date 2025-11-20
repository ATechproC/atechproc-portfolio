
import atechpro from "../public/A_Techpro_C.png";
import spinner from "../public/spinner.svg";
import moon_icon from '../public/moon.png'
import sun_icon from '../public/sun_icon.png'
import { CategoryProps, ColorsProps, HomeLinksProps, LinksProps, SkillsProps } from "@/types";


export const assets = {
    atechpro,
    spinner,
    moon_icon,
    sun_icon,
}

export const links: LinksProps[] = [
    { "id": 1, name: "Home", href: "#home", isClicked: true, isHovered : false },
    { "id": 2, name: "About", href: "#about", isClicked: false, isHovered : false },
    { "id": 3, name: "Resume", href: "#resume", isClicked: false, isHovered : false },
    { "id": 4, name: "Projects", href: "#projects", isClicked: false, isHovered : false },
    { "id": 5, name: "Contact", href: "#contact", isClicked: false, isHovered : false },
]


export const skills : SkillsProps[] = [
    {
        "id": 1,
        "icon_name": "html5",
        "name": "HTML5",
        "isHovered" : false
    },
    {
        "id": 2,
        "icon_name": "css3",
        "name": "CSS3",
        "isHovered" : false
    },
    {
        "id": 3,
        "icon_name": "javascript",
        "name": "JavaScript",
        "isHovered" : false
    },
    {
        "id": 4,
        "icon_name": "typescript",
        "name": "TypeScript",
        "isHovered" : false
    },
    {
        "id": 5,
        "icon_name": "react",
        "name": "React.js",
        "isHovered" : false
    },
    {
        "id": 6,
        "icon_name": "redux",
        "name": "Redux",
        "isHovered" : false
    },
    {
        "id": 7,
        "icon_name": "mui",
        "name": "MUI",
        "isHovered" : false
    },
    {
        "id": 8,
        "icon_name": "nextdotjs",
        "name": "Next.js",
        "isHovered" : false
    },
    {
        "id": 9,
        "icon_name": "axios",
        "name": "Axios",
        "isHovered" : false,
    },
    {
        "id": 10,
        "icon_name": "framer",
        "name": "Framer Motion",
        "isHovered" : false
    },
    {
        "id": 12,
        "icon_name": "git",
        "name": "Git",
        "isHovered" : false
    },
    {
        "id": 13,
        "icon_name": "github",
        "name": "GitHub",
        "isHovered" : false
    },
];

export const tools : SkillsProps[] = [
    {
        "id": 1,
        "icon_name": "vscode",
        "name": "VS Code",
        "isHovered" : false
    },
    {
        "id": 2,
        "icon_name": "vite",
        "name": "Vite",
        "isHovered" : false
    },
    {
        "id": 3,
        "icon_name": "postman",
        "name": "Postman",
        "isHovered" : false
    },
    {
        "id": 4,
        "icon_name": "npm",
        "name": "NPM",
        "isHovered" : false
    },
    
    {
        "id": 5,
        "icon_name": "vercel",
        "name": "Vercel ",
        "isHovered" : false
    },
    {
        "id": 6,
        "icon_name": "figma",
        "name": "Figma",
        "isHovered" : false
    },
];

export const categorySkills: CategoryProps[] = [
    {
        "id": 1,
        "type": "Skills",
        "icon_name": "code",
        "isSelected": true,
    },
    {
        "id": 2,
        "type": "Tools",
        "icon_name": "tools",
        "isSelected": false,
    },
    {
        "id": 3,
        "type": "Education",
        "icon_name": "graduation",
        "isSelected": false,
    },
]

export const colors  : ColorsProps[] = [
    { "id": 9, "color": "#f9a90e", isClicked : false },
    { "id": 1, "color": "#32e6e2", isClicked : true },
    { "id": 2, "color": "#ff742e", isClicked : false },
    { "id": 3, "color": "#0e78f9", isClicked : false },
    { "id": 4, "color": "#793aff", isClicked : false },
    { "id": 6, "color": "#e91e63", isClicked : false },
    { "id": 8, "color": "#f05a22", isClicked : false },
]

export const homeLinks : HomeLinksProps[] = [
    {
        "id" : 1,
        "iconName" : "github",
        "link" : "https://github.com/ATechproC",
    },
    {
        "id" : 2,
        "iconName" : "linkedIn",
        "link" : "https://www.linkedin.com/in/anass-choraichi-80a403267/",
    }
]

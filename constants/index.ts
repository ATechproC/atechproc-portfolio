
import atechpro from "../public/A_Techpro_C.png";
import spinner from "../public/spinner.svg";
import multiStep_form from "../public/multiStep-form.jpg"
import liveDocs from "../public/LiveDocs.jpg"

export const assets = {
    atechpro,
    spinner,
    multiStep_form,
    liveDocs,
}

export interface LinksProps {
    id: number;
    name: string;
    href: string;
    isClicked: boolean;
}

export const links: LinksProps[] = [
    { "id": 1, name: "Home", href: "#home", isClicked: true },
    { "id": 2, name: "About", href: "#about", isClicked: false },
    { "id": 3, name: "Resume", href: "#resume", isClicked: false },
    { "id": 4, name: "Projects", href: "#projects", isClicked: false },
    { "id": 5, name: "Contact", href: "#contact", isClicked: false },
]


export const skills = [
    {
        "id": 1,
        "icon_name": "html5",
        "name": "HTML5"
    },
    {
        "id": 2,
        "icon_name": "css3",
        "name": "CSS3"
    },
    {
        "id": 3,
        "icon_name": "javascript",
        "name": "JavaScript"
    },
    {
        "id": 4,
        "icon_name": "typescript",
        "name": "TypeScript"
    },
    {
        "id": 5,
        "icon_name": "react",
        "name": "React.js"
    },
    {
        "id": 6,
        "icon_name": "nextdotjs",
        "name": "Next.js"
    },
    {
        "id": 7,
        "icon_name": "tailwindcss",
        "name": "Tailwind CSS"
    },
    {
        "id": 10,
        "icon_name": "git",
        "name": "Git"
    },
    {
        "id": 11,
        "icon_name": "github",
        "name": "GitHub"
    },
];

export const tools = [
    {
        "id": 1,
        "icon_name": "vscode",
        "name": "VS Code"
    },
    {
        "id": 2,
        "icon_name": "vite",
        "name": "Vite"
    },
    {
        "id": 3,
        "icon_name": "chatgpt",
        "name": "ChatGPT"
    },
    {
        "id": 4,
        "icon_name": "postman",
        "name": "Postman"
    },
    {
        "id": 5,
        "icon_name": "npm",
        "name": "NPM"
    },
    {
        "id": 6,
        "icon_name": "figma",
        "name": "Figma"
    },
];


export interface CategoryProps {
    id: number;
    type: string;
    icon_name: string;
    isSelected: boolean;
}

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
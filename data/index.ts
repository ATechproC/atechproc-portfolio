import { StaticImageData } from 'next/image';


import liveDocs from '../public/LiveDocs.jpg';
import zoom from '../public/zoom.png';
import dashboard from '../public/dashboard.png';
import car from '../public/car.png';
import multi_step_form from '../public/multiStep-form.jpg';
import cec_website from '../public/cec-website.png';
import restaurant from '../public/restaurant.png';


export interface TechStackProps {
    id: number;
    name: string;
}

export interface ProjectsProps {
    id: number;
    source: StaticImageData;
    title: string;
    description: string;
    gitHub: string;
    demo: string;
    modal_desc: string;
    techStack: TechStackProps[];
}

export const projects: ProjectsProps[] = [
    {
        id: 1,
        source: cec_website,
        title: "CEC Website",
        description: "Computer Engineering Club",
        modal_desc:
            "A responsive website built for the Computer Engineering Club to showcase activities, events, and resources. Developed with modern frontend tools to provide members and visitors with an accessible and engaging online presence.",
        gitHub: "https://github.com/ATechproC/cec-website",
        demo: "https://cec-club.netlify.app/",
        techStack: [
            { id: 1, name: "nextdotjs" },
            { id: 2, name: "typescript" },
            { id: 3, name: "tailwindcss" },
            { id: 4, name: "shadcn" },
        ],
    },
    {
        id: 2,
        source: zoom,
        title: "Zoom App",
        description: "Real-time video communication platform",
        modal_desc:
            "A Zoom-like video conferencing application that enables real-time communication with video, audio, and chat features. Built with WebRTC and Next.js, it demonstrates scalable peer-to-peer video calling functionality.",
        gitHub: "https://github.com/ATechproC/zoom-app",
        demo: "https://zoom-app-puce.vercel.app/",
        techStack: [
            { id: 1, name: "nextdotjs" },
            { id: 2, name: "typescript" },
            { id: 3, name: "tailwindcss" },
            { id: 4, name: "clerk" },
            { id: 5, name: "getstream" },
        ],
    },
    {
        id: 3,
        source: liveDocs,
        title: "Live Documents",
        description: "Real-time collaborative document editor",
        modal_desc:
            "A Google Docs–style collaborative editor where multiple users can edit documents simultaneously. Uses WebSockets for live updates and a rich-text editor for seamless team collaboration.",
        gitHub: "https://github.com/ATechproC/docs_live",
        demo: "https://docs-live-xi.vercel.app/",
        techStack: [
            { id: 1, name: "nextdotjs" },
            { id: 2, name: "typescript" },
            { id: 3, name: "liveblocks" },
            { id: 4, name: "lexical" },
            { id: 5, name: "shadcn" },
            { id: 6, name: "tailwindcss" },
        ],
    },
    {
        id: 4,
        source: dashboard,
        title: "Dashboard Admin",
        description: "Data visualization admin panel",
        modal_desc:
            "An admin dashboard that provides data visualization, analytics, and management tools. Built with React, Chart.js, and TailwindCSS to deliver clear insights and responsive design.",
        gitHub: "https://github.com/ATechproC/dashboard-admin",
        demo: "https://zoom-app-puce.vercel.app/",
        techStack: [
            { id: 1, name: "react" },
            { id: 2, name: "typescript" },
            { id: 3, name: "tailwindcss" },
        ],
    },
    {
        id: 5,
        source: car,
        title: "CarHub",
        description: "Car marketplace discovery platform",
        modal_desc:
            "A car discovery and marketplace platform where users can explore, filter, and view details about vehicles. Built with Next.js and TailwindCSS, featuring dynamic search and API-driven data fetching.",
        gitHub: "https://github.com/ATechproC/car_showcase",
        demo: "https://car-showcase-eight-tan.vercel.app/",
        techStack: [
            { id: 1, name: "nextdotjs" },
            { id: 2, name: "typescript" },
            { id: 3, name: "tailwindcss" },
        ],
    },
    {
        id: 6,
        source: multi_step_form,
        title: "FormFlow Wizard",
        description: "Multi-step form wizard",
        modal_desc:
            "A modern multi-step form that simplifies long form submissions by splitting them into clear steps. Built with React Hook Form and TailwindCSS for validation, accessibility, and a smooth user experience.",
        gitHub: "https://github.com/ATechproC/multi-step-form",
        demo: "https://multi-step-form-nine-sandy.vercel.app/",
        techStack: [
            { id: 1, name: "html5" },
            { id: 2, name: "css3" },
            { id: 3, name: "javascript" },
        ],
    },
    {
        id: 7,
        source: restaurant,
        title: "Restaurant Ovibes",
        description: "Restaurant Ovibes - Best In The City",
        modal_desc:
            "A restaurant website designed to highlight menu offerings, ambiance, and online reservations. Built with modern frontend techStack to give visitors an elegant and easy-to-navigate experience.",
        gitHub: "https://github.com/ATechproC/RestaurantOvibes",
        demo: "",
        techStack: [
            { id: 1, name: "html5" },
            { id: 2, name: "css3" },
        ],
    },
];


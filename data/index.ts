import liveDocs from '../public/LiveDocs.jpg';
import zoom from '../public/zoom.png';
import dashboard from '../public/dashboard.png';
import car from '../public/car.png';
import multi_step_form from '../public/multiStep-form.jpg';
import cec_website from '../public/cec-website.png';
import restaurant from '../public/restaurant.png';
import todo from "../public/todo_list2.jpg"
import weatherApp from '../public/weather.png'
import portfolio from "../public/ATechproC.png"
import prayerTimeApp from "../public/time-prayers.png"
import { ProjectsProps } from '@/types';


export const projects: ProjectsProps[] = [
    {
        id: 1,
        source: portfolio, // replace with your actual imported image
        title: "ATechproC portfolio",
        description: "Personal portfolio built with Next.js and TailwindCSS",
        modal_desc:
            "A modern personal portfolio showcasing my skills, projects, and resume. Built using Next.js, TypeScript, TailwindCSS, and shadcn/ui for reusable components. Features a responsive design, smooth navigation, and sections such as About Me, Resume, Projects, and Contact. Includes theme customization, social media integration, and a professional presentation of my work.",
        gitHub: "https://github.com/ATechproC/atechproc-portfolio", // update with your actual repo
        demo: "https://atechproc-portfolio.vercel.app/", // update with your deployed demo link
        techStack: [
            { id: 1, name: "nextdotjs" },
            { id: 2, name: "typescript" },
            { id: 3, name: "tailwindcss" },
            { id: 4, name: "shadcn" },
        ],
    },

    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    
    {
        id: 9,
        source: weatherApp, 
        title: "Weather App",
        description: "Real-time weather forecast application",
        modal_desc:
            "A weather application that fetches real-time data using an API request. Features multi-language support with i18n for English and Arabic, and allows users to select cities or countries to view localized forecasts. Displays current temperature, conditions, and min/max values with a clean and responsive UI.",
        gitHub: "https://github.com/ATechproC/weather-app", 
        demo: "https://shimmering-donut-2ab533.netlify.app/", 
        techStack: [
            { id: 1, name: "react" },
            { id: 3, name: "tailwindcss" },
            { id: 4, name: "redux" }, 
            { id: 5, name: "i18next" }, 
            { id: 6, name: "axios" }, 
            { id: 7, name: "mui" }, 
        ],
    },
    {
        id: 10,
        source: todo, 
        title: "Todo List App",
        description: "Task management application",
        modal_desc:
            "A simple and interactive Todo List application that allows users to add, edit, and delete tasks. Built with React for dynamic updates and CSS for styling, providing a clean and user-friendly task management experience.",
        gitHub: "https://github.com/ATechproC/todo-list", 
        demo: "https://dreamy-gumdrop-16ad08.netlify.app/", 
        techStack: [
            { id: 1, name: "react" },
            { id: 2, name: "css3" },
            { id: 3, name: "mui" },
        ],
    },
    {
        id: 11,
        source: prayerTimeApp, 
        title: "Prayer Times App",
        description: "Islamic prayer times application",
        modal_desc: "A prayer times application that fetches real-time prayer schedules using API requests with Axios. Features city selection to display accurate prayer times for specific locations. Shows all daily prayers (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha) with a clean, user-friendly interface and responsive design.",
        gitHub: "https://github.com/ATechproC/time-prayers",
        demo: "https://time-prayers.vercel.app/", 
        techStack: [
            { id: 1, name: "html5" },
            { id: 2, name: "css3" },
            { id: 3, name: "javascript" },
            { id: 4, name: "axios" },
        ],
    }
];


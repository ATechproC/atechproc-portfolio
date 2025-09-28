import { StaticImageData } from 'next/image';


import liveDocs from '../public/LiveDocs.jpg';
import zoom from '../public/zoom.png';
import dashboard from '../public/dashboard.png';
import car from '../public/car.png';
import multi_step_form from '../public/multiStep-form.jpg';
import cec_website from '../public/cec-website.png';
import restaurant from '../public/restaurant.png';


export interface ProjectsProps {
    id : number;
    source: StaticImageData;
    title: string;
    description : string;
    gitHub : string;
    demo : string;
}

export const projects : ProjectsProps[] = [
    {
        "id" : 1,
        'source' : cec_website,
        'title' : "CEC Website",
        "description" : "Computer Engineering Club",
        "gitHub" : "https://github.com/ATechproC/cec-website",
        "demo" : "https://cec-club.netlify.app/",
    },
    
    {
        "id" : 2,
        'source' : zoom,
        'title' : "Zoom App",
        "description" : "Real-time video communication platform",
        "gitHub" : "https://github.com/ATechproC/zoom-app",
        "demo" : "https://zoom-app-puce.vercel.app/",
    },
    {
        "id" : 3,
        'source' : liveDocs,
        'title' : "Live Documents",
        "description" : "Real-time collaborative document editor",
        "gitHub" : "https://github.com/ATechproC/docs_live",
        "demo" : "https://docs-live-xi.vercel.app/",
    },
    {
        "id" : 4,
        'source' : dashboard,
        'title' : "Dashboard Admin",
        "description" : "Data visualization admin panel",
        "gitHub" : "https://github.com/ATechproC/dashboard-admin",
        "demo" : "https://zoom-app-puce.vercel.app/",
    },
    {
        "id" : 5,
        'source' : car,
        'title' : "CarHub",
        "description" : "Car marketplace discovery platform",
        "gitHub" : "https://github.com/ATechproC/car_showcase",
        "demo" : "hhttps://car-showcase-eight-tan.vercel.app/",
    },
    {
        "id" : 6,
        'source' : multi_step_form,
        'title' : "FormFlow Wizard",
        "description" : "Multi-step form wizard",
        "gitHub" : "https://github.com/ATechproC/multi-step-form",
        "demo" : "https://multi-step-form-nine-sandy.vercel.app/",
    },
    {
        "id" : 7,
        'source' : restaurant,
        'title' : "Restaurant Ovibes",
        "description" : "Restaurant Ovibes - Best In The City",
        "gitHub" : "https://github.com/ATechproC/RestaurantOvibes",
        "demo" : "",
    },
]
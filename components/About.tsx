import { assets } from "@/constants"
import Image from "next/image"
import SectionHeader from "./SectionHeader";

const About = () => {
    return <div id="about" className="center-element md:scroll-mt-16 max-sm:scroll-mt-14">
        <SectionHeader title="About" description="Passionate about creating digital solutions that solve real-world problems" />
        <div className="gap-10 mx-auto flex-items max-sm:flex-col max-sm:text-center max-sm:gap-12 max-sm:mt-5">
            <div className="w-[30%] max-sm:h-[260px]">
                <Image
                    src={assets.atechpro}
                    alt="A_Techpro_C"
                    className="object-cover w-[100%] h-[100%]"
                />
            </div>
            <p className="font-medium dark:font-normal text-md dark:text-white md:w-[60%] max-sm:hidden text-main-light">
                &nbsp;&nbsp;&nbsp;&nbsp;I am a Full-Stack Developer with 3+ years of experience in creating scalable and high-performance web applications. I specialize in React.js for crafting modern, responsive user interfaces and utilize Node.js with Express.js and Spring Boot for building robust backends. I take pride in writing clean, maintainable code and delivering digital solutions that not only meet client expectations but also drive business success. One of my notable projects includes a comprehensive e-commerce platform featuring secure REST APIs and an intuitive frontend. I thrive on challenges and am always eager to collaborate on projects that push boundaries. If you need a reliable developer who can bring your vision to life, let's connect and discuss how we can achieve your goals together.
            </p>
            <p className="font-medium text-center dark:text-white text-md md:hidden text-main-light dark:font-normal">
                I am a Full-Stack Developer with 3+ years of experience in creating scalable and high-performance web applications. I specialize in React.js for crafting modern, responsive user interfaces and utilize Node.js with Express.js and Spring Boot for building robust backends. I take pride in writing clean, maintainable code and delivering digital solutions that not only meet client expectations but also drive business success. One of my notable projects includes a comprehensive e-commerce platform featuring secure REST APIs and an intuitive frontend. I thrive on challenges and am always eager to collaborate on projects that push boundaries. If you need a reliable developer who can bring your vision to life, let's connect and discuss how we can achieve your goals together.
            </p>
        </div>
    </div>
}

export default About
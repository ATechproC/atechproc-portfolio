import { assets } from "@/constants"
import Image from "next/image"
import SectionHeader from "./SectionHeader";

const About = () => {
    return <div id="about" className="center-element md:scroll-mt-16 max-sm:scroll-mt-10">
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
                &nbsp;&nbsp;&nbsp;&nbsp;As a dedicated front-end developer, 
                my expertise lies in utilizing modern JavaScript, React, 
                and related frameworks to construct high-quality, 
                scalable web applications. I prioritize clean code, 
                performance optimization, and responsive design. 
                Passionate about full-stack understanding, 
                I am actively expanding my knowledge into data engineering principles. 
                This includes exploring backend development, database management, 
                and ETL processes to gain a comprehensive view of how data flows from source to screen. 
                I am enthusiastic about applying this broader perspective to tackle complex projects and deliver more impactful solutions.
            </p>
            <p className="font-medium text-center dark:text-white text-md md:hidden text-main-light dark:font-normal">
                I’m a front-end developer who creates responsive and high-performing web apps with JavaScript and React. 
                My passion goes beyond the interface. I’m exploring data engineering to learn how data is stored, 
                processed, and turned into insights.

                I’m always learning, improving, 
                and excited to take on projects that challenge me to grow.
            </p>
        </div>
    </div>
}

export default About
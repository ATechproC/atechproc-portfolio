import React from "react";
import SectionHeader from "./SectionHeader";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="center-element scroll-mt-14">
            <SectionHeader title="Contact" />
            <div className="w-full gap-3 p-6 my-10 rounded-md flex-between bg-dark-5">
                <div className="w-[40%] flex flex-col gap-4 max-sm:hidden">
                    <p className="font-bold text-[25px] text-white">
                        Contact Information
                    </p>
                    <p className=" text-dark-4">
                        I'd love to hear from you. Fill out the form or reach out directly
                        through the following channels:
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="gap-2 text-white flex-items">
                            <MdEmail />
                            choraichianass@gmail.com
                        </div>
                        <div className="gap-2 text-white flex-items">
                            <FaPhoneAlt />
                            +212 698-282800
                        </div>
                        <div className="gap-2 text-white flex-items">
                            <FaLocationDot />
                            Casablanca, Morocco
                        </div>
                    </div>
                    <div className="gap-1 ml-10 max-sm:mx-auto flex-items max-sm:w-fit">
                        <a
                            target="_blank"
                            href="https://github.com/ATechproC"
                            className="w-[30px] h-[30px] bg-dark-2 flex-center rounded-md"
                        >
                            <FaGithub className="text-[23px] text-white" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/anass-choraichi-80a403267/"
                            className="w-[30px] h-[30px] group bg-dark-2 flex-center rounded-md"
                        >
                            <FaLinkedin className="text-[23px]  text-white" />
                        </a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;

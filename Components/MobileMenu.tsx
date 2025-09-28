"use client";

import { assets, links } from "@/constants";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/providers/MobileMenuProvider";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const MobileMenu = () => {
    
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    const {isDark, setIsDark} = useTheme();

    return (
        <>
            <div
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                    "fixed top-0 left-0 hidden w-full h-screen",
                    isMobileMenuOpen && "block"
                )}
            />
            <div className="fixed z-20 w-full px-3 py-2 md:hidden backdrop-blur-md">
                <div className="px-4 py-1 rounded-md flex-between bg-dark-2 dark:bg-transparent dark:px-4">
                    <a
                        href="#"
                        className="text-[20px] font-bold dark:text-dark-2 dark:text-shadow-logo text-shadow-nav_logo text-white"
                    >
                        A_Techpro_C
                    </a>
                    <div className="gap-2 flex-items">
                        <Image
                        onClick={() => setIsDark(!isDark)}
                            src={ isDark ? assets.sun_icon : assets.moon_icon}
                            alt=""
                            width={18}
                            height={18}
                            className="cursor-pointer"
                        />
                        <FaBars
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white transition-colors cursor-pointer dark:text-dark-2"
                        />
                    </div>
                </div>
                <ul
                    className={` ${isMobileMenuOpen ? "open" : "close"
                        } fixed top-0 flex flex-col h-screen gap-3 p-3 font-semibold text-center bg-dark-2 min-w-[200px]`}
                >
                    <div className="w-full flex-between">
                        <a
                            href="#"
                            className="font-bold text-white text-md text-shadow-logoMobile"
                        >
                            A_Techpro_C
                        </a>
                        <FaTimes
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white cursor-pointer"
                        />
                    </div>
                    {links.map(({ name, href }) => {
                        return (
                            <li key={name}>
                                <a
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-white text-md"
                                    href={href}
                                >
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;

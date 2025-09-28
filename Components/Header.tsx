"use client";
import { assets, links, LinksProps } from "@/constants"
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {

    const [linksState, setLinksState] = useState<LinksProps[]>(links);

    const { isDark, setIsDark } = useTheme()

    const handleClickedLink = (id: number) => {
        const newLinksState = [...linksState];
        for (let i = 0; i < newLinksState.length; i++) {
            if (newLinksState[i].id === id) {
                newLinksState[i].isClicked = true;
            } else {
                newLinksState[i].isClicked = false;
            }
        }
        setLinksState(newLinksState);
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
            document.body.style.backgroundColor = "#04071D";
            document.body.style.color = "#fff"
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "#e5e7eb";
            document.body.style.color = "#0d1117"
        }
    }, [isDark])

    return <nav className="fixed w-[90%] px-4 dark:px-0 backdrop-blur-md dark:top-0 left-1/2 -translate-x-1/2 py-2 flex-between max-sm:hidden z-50 bg-dark-2 top-1 dark:bg-transparent rounded-[10px]">
        <div>
            <a href="#" className="dark:text-[30px] text-[25px] text-shadow-nav_logo font-bold dark:text-dark-2 dark:text-shadow-logo text-white">A_Techpro_C</a>
        </div>
        <ul className="gap-5 px-4 py-1 font-semibold border-2 border-white rounded-md dark:border-dark-2 flex-between text-md dark:shadow-line shadow-light">
            {
                linksState.map(({ id, name, href, isClicked }) => {
                    return <li
                        onClick={() => handleClickedLink(id)}
                        key={name}>
                        <a className={cn("group relative mb-1 dark:mb-0 transition-colors text-md dark:hover:text-dark-2 text-white",
                            isClicked && "dark:text-dark-2"
                        )} href={href}>
                            {name}
                            {
                            
                                !isDark && <span className={cn("absolute -bottom-[1px] left-0 inline-block w-0 group-hover:w-[100%] transition-all duration-300 bg-white h-[2px] rounded-[20px]",
                                    isClicked && "w-[100%]"
                                )} />
                            }
                        </a>
                    </li>
                })
            }
        </ul>
        <div className="gap-3 flex-items">
            <Image
                onClick={() => setIsDark(!isDark)}
                src={isDark ? assets.sun_icon : assets.moon_icon}
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
            />
            <a href="#contact" className="px-3 py-1 transition-colors rounded-md dark:bg-dark-2 bg-white dark:text-white text-dark-2 dark:hover:text-white font-bold dark:hover:bg-[rgba(121,58,288,.9)] ">
                Contact
            </a>
        </div>
    </nav>
}

export default Header
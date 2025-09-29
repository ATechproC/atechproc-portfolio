"use client";

import { assets, links } from "@/constants"
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";

import { IoColorPaletteSharp } from "react-icons/io5";
import { useColorPicker } from "@/providers/ColorPickerProvider";
import linksReducer from "@/reducers/linksReducer";


const Header = () => {

    const { pickedColor } = useColorPicker();

    const { isColorPickerOpen, setIsColorPickerOpen } = useColorPicker();

    const [isButtonContactHovered, setIsButtonContactHovered] = useState<boolean>(false);


    // const [linksState, setLinksState] = useState<LinksProps[]>(links);

    const [linksState, dispatchLinksState] = useReducer(linksReducer, links)

    const { isDark, setIsDark } = useTheme();

    const handleClickedLink = (id: number) => {
        // const newLinksState = [...linksState];
        // for (let i = 0; i < newLinksState.length; i++) {
        //     if (newLinksState[i].id === id) {
        //         newLinksState[i].isClicked = true;
        //     } else {
        //         newLinksState[i].isClicked = false;
        //     }
        // }
        // setLinksState(newLinksState);

        dispatchLinksState({type : "linkClicked", payload : {id}})
    }

    const whileMouseHovered = (id: number, type: "enter" | "leave") => {
        // const newLinksHovered = [...linksState];
        // for (let i = 0; i < newLinksHovered.length; i++) {
        //     if (type === "enter") {
        //         if (newLinksHovered[i].id === id) {
        //             newLinksHovered[i].isHovered = true;
        //         } else {
        //             newLinksHovered[i].isHovered = false;
        //         }
        //     }else {
        //         newLinksHovered[i].isHovered = false;
        //     }
        // }
        // setLinksState(newLinksHovered);

        dispatchLinksState({type : "linkHovered", payload : {type, id}})
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

    return <nav
        style={{ backgroundColor: isDark ? "transparent" : pickedColor }}
        className="fixed w-[90%] px-4 dark:px-0 backdrop-blur-md dark:top-0 left-1/2 -translate-x-1/2 py-2 flex-between max-sm:hidden z-50 top-1 dark:bg-transparent rounded-[10px]">
        <div>
            <a href="#"
                style={{ color: isDark ? pickedColor : "#fff", textShadow: isDark ? `0 0px 5px ${pickedColor}` : "0 0px 5px white" }}
                className="dark:text-[30px] text-[25px] font-bold">A_Techpro_C</a>
        </div>
        <ul
            style={{ borderColor: isDark ? pickedColor : "#fff", boxShadow: isDark ? `0 0px 10px ${pickedColor}` : "0 0 5px white" }}
            className="gap-5 px-4 py-1 font-semibold border-2 rounded-md flex-between text-md">
            {
                linksState.map(({ id, name, href, isClicked, isHovered }) => {
                    return <li
                        onClick={() => handleClickedLink(id)}
                        key={name}>
                        <a
                            style={{ color: (isClicked && isDark) || (isHovered && isDark) ? pickedColor : "#fff" }}
                            onMouseEnter={() => whileMouseHovered(id, "enter")}
                            onMouseLeave={() => whileMouseHovered(id, "leave")}
                            className={cn(`group relative mb-1 dark:mb-0 transition-colors text-md `)} href={href}>
                            {name}
                            {
                                !isDark && <span
                                    className={cn("absolute -bottom-[1px] bg-white left-0 inline-block w-0 group-hover:w-[100%] transition-all duration-300 h-[2px] rounded-[20px]",
                                        isClicked && "w-[100%]"
                                    )} />
                            }
                        </a>
                    </li>
                })
            }
        </ul>
        <div className="relative gap-3 flex-items">
            <IoColorPaletteSharp
                onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                className="w-[20px] h-[20px] cursor-pointer font-bold text-white" />
            <Image
                onClick={() => setIsDark(!isDark)}
                src={isDark ? assets.sun_icon : assets.moon_icon}
                alt=""
                width={22}
                height={22}
                className="cursor-pointer"
            />
            <a href="#contact"
                onMouseEnter={() => setIsButtonContactHovered(true)}
                onMouseLeave={() => setIsButtonContactHovered(false)}
                style={{ backgroundColor: isDark && !isButtonContactHovered ? pickedColor : "#fff", color: isDark && !isButtonContactHovered ? "#fff" : pickedColor, transition : "0.3s" }}
                className="px-3 py-1 font-bold transition-colors rounded-md">
                Contact
            </a>
        </div>
    </nav>
}

export default Header
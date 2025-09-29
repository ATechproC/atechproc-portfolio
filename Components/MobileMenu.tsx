"use client";

import { assets, links, LinksProps } from "@/constants";
import { cn } from "@/lib/utils";
import { useColorPicker } from "@/providers/ColorPickerProvider";
import { useMobileMenu } from "@/providers/MobileMenuProvider";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

const MobileMenu = () => {

    const {isColorPickerOpen, setIsColorPickerOpen, pickedColor} = useColorPicker();

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    const { isDark, setIsDark } = useTheme();

    const [linksState, setLinksState] = useState<LinksProps[]>(links);

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
        ispatchLinksState({type : "linkClicked", payload : {id}})
    }

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
                <div 
                style={{backgroundColor : isDark ?  "transparent" : pickedColor}}
                className={cn("px-4 py-1 rounded-md max-sm:px-0 flex-between ",
                    !isDark && "max-sm:px-4"
                )}>
                    <a
                        href="#"
                        style={{color : isDark ? pickedColor : "#fff", textShadow : isDark ? `0 0px 5px ${pickedColor}` : "0 0px 5px white" }}
                        className="text-[20px] font-bold"
                    >
                        A_Techpro_C
                    </a>
                    <div className="gap-2 flex-items">
                        <IoColorPaletteSharp
                            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
                            className="w-[20px] h-[20px] cursor-pointer font-bold text-white" />
                        <Image
                            onClick={() => setIsDark(!isDark)}
                            src={isDark ? assets.sun_icon : assets.moon_icon}
                            alt=""
                            width={18}
                            height={18}
                            className="cursor-pointer"
                        />
                        <FaBars
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{color : isDark ? pickedColor : "#fff" }}
                            className="transition-colors cursor-pointer "
                        />
                    </div>
                </div>
                <ul
                style={{backgroundColor : pickedColor}}
                    className={` ${isMobileMenuOpen ? "open" : "close"
                        } fixed top-0 flex flex-col h-screen gap-3 p-3 font-semibold text-center min-w-[200px]`}
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
                    {links.map(({ id, name, href, isClicked }) => {
                        return (
                            <li
                                onClick={() => handleClickedLink(id)}
                                key={name}
                            >
                                <a
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="relative text-white text-md"
                                    href={href}
                                >
                                    {name}
                                    {
                                        isClicked && <span className="absolute -bottom-1 left-0 w-[100%] h-[2px] bg-white" />
                                    }
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

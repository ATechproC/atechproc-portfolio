"use client";
import { links, LinksProps } from "@/constants"
import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {

    const [linksState, setLinksState] = useState<LinksProps[]>(links);

    const handleClickedLink = (id : number) => {
        const newLinksState = [...linksState];
        for(let i = 0; i < newLinksState.length; i++) {
            if(newLinksState[i].id === id) {
                newLinksState[i].isClicked = true;
            }else {
                newLinksState[i].isClicked = false;
            }
        }
        setLinksState(newLinksState);
    }

    return <nav className="fixed w-[90%] backdrop-blur-md top-0 left-1/2 -translate-x-1/2 py-2 flex-between max-sm:hidden z-50">
        <div>
            <a href="#" className="text-[30px] font-bold text-dark-2 text-shadow-logo">A_Techpro_C</a>
        </div>
        <ul className="gap-5 px-4 py-1 font-semibold border-2 rounded-md border-dark-2 flex-between text-md shadow-line">
            {
                linksState.map(({id , name, href, isClicked}) => {
                    return <li
                    onClick={() => handleClickedLink(id)}
                    key={name}>
                        <a className={cn("transition-colors text-md hover:text-dark-2",
                            isClicked && "text-dark-2"
                        )} href={href}> {name} </a>
                    </li>
                })
            }
        </ul>
        <button className="px-3 py-1 transition-colors rounded-md bg-dark-2 text-white hover:text-white font-bold hover:bg-[rgba(121,58,288,.9)]">
            Contact
        </button>
    </nav>
}

export default Header
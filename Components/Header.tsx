import { links } from "@/constants"

const Header = () => {

    return <nav className="fixed w-[90%] backdrop-blur-md left-1/2 -translate-x-1/2 mt-2 flex-between center-element max-sm:hidden">
        <div>
            <a href="#" className="text-[30px] font-bold text-white text-shadow-logo">A_Techpro_C</a>
        </div>
        <ul className="gap-5 px-4 py-1 font-semibold border-2 rounded-md flex-between text-md shadow-light">
            {
                links.map(({name, href}) => {
                    return <li key={name}>
                        <a className="transition-colors text-md hover:text-dark-2" href={href}> {name} </a>
                    </li>
                })
            }
        </ul>
        <button className="px-3 py-1 transition-colors rounded-md bg-white text-dark-2 hover:text-white font-bold hover:bg-[rgba(121,58,288,.9)]">
            Contact
        </button>
    </nav>
}

export default Header
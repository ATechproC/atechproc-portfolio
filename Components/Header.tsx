import { links } from "@/constants"

const Header = () => {

    return <nav className="mt-2 flex-between center-element max-sm:hidden">
        <div>
            <a href="#" className="text-[30px] font-bold text-dark-2 text-shadow-logo">A_Techpro_C</a>
        </div>
        <ul className="gap-5 font-semibold flex-between text-md">
            {
                links.map(({name, href}) => {
                    return <li key={name}>
                        <a className="transition-colors text-md hover:text-dark-2" href={href}> {name} </a>
                    </li>
                })
            }
        </ul>
        <button className="px-3 py-1 font-semibold transition-colors rounded-md bg-dark-2 hover:bg-[rgba(121,58,288,.9)]">
            Contact
        </button>
    </nav>
}

export default Header
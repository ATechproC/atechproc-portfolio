
// import atechpro from "../public/A_Techpro_C.jpg";
import atechpro from "../public/A_Techpro_C.png";

export const assets = {
    atechpro,
}

interface LinksProps {
    name: string;
    href: string;
}

export const links: LinksProps[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]
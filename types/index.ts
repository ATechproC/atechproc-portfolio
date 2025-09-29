
import { StaticImageData } from "next/image";
import { SetStateAction } from "react";

export interface GetIconsProps {
    iconName: string;
    size?: number;
    className?: string;
    style? : React.CSSProperties
}

export interface ProjectButtonProps {
    title: string;
    modalDesc : string;
    source : StaticImageData
    techStack : TechStackProps[];
}

export interface ProjectsCardProps {
    project: ProjectsProps;
}

export interface SectionHeaderProps {title: string; description?: string}

export interface LinksProps {
    id: number;
    name: string;
    href: string;
    isClicked: boolean;
    isHovered : boolean;
}
export interface SkillsProps {
    id : number;
    icon_name : string;
    name : string;
    isHovered: boolean;
}

export interface CategoryProps {
    id: number;
    type: string;
    icon_name: string;
    isSelected: boolean;
}

export interface ColorsProps {
    id : number;
    color : string;
    isClicked : boolean;
}

export interface HomeLinksProps {
    id : number;
    iconName : string;
    link : string;
}

export interface TechStackProps {
    id: number;
    name: string;
}

export interface ProjectsProps {
    id: number;
    source: StaticImageData;
    title: string;
    description: string;
    gitHub: string;
    demo: string;
    modal_desc: string;
    techStack: TechStackProps[];
}

export interface ColorPickerProvider {
    
    isColorPickerOpen : boolean;
    setIsColorPickerOpen : React.Dispatch<React.SetStateAction<boolean>>;

    pickedColor : string;
    setPickedColor :  React.Dispatch<React.SetStateAction<string>>;

}

export interface LinksStateProviderProps {
    linksState : LinksProps[];
    dispatchLinksState: React.ActionDispatch<[action: any]>;
}

export interface MobileMenuProps {
    isMobileMenuOpen : boolean;
    setIsMobileMenuOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModalProps {

    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;

    title: string;
    setTitle: React.Dispatch<SetStateAction<string>>;

    source : StaticImageData | null;
    setSource : React.Dispatch<SetStateAction<StaticImageData | null>>;

    modalDesc : string;
    setModalDesc : React.Dispatch<SetStateAction<string>>;

    techStack : TechStackProps[];
    setTechStack : React.Dispatch<SetStateAction<TechStackProps[]>>;
}

export interface ThemeProps {
    isDark : boolean;
    setIsDark : React.Dispatch<React.SetStateAction<boolean>>
}
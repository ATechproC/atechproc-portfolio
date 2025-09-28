"use client";

import { TechStackProps } from "@/data";
import { StaticImageData } from "next/image";
import { createContext, SetStateAction, useContext, useState } from "react";

interface ModalProps {

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

const ModalContext = createContext({} as ModalProps);

const ModalProvider = ({children} : {children : React.ReactNode}) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [source, setSource] = useState<StaticImageData | null>(null);
    
    const [title, setTitle] = useState<string>("");

    const [modalDesc, setModalDesc] = useState<string>("");

    const [techStack, setTechStack] = useState<TechStackProps[]>([]);

    return <ModalContext.Provider value={{
        isModalOpen, setIsModalOpen,
        source, setSource,
        title, setTitle,
        modalDesc, setModalDesc,
        techStack, setTechStack
        }} >
        {children}
    </ModalContext.Provider>
}

export default ModalProvider;

export const useModal = () => useContext(ModalContext);
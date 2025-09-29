"use client";

import { ModalProps, TechStackProps } from "@/types";
import { StaticImageData } from "next/image";
import { createContext, useContext, useState } from "react";

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
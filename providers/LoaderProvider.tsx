"use client";

import React, { createContext, useContext, useState } from 'react';

interface LoaderProps {
    isLoading : boolean;
    setIsLoading :  React.Dispatch<React.SetStateAction<boolean>>
}

const LoaderContext = createContext({} as LoaderProps)

const LoaderProvider = ({children} : {children : React.ReactNode}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return <LoaderContext.Provider value={{isLoading, setIsLoading}} >
        {
            children
        }
    </LoaderContext.Provider>
}

export default LoaderProvider;

export const useLoader = () => useContext(LoaderContext);
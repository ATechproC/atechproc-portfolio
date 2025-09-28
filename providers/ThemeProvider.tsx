"use client";

import React, { useContext, useState } from 'react'

import { createContext } from 'react';

interface ThemeProps {
    isDark : boolean;
    setIsDark : React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({children} : {children : React.ReactNode}) => {

    const [isDark, setIsDark] = useState<boolean>(true)

    return <ThemeContext.Provider value={{isDark, setIsDark}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
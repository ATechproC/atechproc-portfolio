"use client";

import { ThemeProps } from '@/types';
import React, { useContext, useState } from 'react'

import { createContext } from 'react';

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({children} : {children : React.ReactNode}) => {

    const [isDark, setIsDark] = useState<boolean>(true)

    return <ThemeContext.Provider value={{isDark, setIsDark}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
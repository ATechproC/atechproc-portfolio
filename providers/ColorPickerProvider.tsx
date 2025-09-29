"use client";

import { ColorPickerProvider } from '@/types';
import React, { createContext, useContext, useState }from 'react';

const ColorPickerContext = createContext({} as ColorPickerProvider)

const ColorPickerProvider = ({ children } : {children : React.ReactNode}) => {
    
    const [pickedColor, setPickedColor] = useState<string>("#793aff")

    const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false)

    return <ColorPickerContext.Provider value={{
        isColorPickerOpen, setIsColorPickerOpen,
        pickedColor, setPickedColor
        }}>
    {children}
    </ColorPickerContext.Provider>
}

export default ColorPickerProvider;


export const useColorPicker = () => useContext(ColorPickerContext);
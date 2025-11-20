"use client";

import React, { createContext, useContext, useState } from 'react';

export interface ColorPickerProvider {
    
    isColorPickerOpen : boolean;
    setIsColorPickerOpen : React.Dispatch<React.SetStateAction<boolean>>;

    pickedColor : string;
    setPickedColor :  React.Dispatch<React.SetStateAction<string>>;

}

const ColorPickerContext = createContext({} as ColorPickerProvider)

const ColorPickerProvider = ({ children } : {children : React.ReactNode}) => {
    
    const [pickedColor, setPickedColor] = useState<string>("#f9a90e")

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

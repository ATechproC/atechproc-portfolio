"use client";

import { links,  } from '@/constants'
import linksReducer from '@/reducers/linksReducer'
import { LinksStateProviderProps } from '@/types';
import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'

const LinksStateContext = createContext({} as LinksStateProviderProps)

const LinksStateProvider = ({children} : {children : React.ReactNode}) => {

    const [linksState, dispatchLinksState] = useReducer(linksReducer, links)


    return <LinksStateContext.Provider value={{linksState, dispatchLinksState}}>
    {children}
    </LinksStateContext.Provider>
}

export default LinksStateProvider;

export const useLinksState = () => useContext(LinksStateContext);
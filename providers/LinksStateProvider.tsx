"use client";

import { links, LinksProps } from '@/constants'
import linksReducer from '@/reducers/linksReducer'
import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'

interface LinksStateProviderProps {
    linksState : LinksProps[];
    dispatchLinksState: React.ActionDispatch<[action: any]>;
}

const LinksStateContext = createContext({} as LinksStateProviderProps)

const LinksStateProvider = ({children} : {children : React.ReactNode}) => {

    const [linksState, dispatchLinksState] = useReducer(linksReducer, links)


    return <LinksStateContext.Provider value={{linksState, dispatchLinksState}}>
    {children}
    </LinksStateContext.Provider>
}

export default LinksStateProvider;

export const useLinksState = () => useContext(LinksStateContext);
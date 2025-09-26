
import React from 'react'
import {Header, MobileMenu, Home} from "../Components/index";

const HomePage = () => {
    return <div className='w-full overflow-x-hidden'>
        <Header />
        <MobileMenu />
        <Home />
    </div>
}

export default HomePage
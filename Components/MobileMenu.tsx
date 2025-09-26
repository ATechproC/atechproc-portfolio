"use client";

import { links } from '@/constants';
import { cn } from '@/lib/utils';
import { useMobileMenu } from '@/providers/MobileMenuProvider';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return <>
        <div 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={cn('fixed top-0 left-0 hidden w-full h-screen',
            isMobileMenuOpen && "block"
        )} />
        <div className="fixed z-20 w-full px-3 py-2 md:hidden">
            <div className='flex-between'>
                <a href="#" className="text-[20px] font-bold text-white text-shadow-logo">A_Techpro_C</a>
                <FaBars
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='text-white transition-colors' />
            </div>
                <ul className={` ${isMobileMenuOpen ? "open": "close" } fixed top-0 flex flex-col h-screen gap-3 p-3 font-semibold text-center bg-dark-2 min-w-[200px]`}>
                    <div className='w-full flex-between'>
                    <a href="#" className="font-bold text-white text-md text-shadow-logoMobile">A_Techpro_C</a>
                    <FaTimes
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='text-white' />
                    </div>
                    {
                        links.map(({ name, href }) => {
                            return <li key={name}>
                                <a
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-md" href={href}> {name} </a>
                            </li>
                        })
                    }
                </ul>
        </div>
    </>
}

export default MobileMenu
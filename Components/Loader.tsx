"use client";

import { assets } from '@/constants'
import { cn } from '@/lib/utils';
import { useLoader } from '@/providers/LoaderProvider';
import Image from 'next/image'

const Loader = () => {

    const {isLoading} = useLoader();
    
    return <div className={cn('absolute left-1/2 hidden -translate-1/2 w-[130px] h-[130px]',
        isLoading && "block"
    )}>
        <Image
        src={assets.spinner}
        alt=''
        className='object-contain w-full h-full'
        />
    </div>
}

export default Loader
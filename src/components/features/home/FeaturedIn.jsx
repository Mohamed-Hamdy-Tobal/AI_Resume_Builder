import { Instagram, Linkedin, YoutubeIcon } from 'lucide-react'
import React from 'react'

const FeaturedIn = () => {
    return (
        <div className="mb-3">
            <h1 className='text-center mb-10 uppercase text-3xl font-bold'>Featured In</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 text-gray-500 gap-3'>
                <div className='flex items-center justify-center gap-2'>
                    <YoutubeIcon className='w-[20px] md:w-[40px] h-[20px] md:h-[40px]'/>
                    <span className='text-[18px] md:text-[22px] font-medium'>YouTube</span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Instagram className='w-[20px] md:w-[40px] h-[20px] md:h-[40px]'/>
                    <span className='text-[18px] md:text-[22px] font-medium'>Instagram</span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Linkedin className='w-[20px] md:w-[40px] h-[20px] md:h-[40px]'/>
                    <span className='text-[18px] md:text-[22px] font-medium'>Linkedin</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedIn
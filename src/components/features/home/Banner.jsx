import { Button } from '@/components/ui/button'
import { ArrowRight, VideoIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div class="h-[calc(100vh-62px)] flex flex-col justify-between items-center py-[100px] pb-[200px]">
            <div className="flex justify-center items-center">
                <div className='bg-[#eee] px-3 py-2 flex justify-between items-center gap-3 w-[260px] text-xs rounded-[15px]'>
                    <span className='bg-primary text-white rounded-[15px] w-[43px] text-center h-5 leading-5'>New</span>
                    <span className='flex items-center gap-1 text-xs'>Tubeguriji.com All new Apps <ArrowRight className='w-3 h-3' /> </span>
                </div>
            </div>

            <div className="flex justify-center items-center mt-3 flex-col">
                <h1 className='text-[25px] sm:text-[50px] font-bold mb-2 sm:mb-0'>Build Your Resume With <span className='text-primary'>AI</span></h1>
                <p className='text-gray-400 text-[14px] sm:text-[16px]'>Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
                <div className='flex justify-center items-center gap-3 mt-8 flex-wrap w-full'>
                    <Link to={'/auth/sign-in'}><Button>Get Started</Button></Link>
                    <Button variant='outline'><VideoIcon className='mr-1'/> Watch video</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner
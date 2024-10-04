import React, { useRef } from 'react'
import SkeletonResume from '@/components/features/resumeEdit/components/SkeletonResume'
import useGetResumeById from '@/hooks/useGetResumeById'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import ViewSection from '@/components/features/view/ViewSection'
import { Button } from '@/components/ui/button'
import Header from '@/components/common/Header/Header'
import { useReactToPrint } from 'react-to-print'
import { RWebShare } from "react-web-share";
import { ShareIcon } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'

const ResumeViewPage = () => {

    const { resumeId } = useParams()

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const { resume, loading } = useGetResumeById(resumeId);

    const location = useLocation();
    const { pathname } = location;

    const BASE_URL = import.meta.env.VITE_BASE_URL

    console.log("resume:",resume)

    const user = useUser()

    if (!user.isSignedIn && user.isLoaded) {
        return <Navigate to={'/auth/sign-in'}/>
    }

    return (
        <div className="view-page">
            <div >
                <Header />
                <div className="container">
                    <div className="mb-[50px] mt-[60px] md:mx-20 lg:mx-36">
                        <h1 className='text-center text-2xl font-medium text-primary'>Congrats! Your Ultimate AI generate Resume is ready !</h1>
                        <p className='text-center mt-2 text-gray-400'>Now you are ready to download your resume and you can share resume url with you'r friends and family</p>
                        <div className="flex justify-center items-center gap-4 mt-5">
                            <Button onClick={reactToPrintFn} className='w-[100px] flex justify-center items-center text-center'>Download</Button>
                            <Button className='w-[100px] flex justify-center items-center text-center'>
                                <RWebShare
                                    data={{
                                        text: "Hello every one, this my resume please open url to see it",
                                        url: `${BASE_URL}${pathname}`,
                                        title: `${resume?.firstName} ${resume?.lastName} Resume!`,
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                >
                                    <button className='flex justify-center items-center text-center gap-2'><ShareIcon className='w-5'/> Share</button>
                                </RWebShare>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {loading || !resume ? (
                    <div className="">
                        <div className='max-w-[600px] m-auto'>
                            <SkeletonResume />
                        </div>
                    </div>) : (
                    <div className='flex justify-center items-center pb-10'>
                        <div className='flex justify-start items-start h-full max-w-[600px]'>
                            <div ref={contentRef}>
                                <ViewSection resume={resume} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResumeViewPage
import React, { useEffect, useState } from 'react'
import SkeletonResume from '@/components/features/resumeEdit/components/SkeletonResume'
import FormSection from '@/components/features/resumeEdit/FormSection'
import PreviewSection from '@/components/features/resumeEdit/PreviewSection'
import { ResumeContext } from '@/context/ResumeContext'
import useGetResumeById from '@/hooks/useGetResumeById'
import { useParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import LoadingSpinner from '@/components/common/LoadingSpinner'

const EditResume = () => {

    const { resumeId } = useParams()

    const { resume, loading } = useGetResumeById(resumeId);

    const [resumeInfo, setResumeInfo] = useState(null)

    useEffect(() => {
        if (resume) {
            setResumeInfo({
                ...resume,
                resume_theme: resume?.resume_theme ? resume?.resume_theme : "#000"
            })
        }
    }, [resume])

    console.log("resume:", resume)

    const { user } = useUser()

    if (loading || !resume) {
        return <LoadingSpinner/>
    }

    if (user?.primaryEmailAddress.emailAddress !== resume?.userEmail) {
        return (
            <div className='flex justify-center items-center gap-3 flex-col min-h-[calc(100vh-63px)]'>
                <div className="image max-w-[500px]">
                    <img src='/imgs/not-found.png' alt='Page Not Found' className="w-full h-auto" />
                </div>
                <h1 className="text-xl font-semibold">This Page not found</h1>
            </div>
        )
    }

    return (
        <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className="edit-page py-10">
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <FormSection resume={resume} />
                        <div className='flex justify-start items-start h-full w-full'>
                            {loading || !resume ? <SkeletonResume /> : <PreviewSection resume={resume} />}
                        </div>
                    </div>
                </div>
            </div>
        </ResumeContext.Provider>
    )
}

export default EditResume
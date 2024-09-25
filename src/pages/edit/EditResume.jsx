import FormSection from '@/components/features/resumeEdit/FormSection'
import PreviewSection from '@/components/features/resumeEdit/PreviewSection'
import { ResumeContext } from '@/context/ResumeContext'
import dummy from '@/data/dummy'
import useGetResumeById from '@/hooks/useGetResumeById'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditResume = () => {

    const {resumeId} = useParams()

    const { resume, loading } = useGetResumeById(resumeId);

    const [resumeInfo, setResumeInfo] = useState(null)

    useEffect(() => {
        setResumeInfo({
            ...dummy,
            ...resume
        })
    }, [resume])

    // console.log("resume:", resume)

    return (
        <ResumeContext.Provider value={{resumeInfo, setResumeInfo}}>
            <div className="edit-page py-10">
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <FormSection resume={resume}/>
                        <PreviewSection resume={resume}/>
                    </div>
                </div>
            </div>
        </ResumeContext.Provider>
    )
}

export default EditResume
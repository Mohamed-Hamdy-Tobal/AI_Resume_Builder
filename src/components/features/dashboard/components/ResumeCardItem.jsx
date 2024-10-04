import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResumeIcon from './ResumeIcon'

const ResumeCardItem = ({ resume }) => {

    const navigate = useNavigate()

    const goToResume = () => {
        navigate(`/dashboard/resume/${resume.documentId}/edit`)
    }
    const viewResume = () => {
        navigate(`/dashboard/resume/${resume.documentId}/view`)
    }

    return (
        <div className='h-full cursor-pointer text-center min-h-[185px] xl:min-h-[278.44px]' onClick={goToResume}>
            <div className="p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 flex justify-center items-center h-full rounded-lg hover:scale-105 hover:shadow-md shadow-primary transition-all">
                <ResumeIcon className="icon h-auto" />
            </div>
            <h1 className='mt-2' onClick={viewResume}>{resume.title}</h1>
        </div>
    )
}

export default ResumeCardItem
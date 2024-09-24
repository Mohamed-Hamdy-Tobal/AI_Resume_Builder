import { Notebook } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResumeCardItem = ({resume}) => {

    const navigate = useNavigate()

    const goToResume = () => {
        navigate(`/dashboard/resume/${resume.documentId}/edit`)
    }

    return (
        <div className='h-full cursor-pointer' onClick={goToResume}>
            <div className="p-14 bg-secondary flex justify-center items-center h-full border border-primary rounded-lg hover:scale-105 hover:shadow-md shadow-primary transition-all">
                <Notebook/>
            </div>
            <h1>{resume.title}</h1>
        </div>
    )
}

export default ResumeCardItem
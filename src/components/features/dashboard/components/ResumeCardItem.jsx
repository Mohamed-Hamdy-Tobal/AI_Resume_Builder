import React from 'react'
import ResumeIcon from './ResumeIcon'
import { ResumeDropdown } from './ResumeDropdown'
import { useNavigate } from 'react-router-dom';

const ResumeCardItem = ({ resume, refetch }) => {

    const navigate = useNavigate();

    const viewResume = () => {
        navigate(`/my-resume/${resume.documentId}/view`)
    }

    console.log("resumedf",resume)

    return (
        <div className='first-letter:h-full relative cursor-pointer text-center min-h-[185px] xl:min-h-[278.44px] rounded-lg hover:scale-105 hover:shadow-md shadow-primary transition-all'>
            <div className="p-4 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 flex justify-between items-center h-full flex-col rounded-lg ">
                <div onClick={viewResume} className='resume-view mb-[43px] flex-1 w-full flex justify-center items-center'><ResumeIcon /></div>
                <div style={{
                    backgroundColor: resume?.resume_theme? resume?.resume_theme: "#000"
                }} className={`mt-2 flex justify-between rounded-b-lg py-1 px-2 items-center absolute bottom-0 left-0 w-full`}>
                    <h1 className='text-white text-[11px] sm:text-sm'>{resume.title}</h1>
                    <ResumeDropdown documentId={resume.documentId} refetch={refetch}/>
                </div>
            </div>
        </div>
    )
}

export default ResumeCardItem
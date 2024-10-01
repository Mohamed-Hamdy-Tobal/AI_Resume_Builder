import dummy from '@/data/dummy'
import { formatDate } from '@/utils/formatDate'
import { hasTruthyValue } from '@/utils/hasTruthyValue'
import React from 'react'
import './style.css'

const ProfessionalExperiencesPreview = ({ resumeInfo }) => {

    const customExperiences = resumeInfo?.experiences.length > 0 ? resumeInfo : dummy

    return (
        <div className='mt-5'>
            <h1
                className='font-bold text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                Professional Experiences
            </h1>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />
            <div className='mt-3'>
                {customExperiences?.experiences?.map((experience, index) => {
                    const toShow = hasTruthyValue(experience)
                    if (!toShow) return null
                    return (
                        <div key={index} className='my-5'>
                            {experience.title && (<h1 className='text-sm font-bold' style={{
                                color: resumeInfo?.themeColor
                            }}>{experience.title}</h1>)}
                            {(experience.companyName
                                || experience.city
                                || experience.state
                                || experience.startDate
                                || experience.endDate) && (<h2 className='text-xs flex justify-start items-start sm:justify-between sm:items-center flex-wrap'>
                                    {experience.companyName}, {experience.city}, {experience.state}
                                    <span>
                                        {formatDate(experience.startDate)} - {experience.currentlyWorking ? "Present" : formatDate(experience.endDate)}
                                    </span>
                                </h2>)}
                            {/* <p className='text-xs my-2'>{experience.workSummary}</p> */}
                            {experience.workSummary && (<div className='mt-1 text-sm refactor-summary' dangerouslySetInnerHTML={{ __html: experience.workSummary }} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfessionalExperiencesPreview
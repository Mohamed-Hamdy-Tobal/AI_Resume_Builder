import dummy from '@/data/dummy'
import { formatDate } from '@/utils/formatDate'
import { hasTruthyValue } from '@/utils/hasTruthyValue'
import React from 'react'

const EducationPreview = ({ resumeInfo }) => {

    const customEducation = resumeInfo?.education.length > 0 ? resumeInfo : dummy

    return (
        <div>
            <h1
                className='font-bold text-[12px] sm:text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000"
                }}
            >
                Education
            </h1>
            <hr style={{
                borderColor: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000"
            }} />

            <div>
                {customEducation?.education?.map((education, index) => {
                    const toShow = hasTruthyValue(education)
                    if (!toShow) return null
                    return (
                        <div key={index} className='my-5'>
                            <h1 className='text-[12px] sm:text-sm font-bold' style={{
                                color: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000"
                            }}>{education.universityName}</h1>
                            <p className='text-[10px] sm:text-xs flex justify-between items-start gap-2'>
                                <span className='flex-1'>{education.degree} {education.major && "in"} {education.major}</span>
                                <span className='flex-1 flex justify-end'>{formatDate(education.startDate)} {education.endDate && "-"} {formatDate(education.endDate)}</span>
                            </p>
                            <p className='text-[10px] sm:text-xs my-2'>{education.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EducationPreview
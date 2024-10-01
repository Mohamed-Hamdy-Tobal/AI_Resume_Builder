import dummy from '@/data/dummy'
import { formatDate } from '@/utils/formatDate'
import { hasTruthyValue } from '@/utils/hasTruthyValue'
import React from 'react'

const EducationPreview = ({ resumeInfo }) => {

    const customEducation = resumeInfo?.education.length > 0 ? resumeInfo : dummy

    return (
        <div>
            <h1
                className='font-bold text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                Education
            </h1>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            <div>
                {customEducation?.education?.map((education, index) => {
                    const toShow = hasTruthyValue(education)
                    if (!toShow) return null
                    return (
                        <div key={index} className='my-5'>
                            <h1 className='text-sm font-bold' style={{
                                color: resumeInfo?.themeColor
                            }}>{education.universityName}</h1>
                            <p className='text-xs flex justify-between items-center'>
                                {education.degree} {education.major && "in"} {education.major}
                                <span>{formatDate(education.startDate)} {education.endDate && "-"} {formatDate(education.endDate)}</span>
                            </p>
                            <p className='text-xs my-2'>{education.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EducationPreview
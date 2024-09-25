import React from 'react'

const EducationPreview = ({ resumeInfo }) => {
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
                {resumeInfo?.education?.map((education, index) => (
                    <div key={index} className='my-5'>
                        <h1 className='text-sm font-bold' style={{
                            color: resumeInfo?.themeColor
                        }}>{education.universityName}</h1>
                        <p className='text-xs flex justify-between items-center'>
                            {education.degree} in {education.major}
                            <span>{education.startDate} - {education.endDate}</span>
                        </p>
                        <p className='text-xs my-2'>{education.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationPreview
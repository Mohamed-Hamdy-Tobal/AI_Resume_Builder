import React from 'react'

const ProfessionalExperiencesPreview = ({ resumeInfo }) => {
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
                {resumeInfo?.experiences?.map((experience, index) => (
                    <div key={index} className='my-5'>
                        <h1 className='text-sm font-bold' style={{
                            color: resumeInfo?.themeColor
                        }}>{experience.title}</h1>
                        <h2 className='text-xs flex justify-start items-start sm:justify-between sm:items-center flex-wrap'>
                            {experience.companyName}, {experience.city}, {experience.state}
                            <span>{experience.startDate} - {experience.currentlyWorking ? "Present" : experience.endDate}</span>
                        </h2>
                        <p className='text-xs my-2'>{experience.workSummary}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfessionalExperiencesPreview
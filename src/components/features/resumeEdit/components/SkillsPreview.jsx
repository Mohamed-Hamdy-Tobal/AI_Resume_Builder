import React from 'react'

const SkillsPreview = ({ resumeInfo }) => {
    return (
        <div className='mt-5'>
            <h1
                className='font-bold text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                Skills
            </h1>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />
            <div className='mt-4 grid grid-cols-2 gap-3 xl:gap-x-8'>
                {resumeInfo?.skills.map((skill, index) => (
                    <div key={index} className='flex items-center justify-between gap-1'>
                        <h2 className='text-xs'>{skill.name}</h2>
                        <div className="h2 w-[120px] bg-gray-200">
                            <div className="h-2" style={{
                                backgroundColor: resumeInfo?.themeColor,
                                width: skill?.rating+"%"
                            }}>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview
import dummy from '@/data/dummy'
import React from 'react'

const SkillsPreview = ({ resumeInfo }) => {

    const customSkills = resumeInfo?.skills.length > 0 ? resumeInfo : dummy

    return (
        <div className=''>
            <h1
                className='font-bold text-[12px] sm:text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000"
                }}
            >
                Skills
            </h1>
            <hr style={{
                borderColor: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000"
            }} />
            <div className='mt-4 grid grid-cols-2 gap-y-3 gap-x-10 xl:gap-x-20'>
                {customSkills?.skills?.map((skill, index) => (
                    <div key={index} className='flex items-center justify-between gap-1'>
                        <h2 className='text-[10px] sm:text-xs min-w-[50px]'>{skill.title}</h2>
                        {skill.title && (
                            <div className="h2 w-[120px] bg-gray-200">
                                <div className="h-2" style={{
                                    backgroundColor: resumeInfo?.resume_theme ? resumeInfo?.resume_theme: "#000",
                                    width: (skill?.rating * 20) + "%"
                                }}>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview
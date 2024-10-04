import dummy from '@/data/dummy'
import React from 'react'

const SkillsPreview = ({ resumeInfo }) => {

    const customSkills = resumeInfo?.skills.length > 0 ? resumeInfo : dummy

    return (
        <div className=''>
            <h1
                className='font-bold text-[12px] sm:text-sm text-center mb-2'
                style={{
                    color: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
                }}
            >
                Skills
            </h1>
            <hr style={{
                borderColor: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
            }} />
            <div className='mt-4 grid grid-cols-2 gap-3 xl:gap-x-8'>
                {customSkills?.skills?.map((skill, index) => (
                    <div key={index} className='flex items-center justify-between gap-1'>
                        <h2 className='text-[10px] sm:text-xs'>{skill.title}</h2>
                        {skill.title && (
                            <div className="h2 w-[120px] bg-gray-200">
                                <div className="h-2" style={{
                                    backgroundColor: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000",
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
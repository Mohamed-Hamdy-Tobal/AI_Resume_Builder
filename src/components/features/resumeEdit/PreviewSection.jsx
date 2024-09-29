import React, { useContext } from 'react'
import PersonalDetailsPreview from './previewComponents/PersonalDetailsPreview'
import { ResumeContext } from '@/context/ResumeContext'
import SummaryPreview from './previewComponents/SummaryPreview'
import ProfessionalExperiencesPreview from './previewComponents/ProfessionalExperiencesPreview'
import SkillsPreview from './previewComponents/SkillsPreview'
import EducationPreview from './previewComponents/EducationPreview'

const PreviewSection = ({resume}) => {

    const {resumeInfo} = useContext(ResumeContext)

    return (
        <div 
        className='flex flex-col shadow-lg p-9 md:p-14 border-t-[20px] w-full'
        style={{
            borderColor: resumeInfo?.themeColor
        }}
        >
            {/* Personal Data */}
            <PersonalDetailsPreview resumeInfo={resumeInfo}/>

            {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo}/>

            {/* Professional experiences */}
            <ProfessionalExperiencesPreview resumeInfo={resumeInfo}/>

            {/* Education */}
            <EducationPreview resumeInfo={resumeInfo}/>

            {/* Skills */}
            <SkillsPreview resumeInfo={resumeInfo}/>
        </div>
    )
}

export default PreviewSection
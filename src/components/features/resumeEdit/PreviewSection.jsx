import React, { useContext } from 'react'
import PersonalDetailsPreview from './components/PersonalDetailsPreview'
import { ResumeContext } from '@/context/ResumeContext'
import SummaryPreview from './components/SummaryPreview'
import ProfessionalExperiencesPreview from './components/ProfessionalExperiencesPreview'
import SkillsPreview from './components/SkillsPreview'
import EducationPreview from './components/EducationPreview'

const PreviewSection = () => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeContext)

    return (
        <div 
        className='flex flex-col shadow-lg h-full p-14 border-t-[20px]'
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
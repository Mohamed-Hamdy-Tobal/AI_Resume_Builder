import React  from 'react'
import PersonalDetailsPreview from '../resumeEdit/previewComponents/PersonalDetailsPreview'
import SummaryPreview from '../resumeEdit/previewComponents/SummaryPreview'
import ProfessionalExperiencesPreview from '../resumeEdit/previewComponents/ProfessionalExperiencesPreview'
import SkillsPreview from '../resumeEdit/previewComponents/SkillsPreview'
import EducationPreview from '../resumeEdit/previewComponents/EducationPreview'

const ViewSection = ({resume}) => {

    return (
        <div 
        className='flex flex-col shadow-lg p-9 md:p-14 border-t-[20px] w-full'
        style={{
            borderColor: resume?.resume_theme ? resume?.resume_theme: "#000"
        }}
        >
            {/* Personal Data */}
            <PersonalDetailsPreview resumeInfo={resume}/>

            {/* Summary */}
            <SummaryPreview resumeInfo={resume}/>

            {/* Professional experiences */}
            <ProfessionalExperiencesPreview resumeInfo={resume}/>

            {/* Education */}
            <EducationPreview resumeInfo={resume}/>

            {/* Skills */}
            <SkillsPreview resumeInfo={resume}/>
        </div>
    )
}

export default ViewSection
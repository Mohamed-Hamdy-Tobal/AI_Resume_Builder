import React, { useState } from 'react'
import PersonalDetailsForm from './FormComponents/PersonalDetailsForm'
import SummaryForm from './FormComponents/SummaryForm'
import ExperiencesForm from './FormComponents/ExperiencesForm'
import EducationForm from './FormComponents/EducationForm'
import SkillsForm from './FormComponents/SkillsForm'
import Controls from './FormComponents/Controls'

const FormSection = ({resume}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    const [controls, setControls] = useState([
        {section: 1, active: false},
        {section: 2, active: false},
        {section: 3, active: false},
        {section: 4, active: false},
    ])

    console.log("controls:",controls)
    console.log("resume:",resume)

    return (
        <div>
            {/* Controls */}
            <Controls controls={controls} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            {/* Personal Details */}
            {activeIndex === 1 && <PersonalDetailsForm setControls={setControls}/>}

            {/* Summary */}
            {activeIndex === 2 && <SummaryForm setControls={setControls}/>}

            {/* Professional experiences */}
            {activeIndex === 3 && <ExperiencesForm />}

            {/* Education */}
            {activeIndex === 4 && <EducationForm />}

            {/* Skills */}
            {activeIndex === 5 && <SkillsForm />}
        </div>
    )
}

export default FormSection
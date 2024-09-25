import React from 'react'

const SummaryPreview = ({ resumeInfo }) => {
    return (
        <p className='text-xs'>{resumeInfo?.summary ? resumeInfo?.summary: ""}</p>
    )
}

export default SummaryPreview
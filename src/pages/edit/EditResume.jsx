import React from 'react'
import { useParams } from 'react-router-dom'

const EditResume = () => {

    const param = useParams()

    console.log("param:",param.resumeId)

    return (
        <div>EditResume</div>
    )
}

export default EditResume
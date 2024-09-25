import React from 'react'

const PersonalDetailsPreview = ({ resumeInfo }) => {

    return (
        <div>
            <h1
                className='font-bold text-xl text-center'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {resumeInfo?.firstName} {resumeInfo?.lastName}
            </h1>
            <h2 className='font-medium text-sm text-center'>
                {resumeInfo?.title}
            </h2>
            <p
                className='font-normal text-xs text-center'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {resumeInfo?.address}
            </p>
            <div className='flex justify-between items-center pt-2'>
                <h2 className='font-normal text-xs' style={{
                    color: resumeInfo?.themeColor
                }}>{resumeInfo?.phone}</h2>
                <h2 className='font-normal text-xs' style={{
                    color: resumeInfo?.themeColor
                }}>{resumeInfo?.email}</h2>
            </div>
            <hr className='border-[1.5px] my-2' style={{
                borderColor: resumeInfo?.themeColor
            }} />
        </div>
    )
}

export default PersonalDetailsPreview
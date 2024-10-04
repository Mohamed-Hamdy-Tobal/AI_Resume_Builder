import React from 'react'

const PersonalDetailsPreview = ({ resumeInfo }) => {

    return (
        <div>
            <h1
                className='font-bold text-lg sm:text-xl text-center'
                style={{
                    color: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
                }}
            >
                {resumeInfo?.firstName} {resumeInfo?.lastName}
                {!resumeInfo?.firstName && "Add You'r Name"}
            </h1>
            <h2 className='font-medium text-[12px] sm:text-sm text-center'>
                {resumeInfo?.title}
                {!resumeInfo?.title && "Add You'r Title"}
            </h2>
            <p
                className='font-normal text-[10px] sm:text-xs text-center'
                style={{
                    color: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
                }}
            >
                {resumeInfo?.address}
                {!resumeInfo?.address && "Add You'r Address"}
            </p>
            <div className='flex justify-between items-center pt-2'>
                <h2 className='font-normal text-[10px] sm:text-xs' style={{
                    color: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
                }}>
                    {resumeInfo?.phone}
                    {!resumeInfo?.phone && "Add You'r Phone"}
                </h2>
                <h2 className='font-normal text-[10px] sm:text-xs' style={{
                    color: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
                }}>
                    {resumeInfo?.email}
                    {!resumeInfo?.email && "Add You'r Phone"}
                </h2>
            </div>
            <hr className='border-[1.5px] my-2' style={{
                borderColor: resumeInfo?.themeColor ? resumeInfo?.themeColor: "#000"
            }} />
        </div>
    )
}

export default PersonalDetailsPreview
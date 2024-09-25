import React from 'react'

const SectionFormLayout = ({ children, title, info }) => {

    return (
        <div className='p-5 rounded-lg shadow-lg border-t-primary border-t-4 mt-4'>
            {title && <h2 className="font-bold tex-lg">{title}</h2>}
            {info && <p>{info}</p>}
            <div className='mt-5'>
                {children}
            </div>
        </div>
    )
}

export default SectionFormLayout
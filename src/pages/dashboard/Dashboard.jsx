import AddResume from '@/components/features/dashboard/AddResume'
import UserResumes from '@/components/features/dashboard/UserResumes'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='dashboard py-10'>
            <div className="container">
                <h1 className='text-3xl font-bold text-primary'>My Resume</h1>
                <p className='text-[#999]'>Start Creating AI Resume to your next job role</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10'>
                    <AddResume />
                    <UserResumes/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
import userUserResume from '@/hooks/userUserResume';
import React from 'react'
import SkeletonCard from './components/SkeletonCard';
import ResumeCardItem from './components/ResumeCardItem';

const UserResumes = () => {

    const { userResume, loading } = userUserResume();

    console.log("userResume: ", userResume)

    if (loading) {
        return <SkeletonCard/>
    }

    return (
        <>
            {userResume.length > 0 && userResume.map((resume, index) => (
                <ResumeCardItem resume={resume} key={index}/>
            ))}
        </>
    )
}

export default UserResumes
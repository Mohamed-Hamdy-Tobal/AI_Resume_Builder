import userUserResume from '@/hooks/userUserResume';
import React from 'react'
import SkeletonCard from './components/SkeletonCard';
import ResumeCardItem from './components/ResumeCardItem';

const UserResumes = () => {

    const { userResume, loading, refetch } = userUserResume();

    if (loading) {
        return <SkeletonCard/>
    }

    return (
        <>
            {userResume.length > 0 && userResume.map((resume, index) => (
                <ResumeCardItem resume={resume} key={index} refetch={refetch}/>
            ))}
        </>
    )
}

export default UserResumes
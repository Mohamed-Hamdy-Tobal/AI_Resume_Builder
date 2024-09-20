import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {

    const user = useUser()

    return (
        <div className='py-3 px-5 flex justify-between items-center shadow-md'>
            <Link to={'/'}><img src='/logo.svg' className='w-[100px]' /></Link>
            {user.isSignedIn ? (
                <div className='flex justify-start items-center gap-3'>
                    <Link to={'/dashboard'}><Button variant="outline">Dashboard</Button></Link>
                    <UserButton />
                </div>
            ) : (
                <Link to={'/auth/sign-in'}><Button>Get Started</Button></Link>
            )}
        </div>
    )
}

export default Header
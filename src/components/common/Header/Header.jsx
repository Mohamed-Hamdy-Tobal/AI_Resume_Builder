import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {

    const user = useUser()

    return (
        <header className='py-3 shadow-md'>
            <div className="container">
                <div className='flex justify-between items-center'>
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
            </div>
        </header>
    )
}

export default Header
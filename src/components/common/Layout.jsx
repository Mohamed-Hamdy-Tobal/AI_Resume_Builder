import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header/Header'

const Layout = () => {

    const user = useUser()
    console.log("User: ", user)

    if (!user.isSignedIn && user.isLoaded) {
        return <Navigate to={'/auth/sign-in'}/>
    }

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout
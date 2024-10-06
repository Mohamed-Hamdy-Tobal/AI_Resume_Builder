import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthLayout = ({children}) => {

    const user = useUser()

    if (!user.isSignedIn && user.isLoaded) {
        return <Navigate to={'/auth/sign-in'}/>
    }

    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout
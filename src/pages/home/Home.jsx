import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/auth/sign-in");
    };
    const handleNavigateDash = () => {
        navigate("/dashboard");
    };

    return (
        <div>
            <div>Home</div>
            <Button onClick={handleNavigate}>Sign In</Button>
            <Button onClick={handleNavigateDash}>Dashboard</Button>
        </div>
    );
};

export default Home;

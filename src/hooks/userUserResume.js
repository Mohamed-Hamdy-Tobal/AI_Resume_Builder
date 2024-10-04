import api from '@/lib/api';
import { useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const userUserResume = () => {
    const { isSignedIn, user } = useUser();

    const [userResume, setUserResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserResumes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(
                `/api/user-resumes?populate=*&filters[userEmail][$eq]=${user?.primaryEmailAddress.emailAddress}`
            );
            setUserResume(response.data.data);
        } catch (err) {
            setError(err);
            toast.error("Error During Get Your Resumes!")
        } finally {
            setLoading(false);
        }
    };

    // Refetch function
    const refetch = () => {
        fetchUserResumes();
    };

    useEffect(() => {
        if (isSignedIn) {
            fetchUserResumes();
        }
    }, [isSignedIn]);

    return { userResume, loading, error, refetch };
};

export default userUserResume;

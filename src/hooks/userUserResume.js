import api from '@/lib/api';
import { useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const userUserResume = () => {

    const { isSignedIn, user } = useUser()

    const [userResume, setUserResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserResumes = async () => {
            try {
                const response = await api.get(`/api/user-resumes?populate=*?filters[userEmail][$eq]=${user?.primaryEmailAddress.emailAddress}`);
                setUserResume(response.data.data);
            } catch (err) {
                setError(err);
                toast.error("Error During Get Your Resumes!")
            } finally {
                setLoading(false);
            }
        };

        if (isSignedIn) {
            fetchUserResumes();
        }
    }, [isSignedIn]);

    return { userResume, loading, error };
};

export default userUserResume;

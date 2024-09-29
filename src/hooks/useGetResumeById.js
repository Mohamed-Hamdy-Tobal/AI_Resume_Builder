import api from '@/lib/api';
import { useUser } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useGetResumeById = (id) => {

    const { isSignedIn } = useUser()

    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await api.get(`/api/user-resumes/${id}?populate=*`);
                setResume(response.data.data);
            } catch (err) {
                setError(err);
                console.log("error:",err)
                toast.error("Error During Get Your Resumes!", err.error.message)
            } finally {
                setLoading(false);
            }
        };

        if (isSignedIn) {
            fetchResume();
        }
    }, [isSignedIn]);

    return { resume, loading, error };
};

export default useGetResumeById;

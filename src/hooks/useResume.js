import { useState } from 'react'
import api from '@/lib/api'
import { useUser } from '@clerk/clerk-react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useResume = () => {

    const navigate = useNavigate()

    const { user } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)


    const createResume = async (dataResume) => {

        setIsLoading(true)

        const formData = {
            data: {
                ...dataResume,
                userName: user.fullName,
                userEmail: user.primaryEmailAddress.emailAddress,
            }
        }

        console.log("formData:", formData)

        try {
            const response = await api.post('/api/user-resumes', formData)
            console.log("Response cart:", response)
            setData(response.data.data)
            setIsSuccess(true)
            navigate(`/dashboard/resume/${formData.data.resumeid}/edit`)
            // toast.success("Success Notification !");
            return response.data
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error('Failed to add to cart', error)
            toast.error("Error When Create!")
            return Promise.reject(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { createResume, isLoading, isSuccess, isError, data }
}

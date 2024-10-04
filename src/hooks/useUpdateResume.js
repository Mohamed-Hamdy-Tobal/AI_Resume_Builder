import { useContext, useState } from 'react'
import api from '@/lib/api'
import { useUser } from '@clerk/clerk-react'
import { useToast } from "@/hooks/use-toast"
import { ResumeContext } from '@/context/ResumeContext'

export const useUpdateResume = (id) => {

    const { toast } = useToast()

    const { setResumeInfo } = useContext(ResumeContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

    const updateResume = async (dataResume) => {

        setIsLoading(true)

        const formData = {
            data: {
                ...dataResume,
            }
        }

        console.log("formData:", formData)

        try {
            const response = await api.put(`/api/user-resumes/${id}/`, formData)
            console.log("Response cart:", response)
            setData(response.data.data)
            setIsSuccess(true)
            setResumeInfo((prev) => ({
                ...prev,
                ...response.data.data
            }));
            toast({
                title: "Successfully send data",
                description: "Your data has been updated successfully",
            })
            return response.data
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error('Failed to add to cart', error)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
            return Promise.reject(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { updateResume, isLoading, isSuccess, isError, data }
}

export const useDeleteResume = (refetch) => {

    const { toast } = useToast()

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const deleteResume = async (id) => {

        setIsLoading(true)

        try {
            const response = await api.delete(`/api/user-resumes/${id}/`)
            console.log("Response cart:", response)
            setIsSuccess(true)
            if (refetch) {
                refetch(); // Trigger data re-fetch
            }
            toast({
                title: "Successfully Delete!",
                description: "Your resume has been deleted successfully",
            })
            return response.data
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error('Failed to add to cart', error)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
            return Promise.reject(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { deleteResume, isLoading, isSuccess, isError }
}

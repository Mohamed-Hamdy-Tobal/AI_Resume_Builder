import { useState } from 'react'
import { toast } from 'react-toastify';
import { AIchatSession } from '@/lib/AIModal';

export const useGenerate = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)

    const GenerateFormAI = async (description) => {

        setIsLoading(true)

        try {
            const response = await AIchatSession.sendMessage(description)
            console.log("Response cart:", response.response.text())
            setData(response.response.text())
            setIsSuccess(true)
            return response
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

    return { GenerateFormAI, isLoading, isSuccess, isError, data }
}

import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext, useEffect, useState } from 'react'
import SectionFormLayout from './SectionFormLayout'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useUpdateResume } from '@/hooks/useUpdateResume'
import Button from '@/components/common/Button'
import { useParams } from 'react-router-dom'
import { Textarea } from '@/components/ui/textarea'
import { Brain } from 'lucide-react'
import { AIchatSession } from '@/lib/AIModal'


const FormSchema = z.object({
    summary: z
        .string()
        .min(10, {
            message: "summary must be at least 10 characters.",
        })
});

const SummaryForm = ({ setControls }) => {

    const { resumeId } = useParams()

    const { resumeInfo } = useContext(ResumeContext)

    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)

    const [loadingAI, setLoadingAI] = useState(false)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            summary: resumeInfo?.summary || "",
        },
    })
    const { reset } = form;

    function onSubmit(data) {
        const finalData = {
            ...data
        }
        console.log("DATA: ", finalData)
        updateResume(finalData)
    }

    const GenerateSummaryFormAI = async () => {
        setLoadingAI(true)
        const description = `Job Title is ${resumeInfo.title}. Based on this job title, generate a concise and professional summary for my resume. Avoid asking for additional information or suggestions, and provide only the summary.`;
        console.log("description: ", description)
        const results = await AIchatSession.sendMessage(description)
        console.log(results.response.text())
        setLoadingAI(false)

        if (results)  {
            reset({
                summary: results.response.text()
            });
        }
    }

    useEffect(() => {
        const { summary } = resumeInfo || {};

        if (isSuccess || summary) {
            setControls((prevControls) => {
                return prevControls.map((control, index) => {
                    if (index === 1) {
                        return { ...control, active: true };
                    }
                    return control;
                });
            });
        }
    }, [resumeInfo, isSuccess, setControls]);


    return (
        <SectionFormLayout
            title="Summary"
            info="Add summary for your job title"
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormField
                        control={form.control}
                        name="summary"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex justify-between items-center gap-3 flex-wrap">
                                    <FormLabel>Add Summary</FormLabel>
                                    <Button isLoading={loadingAI} onClick={GenerateSummaryFormAI} type='button' variation={'outline-primary'} size='sm' className={'border-primary text-primary'}><Brain className='h-4 w-4' /> Generate from AI</Button>
                                </div>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="min-h-[150px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button isLoading={isLoading} type="submit">Save</Button>
                </form>
            </Form>
        </SectionFormLayout>
    )
}

export default SummaryForm
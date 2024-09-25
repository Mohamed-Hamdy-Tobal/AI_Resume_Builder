import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext, useEffect } from 'react'
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
import { Input } from "@/components/ui/input"
import { useUpdateResume } from '@/hooks/useUpdateResume'
import Button from '@/components/common/Button'
import { useParams } from 'react-router-dom'
import { Textarea } from '@/components/ui/textarea'
import { Brain } from 'lucide-react'


const FormSchema = z.object({
    summary: z
        .string()
        .min(10, {
            message: "summary must be at least 10 characters.",
        })
});

const SummaryForm = ({ setControls }) => {

    const { resumeId } = useParams()

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)

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
                                    <Button type='button' variation={'outline-primary'} size='sm' className={'border-primary text-primary'}><Brain className='h-4 w-4'/> Generate from AI</Button>
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
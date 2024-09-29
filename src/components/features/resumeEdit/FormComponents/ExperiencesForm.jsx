import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext, useEffect, useState } from 'react'
import SectionFormLayout from './SectionFormLayout'
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm, useFormContext, useWatch } from "react-hook-form"
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
import { Input } from '@/components/ui/input'
import { Brain, Trash } from 'lucide-react'
import ReachTextEditor from '@/components/common/ReachTextEditor'
import isEqual from 'lodash.isequal';
import { useGenerate } from '@/hooks/useGenerate'
import { useToast } from "@/hooks/use-toast"

const FormSchema = z.object({
    experiences: z.array(
        z.object({
            title: z.string().min(1, "Title is required"),
            companyName: z.string().min(1, "Company name is required"),
            city: z.string().min(1, "City is required"),
            state: z.string().min(1, "State is required"),
            startDate: z.string().min(1, "Start date is required"),
            endDate: z.string().min(1, "End date is required"),
            workSummary: z.string().min(1, "Work summary is required"),
        })
    ).nonempty("At least one experience is required")
});


const ExperiencesForm = ({ setControls, resumeFetched }) => {

    const { resumeId } = useParams()

    const { toast } = useToast()

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)


    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)
    const { GenerateFormAI, isLoading: isLoadingAI, isSuccess: isSuccessAI, data: dataGenerated } = useGenerate()

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            experiences: resumeInfo?.experiences || [],
        },
    })
    const { control, getValues, setValue } = form;

    const watchedValues = useWatch({ control });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experiences'
    });

    const addNewExperience = () => {
        append({
            id: null,
            title: '',
            companyName: '',
            city: '',
            state: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            workSummary: '',
        });
    };

    function onSubmit(data) {
        const finalData = {
            ...data
        }
        console.log("DATA: ", finalData)
        updateResume(finalData)
    }

    const GenerateSummaryFormAI = (index) => {

        const myTitle = form.getValues(`experiences.${index}.title`)

        if (myTitle) {
            const description = `Position Title is ${myTitle}. Based on this position title, give me 5-7 bullet points for my experience in the resume. Avoid asking for additional information or suggestions, and provide only the summary.`;
            GenerateFormAI(description).then((data) => {
                if (data) {
                    const cleanData = data.replace(/```html|```/g, "");
                    setValue(`experiences.${index}.workSummary`, cleanData);
                }
            });
        } else {
            toast({
                title: "Please Add Position Title!",
                description: "Your Input Title Is Empty"
            })
        }

    }


    useEffect(() => {
        const { experiences } = resumeFetched || {};

        if (isSuccess || experiences?.length > 0) {
            setControls((prevControls) => {
                return prevControls.map((control, index) => {
                    if (index === 2) {
                        return { ...control, active: true };
                    }
                    return control;
                });
            });
        }
    }, [resumeInfo, isSuccess, setControls]);


    useEffect(() => {
        if (resumeInfo) {
            const hasChanges = !isEqual(watchedValues['experiences'], resumeInfo['experiences']);

            if (hasChanges) {
                console.log("CHANGE****");
                setResumeInfo((prev) => ({
                    ...prev,
                    experiences: watchedValues?.experiences,
                }));
            }
        }
    }, [watchedValues, resumeInfo, setResumeInfo])



    return (
        <SectionFormLayout
            title="Professional Experiences"
            info="Add your previous job experiences"
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {fields.map((experience, index) => (
                        <div key={experience.id}>
                            <div className="flex justify-end items-center mb-2">
                                <Button
                                    variation='danger'
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="text-white"
                                >
                                    <Trash />
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <FormField
                                    control={control}
                                    name={`experiences.${index}.title`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Job Title"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.companyName`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Company Name"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.city`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="City"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.state`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="State"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.startDate`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Start Date</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="date"
                                                    {...field}
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`experiences.${index}.endDate`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>End Date</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="date"
                                                    {...field}
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={control}
                                name={`experiences.${index}.workSummary`}
                                render={({ field }) => {
                                    const { setValue, watch } = useFormContext();
                                    const workSummary = watch(`experiences.${index}.workSummary`, field.value);

                                    const handleEditorChange = (e) => {
                                        setValue(`experiences.${index}.workSummary`, e.target.value);
                                    };

                                    return (
                                        <FormItem className='mt-5'>
                                            <div className="flex justify-between items-center gap-3 flex-wrap">
                                                <FormLabel>Work Summary</FormLabel>
                                                <Button
                                                    isLoading={isLoadingAI}
                                                    onClick={() => GenerateSummaryFormAI(index)}
                                                    type='button'
                                                    variation={'outline-primary'}
                                                    size='sm'
                                                    className={'border-primary text-primary'}
                                                >
                                                    <Brain className='h-4 w-4' /> Generate from AI
                                                </Button>
                                            </div>
                                            <FormControl>
                                                <ReachTextEditor value={workSummary} onChange={handleEditorChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                    ))}

                    <div className="flex justify-between items-center">
                        <Button isLoading={isLoading} type="submit">Save</Button>
                        <Button variation='outline-primary' type="button" onClick={addNewExperience}>+ Add More Experience</Button>
                    </div>
                </form>
            </Form>
        </SectionFormLayout>
    )
}

export default ExperiencesForm
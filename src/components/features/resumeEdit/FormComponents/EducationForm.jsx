import { ResumeContext } from '@/context/ResumeContext'
import React, { useContext, useEffect } from 'react'
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

const FormSchema = z.object({
    education: z.array(
        z.object({
            universityName: z.string().min(1, "University name is required"),
            major: z.string().min(1, "Major is required"),
            degree: z.string().min(1, "Degree is required"),
            startDate: z.string().min(1, "Start date is required"),
            endDate: z.string().min(1, "End date is required"),
            description: z.string().min(1, "Description is required"),
        })
    ).nonempty("At least one education is required")
});


const EducationForm = ({ setControls, resumeFetched }) => {

    const { resumeId } = useParams()

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            education: resumeInfo?.education || [],
        },
    })
    const { control } = form;

    const watchedValues = useWatch({ control });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education'
    });

    const addNewEducation = () => {
        append({
            id: null,
            universityName: '',
            major: '',
            degree: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            description: '',
        });
    };

    function onSubmit(data) {
        const finalData = {
            ...data
        }
        console.log("DATA: ", finalData)
        updateResume(finalData)
    }


    useEffect(() => {
        const { education } = resumeFetched || {};

        if (isSuccess || education?.length > 0) {
            setControls((prevControls) => {
                return prevControls.map((control, index) => {
                    if (index === 3) {
                        return { ...control, active: true };
                    }
                    return control;
                });
            });
        }
    }, [resumeInfo, isSuccess, setControls]);


    useEffect(() => {
        if (resumeInfo) {
            const hasChanges = !isEqual(watchedValues['education'], resumeInfo['education']);

            if (hasChanges) {
                console.log("CHANGE****");
                setResumeInfo((prev) => ({
                    ...prev,
                    education: watchedValues?.education,
                }));
            }
        }
    }, [watchedValues, resumeInfo, setResumeInfo])



    return (
        <SectionFormLayout
            title="Education"
            info="Add your education details"
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {fields.map((education, index) => (
                        <div key={education.id} className='p-3 border border-gray-300 rounded-md'>
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

                            <FormField
                                control={control}
                                name={`education.${index}.universityName`}
                                render={({ field }) => (
                                    <FormItem className='mb-3'>
                                        <FormLabel>University Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="University Name"
                                                className="input-class"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <FormField
                                    control={control}
                                    name={`education.${index}.degree`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Degree</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Degree"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`education.${index}.major`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Major</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Major"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`education.${index}.startDate`}
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
                                    name={`education.${index}.endDate`}
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
                                name={`education.${index}.description`}
                                render={({ field }) => {
                                    const { setValue, watch } = useFormContext();
                                    const description = watch(`education.${index}.description`, field.value);

                                    const handleEditorChange = (e) => {
                                        setValue(`education.${index}.description`, e.target.value);
                                    };

                                    return (
                                        <FormItem className='mt-5'>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <ReachTextEditor value={description} onChange={handleEditorChange} />
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
                        <Button variation='outline-primary' type="button" onClick={addNewEducation}>+ Add More Educations</Button>
                    </div>
                </form>
            </Form>
        </SectionFormLayout>
    )
}

export default EducationForm
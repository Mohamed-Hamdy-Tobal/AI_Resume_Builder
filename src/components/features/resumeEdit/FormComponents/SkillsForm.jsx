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
import StarsComponent from './StarsComponent'

const FormSchema = z.object({
    skills: z.array(
        z.object({
            title: z.string().min(1, "Skill name is required"),
            rating: z.number().min(0, "Rating must be 0 or higher")
        })
    ).nonempty("At least one skills is required")
});


const SkillsForm = ({ setControls, resumeFetched }) => {

    const { resumeId } = useParams()

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            skills: resumeInfo?.skills || [],
        },
    })
    const { control } = form;

    const watchedValues = useWatch({ control });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'skills'
    });

    const addNewSkill = () => {
        append({
            id: null,
            title: '',
            rating: 0,
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
        const { skills } = resumeFetched || {};

        if (isSuccess || skills?.length > 0) {
            setControls((prevControls) => {
                return prevControls.map((control, index) => {
                    if (index === 4) {
                        return { ...control, active: true };
                    }
                    return control;
                });
            });
        }
    }, [resumeInfo, isSuccess, setControls]);


    useEffect(() => {
        if (resumeInfo) {
            const hasChanges = !isEqual(watchedValues['skills'], resumeInfo['skills']);

            if (hasChanges) {
                console.log("CHANGE****");
                setResumeInfo((prev) => ({
                    ...prev,
                    skills: watchedValues?.skills,
                }));
            }
        }
    }, [watchedValues, resumeInfo, setResumeInfo])


    console.log("watchedValues:", watchedValues)

    return (
        <SectionFormLayout
            title="Skills"
            info="Add your professional key skills"
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {fields.map((skills, index) => (
                        <div key={skills.id} className='p-3 border border-gray-300 rounded-md'>
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

                            <div className="grid grid-cols-4 gap-3">
                                <FormField
                                    control={control}
                                    name={`skills.${index}.title`}
                                    render={({ field }) => (
                                        <FormItem className='col-span-2'>
                                            <FormLabel>Skill Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Skill Name"
                                                    className="input-class"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name={`skills.${index}.rating`} // Bind to the rating field
                                    render={({ field }) => (
                                        <FormItem className='col-span-2 flex justify-end items-center'>
                                            <StarsComponent
                                                value={field.value} // Pass the current rating value from the form
                                                onChange={field.onChange} // Update the form when the rating changes
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                    ))}

                    <div className="flex justify-between items-center">
                        <Button isLoading={isLoading} type="submit">Save</Button>
                        <Button variation='outline-primary' type="button" onClick={addNewSkill}>+ Add More Skills</Button>
                    </div>
                </form>
            </Form>
        </SectionFormLayout>
    )
}

export default SkillsForm
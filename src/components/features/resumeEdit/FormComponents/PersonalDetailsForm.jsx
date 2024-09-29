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
import { Input } from "@/components/ui/input"
import { useUpdateResume } from '@/hooks/useUpdateResume'
import Button from '@/components/common/Button'
import { useParams } from 'react-router-dom'


const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    title: z.string().min(2, {
        message: "Job title must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
});

const PersonalDetailsForm = ({ setControls, resumeFetched }) => {

    const { resumeId } = useParams()

    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

    const [firstReset, setFirstReset] = useState(false)

    const { updateResume, isLoading, isSuccess } = useUpdateResume(resumeId)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: resumeInfo?.firstName || "",
            lastName: resumeInfo?.lastName || "",
            title: resumeInfo?.title || "",
            address: resumeInfo?.address || "",
            phone: resumeInfo?.phone || "",
            email: resumeInfo?.email || "",
        },
    })

    const { reset, watch } = form;

    const watchedValues = watch();

    function onSubmit(data) {
        const finalData = {
            ...data
        }
        console.log("DATA: ", finalData)
        updateResume(finalData)
    }

    // Update the form's default values when resumeInfo is updated
    useEffect(() => {
        if (resumeInfo) {
            reset({
                firstName: resumeInfo.firstName || "",
                lastName: resumeInfo.lastName || "",
                title: resumeInfo.title || "",
                address: resumeInfo.address || "",
                phone: resumeInfo.phone || "",
                email: resumeInfo.email || "",
            });
            setFirstReset(true)
        }
    }, [resumeInfo, reset]);

    useEffect(() => {
        const { firstName, lastName, title, address, phone, email } = resumeFetched || {};
        const allFieldsFilled = firstName && lastName && title && address && phone && email;

        if (isSuccess || allFieldsFilled) {
            setControls((prevControls) => [
                { ...prevControls[0], active: true },
                ...prevControls.slice(1),
            ]);
        }
    }, [resumeInfo, isSuccess, setControls])

    useEffect(() => {
        if (resumeInfo) {
            const hasChanges = Object.keys(watchedValues).some(
                (key) => watchedValues[key] != resumeInfo[key]
            );
            if (hasChanges && firstReset) {
                setResumeInfo({
                    ...resumeInfo,
                    ...watchedValues,
                });
            }
        }
    }, [watchedValues, resumeInfo, setResumeInfo]);



    return (
        <SectionFormLayout
            title="Personal Details"
            info="Get started with basic information"
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your First Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Job Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input type="phone" placeholder="Your Phone" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button isLoading={isLoading} type="submit">Save</Button>
                </form>
            </Form>
        </SectionFormLayout>
    )
}

export default PersonalDetailsForm
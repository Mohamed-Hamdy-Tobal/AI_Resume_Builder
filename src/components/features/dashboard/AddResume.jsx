import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import { useResume } from '@/hooks/useResume'
import Button from '@/components/common/Button';


const AddResume = () => {

    const [resumeTitle, setResumeTitle] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const { createResume, isLoading, isSuccess, isError, data } = useResume()

    const onCreate = () => {
        const uuid = uuidv4()
        const data = {
            title: resumeTitle,
            resumeid: uuid
        }
        createResume(data)
        if (isSuccess || isError) {
            setIsOpen(false)
            setResumeTitle('')
        }
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div
                        className="
                flex justify-center 
                items-center border-[2px] rounded-md 
                bg-secondary p-14 py-24 h-[280px] 
                cursor-pointer hover:scale-105 transition-all 
                hover:shadow-md border-dashed border-[#bcbcbc]
                "
                        onClick={() => setIsOpen(true)} // Open the modal when clicked
                    >
                        <PlusSquare />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            Add a title for your new resume
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-3">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input onChange={(e) => setResumeTitle(e.target.value)} id="name" className="col-span-4" placeholder='Ex.Full Stack resume' />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button isLoading={isLoading} disabled={!resumeTitle} onClick={onCreate}>Create</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddResume

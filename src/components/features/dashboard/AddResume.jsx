import { PlusSquare } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
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

const AddResume = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="
                flex justify-center 
                items-center border-[2px] rounded-md 
                bg-secondary p-14 py-24 h-[280px] 
                cursor-pointer hover:scale-105 transition-all 
                hover:shadow-md border-dashed border-[#bcbcbc]
                "
                    >
                        <PlusSquare />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            Add a title for your new result
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-3">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input id="name" className="col-span-4" placeholder='Ex.Full Stack resume'/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddResume
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { useDeleteResume } from "@/hooks/useUpdateResume"
import { useNavigate } from "react-router-dom"


export function ResumeDropdown({ documentId, refetch }) {

    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();

    const { deleteResume, isLoading, isSuccess } = useDeleteResume(refetch)

    const goToResume = () => {
        navigate(`/dashboard/resume/${documentId}/edit`)
    }
    const viewResume = () => {
        navigate(`/my-resume/${documentId}/view`)
    }


    const handleDeleteResume = () => {
        console.log("DELETE")
        deleteResume(documentId)
    }

    useEffect(() => {
        if (isSuccess) {
            setOpenModal(false)
        }
    }, [isSuccess, setOpenModal])

    return (
        <div>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-1 text-white hover:bg-transparent hover:text-white">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem className='hover:bg-gray-200 cursor-pointer' onClick={goToResume}>Edit</DropdownMenuItem>
                    <DropdownMenuItem className='hover:bg-gray-200 cursor-pointer' onClick={viewResume}>View</DropdownMenuItem>
                    <DropdownMenuItem className='hover:bg-gray-200 cursor-pointer' onClick={viewResume}>Download</DropdownMenuItem>
                    <DropdownMenuItem className='hover:bg-gray-200 cursor-pointer' onClick={() => setOpenModal(true)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={openModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpenModal(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction disabled={isLoading} onClick={handleDeleteResume}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

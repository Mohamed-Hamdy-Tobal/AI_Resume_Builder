import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { resumeThemeColors } from '@/constant/ThemeColors'
import { useUpdateResume } from '@/hooks/useUpdateResume'
import { useParams } from 'react-router-dom'
import { ResumeContext } from '@/context/ResumeContext'

const ThemeColor = () => {

    const { resumeId } = useParams()

    const { updateResume } = useUpdateResume(resumeId)
    const { resumeInfo, setResumeInfo } = useContext(ResumeContext)

    const handleColor = (color) => {
        console.log("color:", color)
        const finalData = {
            resume_theme:color
        }
        setResumeInfo((prev) => ({
            ...prev,
            resume_theme: color,
        }));
        updateResume(finalData)
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className='flex gap-2' size="sm"> <LayoutGrid /> Theme</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <h2 className='mb-3 text-sm text-[#999]'>Select Theme Color : </h2>
                <div className="flex gap-4 flex-wrap justify-start items-center">
                    {resumeThemeColors.map((color) => (
                        <span
                            onClick={() => handleColor(color)}
                            style={{ backgroundColor: color }}
                            className={`rounded-full w-8 h-8 cursor-pointer border border-white hover:outline-dashed transition-all ${resumeInfo?.resume_theme == color && "outline-dashed"}`}
                        ></span>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ThemeColor
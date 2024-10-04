import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ThemeColor from './ThemeColor'

const Controls = ({ activeIndex, setActiveIndex, controls }) => {

    const prevActive = () => {
        setActiveIndex((prev) => prev - 1)
    }
    const nextActive = () => {
        setActiveIndex((prev) => prev + 1)
    }

    // Global Disabled Next Button
    const ok = controls
        .filter(control => control.section === activeIndex)
        .map(control => control.active)[0];

    return (
        <div className='flex items-center justify-between mb-7'>
            <div className="flex justify-start items-center gap-3">
                <Link to={'/dashboard'}>
                    <Button className='py-5 px-3' size="sm"> <Home /></Button>
                </Link>
                <ThemeColor/>
            </div>
            <div className="prev-next flex justify-start items-center gap-3">
                {activeIndex > 1 && <Button className='flex gap-2' size="sm" onClick={prevActive}><ArrowLeft /></Button>}
                <Button
                    className='flex gap-2'
                    size="sm"
                    onClick={nextActive}
                    disabled={!ok}
                >Next <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Controls
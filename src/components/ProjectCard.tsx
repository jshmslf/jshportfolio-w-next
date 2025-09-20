import React from 'react'
import { Card, CardContent } from './ui/card'
import CountUp from './CountUp/CountUp'
import { FaFolder } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'
import { LucideMousePointerClick } from 'lucide-react'


function ProjectCard() {
    return (
        <Link href="/projects">
            <Card>
                <CardContent className='flex flex-col items-center gap-3'>
                    <div className='flex items-center'>
                        <CountUp
                            from={0}
                            to={4}
                            direction='up'
                            className='text-6xl font-black bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-neutral-200 to-neutral-50'
                            duration={1}
                        />
                        <FaPlus className='text-accent text-2xl' />
                    </div>

                    <div className='relative'>
                        <div className='absolute right-[-0.6rem] top-[-0.5rem]'>
                            <div className='bg-accent text-neutral-800 p-1 rounded-full shadow-lg flex items-center'>
                                <LucideMousePointerClick className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='inline-flex items-center gap-2 bg-muted/60 px-4 py-1 rounded-lg text-muted-foreground'>
                            <FaFolder className='text-accent' />
                            <span className='font-semibold'>Projects</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProjectCard

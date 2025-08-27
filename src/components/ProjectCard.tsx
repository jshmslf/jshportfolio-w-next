import React from 'react'
import { Card, CardContent } from './ui/card'
import CountUp from './CountUp/CountUp'
import { FaFolder } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'


function ProjectCard() {
    return (
        <Card>
            <CardContent className='flex flex-col items-center gap-3'>
                <div className='flex items-center'>
                    <CountUp
                        from={0}
                        to={3}
                        direction='up'
                        className='text-6xl font-black bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-neutral-200 to-neutral-50'
                        duration={1}
                    />
                    <FaPlus className='text-accent text-2xl' />
                </div>

                <div className='inline-flex items-center gap-2 bg-muted/60 px-4 py-1 rounded-lg text-muted-foreground'>
                    <FaFolder className='text-accent' />
                    <span className='font-semibold'>Projects</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectCard

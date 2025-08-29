"use client"

import { PicSkeleton } from '@/components/PicSkeleton'
import Image from 'next/image'
import { useState } from 'react'

function GraphicArtsy() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className='w-full max-w-3xl mx-auto px-4 relative'>
            <div className='relative rounded-lg border shadow-sm overflow-y-auto max-h-[80vh] md:overflow-visible md:max-h-none'>

                {isLoading && (
                    <PicSkeleton />
                )}
                <Image
                    src="/images/portfolioga.png"
                    alt='my art portfolio'
                    width={1200}
                    height={2000}
                    className={`w-full h-auto object-contain transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    onLoadingComplete={() => setIsLoading(false)}
                />
            </div>
        </div>
    )
}

export default GraphicArtsy

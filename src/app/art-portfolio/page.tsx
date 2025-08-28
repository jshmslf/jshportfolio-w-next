import Image from 'next/image'
import React from 'react'

function GraphicArtsy() {
    return (
        <>
            <div className='w-full max-w-3xl mx-auto px-4 relative'>
                <div className='relative rounded-lg border shadow-sm overflow-y-auto max-h-[80vh] md:overflow-visible md:max-h-none'>
                    <Image
                        src="/images/portfolioga.png"
                        alt='my art portfolio'
                        width={1200}
                        height={2000}
                        className='w-full h-auto object-contain'
                    />
                </div>
            </div>
        </>
    )
}

export default GraphicArtsy

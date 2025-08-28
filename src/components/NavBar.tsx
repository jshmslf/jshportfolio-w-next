import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <Link href="/" className="block">
            <div className='font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-primary px-4 py-2 mt-[-1rem] cursor-pointer'>
                jshmslf<span className='text-accent animate-ping'>.</span>
            </div>
        </Link>
    )
}

export default NavBar

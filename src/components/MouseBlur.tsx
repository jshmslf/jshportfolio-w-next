"use client";

import React, { useEffect, useState } from 'react'

function MouseBlur() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
    }, []);

    return (
        <div
            className='pointer-events-none fixed inset-0 -z-10 hidden md:block'
            style={{
                background: `radial-gradient(circle 20vw at ${position.x}px ${position.y}px, #00fefe10, transparent)`,
            }}
        />
    )
}

export default MouseBlur

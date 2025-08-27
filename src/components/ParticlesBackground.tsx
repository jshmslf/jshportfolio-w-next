"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { type ISourceOptions } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
    children: ReactNode;
}

const ParticlesBackground = ({ children }: ParticlesBackgroundProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#0a0a0a",
                },
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 120,
                    enable: true,
                    opacity: 0.5,
                    width: 0.5,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 0.2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 130,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 1.5 },
                },
            },
        }),
        [],
    );

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute  -z-10"
                />
                <>{children}</>
            </>
        )
    }

    return <>{children}</>;
}

export default ParticlesBackground;
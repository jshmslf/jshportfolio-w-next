"use client";

import { FC, useMemo, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { twJoin, twMerge } from "tailwind-merge"
import gsap from "gsap"

type LogoItem = {
    node: React.ReactNode
}

type Props = {
    logos: LogoItem[]
    size?: number
    className?: string
    isReversed?: boolean
}

const InfiniteScroller: FC<Props> = ({
    logos,
    size = 40,
    className,
    isReversed = false,
}) => {
    const movingContainer = useRef<HTMLDivElement>(null)
    const timeline = useRef<GSAPTimeline | null>(null)
    const timeScaleTween = useRef<GSAPTween | null>(null)

    useGSAP(() => {
        timeline.current = gsap.timeline({
            defaults: { ease: "none", repeat: -1 },
        })

        gsap.set(movingContainer.current, {
            xPercent: isReversed ? -50 : 0,
        })

        timeline.current
            .to(movingContainer.current, {
                xPercent: isReversed ? 0 : -50,
                duration: 15,
            })
            .set(movingContainer.current, { xPercent: 0 })
    }, { dependencies: [isReversed] })

    const onPointerEnter = () => {
        if (!timeline.current) return
        timeScaleTween.current?.kill()
        timeScaleTween.current = gsap.to(timeline.current, {
            timeScale: 0,
            duration: 0.6,
            ease: "power2.out",
        })
    }

    const onPointerLeave = () => {
        if (!timeline.current) return
        timeScaleTween.current?.kill()
        timeScaleTween.current = gsap.to(timeline.current, {
            timeScale: 1,
            duration: 0.4,
            ease: "power2.in",
        })
    }

    const list = useMemo(() => (
        <div className="flex w-fit items-center gap-15">
            {logos.map((src, index) => {
                const isLast = index === logos.length - 1
                return (
                    <div
                        key={index}
                        className={twJoin(
                            "mt-6 relative flex shrink-0 items-center justify-center text-accent",
                            isLast && "mr-10"
                        )}
                        style={{ fontSize: size }}
                    >
                        {src.node}
                    </div>
                )
            })}
        </div>
    ), [logos, size])

    return (
        <div
            className={twMerge("max-w-full select-none overflow-hidden", className)}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
        >
            <div ref={movingContainer} className="flex w-fit">
                {list}
                {list}
            </div>
        </div>
    )
}

export default InfiniteScroller

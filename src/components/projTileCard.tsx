"use client";

import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import ProjectBadgeTag from "./ProjectBadgeTag";
import { PiRocketLaunch } from "react-icons/pi";
import { LuCodeXml } from "react-icons/lu";
import Link from "next/link";

type ProjTileCardProps = {
    image: string
    title: string
    description: string
    tags?: string[]
    demoLink?: string | null
    repoLink?: string | null
}


function ProjTileCard({
    image, title, description, tags = [], demoLink = null, repoLink = null,
}: ProjTileCardProps) {
    return (
        <>
            <Card className="overflow-hidden flex flex-col w-80 md:w-100 pt-0 group">
                {/* picture */}
                <div className="w-full h-45 relative overflow-hidden">
                    <Image
                        priority={false}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        src={image}
                        alt={title}
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/30" />
                </div>

                <CardContent>
                    <h2 className="font-bold">{title}</h2>
                    <p className="mb-3 text-neutral-400 text-sm">{description}</p>

                    {/* tags */}
                    <div className="flex flex-wrap gap-1">
                        {tags.map((tag, index) => (
                            <ProjectBadgeTag key={index} tag={tag} />
                        ))}
                    </div>

                </CardContent>

                <CardFooter className="flex gap-2 justify-center">
                    {demoLink ? (
                        <Link
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <Button className="flex w-full flex-row items-center gap-2 cursor-pointer rounded-lg bg-accent text-neutral-900 font-bold hover:bg-accent/50">
                                <PiRocketLaunch className="w-4 h-4" />
                                <span>Live Demo</span>
                            </Button>
                        </Link>
                    ) : (
                        <Button disabled className="flex-1 rounded-lg bg-accent/50 text-neutral-900">
                            <PiRocketLaunch className="w-4 h-4" />
                            <span>Live Demo</span>
                        </Button>
                    )}

                    {repoLink ? (
                        <Link
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                        >
                            <Button className="flex w-full flex-row items-center gap-2 cursor-pointer rounded-lg font-bold">
                                <LuCodeXml className="w-4 h-4" />
                                <span>Source</span>
                            </Button>
                        </Link>
                    ) : (
                        <Button disabled className="flex-1 flex w-full flex-row items-center gap-2 rounded-lg">
                            <LuCodeXml className="w-4 h-4" />
                            <span>Source</span>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </>
    )
}

export default ProjTileCard

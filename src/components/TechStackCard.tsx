"use client";

import { BsTools } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { FaPython } from "react-icons/fa6";
import { SiNextdotjs, SiNodedotjs, SiShadcnui } from "react-icons/si";
import { FiExternalLink, FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";

type toolTech = {
    name: string
    version?: string
    logo: React.ReactNode
    link: string
}

const tools: toolTech[] = [
    {
        name: "Python",
        version: "3.13",
        logo: <FaPython className="text-accent" />,
        link: "https://docs.python.org/3/whatsnew/3.13.html",
    },
    {
        name: "Next.js",
        version: "15.5.2",
        logo: <SiNextdotjs className="text-accent" />,
        link: "https://nextjs.org/docs",
    },
    {
        name: "Figma",
        version: "",
        logo: <FiFigma className="text-accent" />,
        link: "https:/figma.com",
    },
    {
        name: "Node.js",
        version: "22",
        logo: <SiNodedotjs className="text-accent" />,
        link: "https://nodejs.org/docs/latest-v22.x/api/index.html",
    },
    {
        name: "ShadCN/UI",
        version: "",
        logo: <SiShadcnui className="text-accent" />,
        link: "https://ui.shadcn.com/docs",
    },
    {
        name: "Tailwind CSS",
        version: "4.1",
        logo: <RiTailwindCssFill className="text-accent" />,
        link: "https://tailwindcss.com/",
    },
]

function TechStackCard() {
    return (
        <Card>
            <CardContent>
                <CardTitle className='inline-flex items-center gap-2'>
                    <BsTools className='text-accent text-2xl' />
                    <span className='font-mono font-bold text-2xl'>My TechStack</span>
                </CardTitle>
                <CardDescription className="text-neutral-500 mt-[-0.2rem] text-xs">
                    My favorite tools that I currently use in development
                </CardDescription>

                {/* tools */}
                <div className="mt-2 grid gap-2 sm:grid-cols-1 md:grid-cols-2">
                    {tools.map((tool, id) => (
                        <a
                            key={id}
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-xl p-2 shadow-sm bg-neutral-950"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center border rounded-xl bg-neutral-800 text-4xl">
                                    {tool.logo}
                                </div>
                                {/* // Name // Version */}
                                <div className="flex flex-col">
                                    <span className="font-semibold text-neutral-200">{tool.name}</span>
                                    {tool.version && (
                                        <span className="text-xs text-neutral-500">v{tool.version}</span>
                                    )}
                                </div>
                            </div>
                            <FiExternalLink className="text-accent text-3xl transition-all duration-300 group-hover:text-[2rem]" />
                        </a>
                    ))}
                </div>

            </CardContent>
        </Card>
    )
}

export default TechStackCard

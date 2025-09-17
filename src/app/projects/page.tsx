
"use client";

import ProjTileCard from '@/components/projTileCard'
import Masonry from "react-masonry-css"
import { motion } from "framer-motion";

const projData = [
    {
        image: "/images/proj_img/w.png",
        title: "W (X Clone App)",
        description: "A modern social media platform inspired by X. It's designed for quick updates and efforless connections. With a minimal interface and a focus on short posts.",
        tags: ["nextjs", "shadcn", "prisma", "clerk", "tailwind", "postgres"],
        demoLink: "https://w-social.vercel.app",
        repoLink: "",
    },
    {
        image: "/images/proj_img/image.png",
        title: "GWAko",
        description: "A GWA calculator designed to help Pangasinan State University students, specially those graduating students, estimates their GWA based on their academic records.",
        tags: ["html", "css", "javascript", "python", "flask"],
        demoLink: "https://gwako.onrender.com/",
        repoLink: "",
    },
    {
        image: "",
        title: "Grimore Bot🚧",
        description: "A Discord bot I created that play music in voice channels. For its next feature, I am currently working on integrating the League of Legends API for the League community in my Discord server.",
        tags: ["python"],
        demoLink: "",
        repoLink: "",
    },
    {
        image: "",
        title: "SariPOS",
        description: "A point-of-sale system designed for small or 'sari-sari' stores, helping them track inventory, sales, and income conventienly on mobile.",
        tags: ["React-Native"],
        demoLink: "",
        repoLink: "",
    }
]

const breakpointsColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
};

const page = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-3'>
                <h1 className='font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-neutral-200 to-neutral-50'>My Projects</h1>
                <p className='text-neutral-300 text-sm lg:text-lg'>{`This is a collection of the projects I've worked on`}</p>
            </div>

            {/* Masonry Section */}
            <div className='flex justify-center mt-6'>
                <Masonry
                    breakpointCols={breakpointsColumnsObj}
                    className='flex gap-3'
                    columnClassName='space-y-3'
                >
                    {projData.map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <ProjTileCard {...proj} />
                        </motion.div>
                    ))}
                </Masonry>
            </div>
        </>
    )
}

export default page

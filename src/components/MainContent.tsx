"use client";

import ProfileCard from "./ProfileCard"
import ProjectCard from "./ProjectCard"
import YearsCard from "./YearsCard"
import SkillsCard from "./SkillsCard"
import TechStackCard from "./TechStackCard"
import Contact from "./Contact"
import SpotifyTab from "./SpotifyTab"
import { motion } from "framer-motion"


function MainContent() {
    return (
        <div className="flex flex-col items-center px-4">
            <div className="grid gap-4 max-w-6xl w-full grid-cols-1 md:grid-cols-[45%_55%]">
                {/* 1st Col */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    {[ProfileCard, SpotifyTab, SkillsCard].map((Components, index) =>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Components />
                        </motion.div>
                    )}
                </div>

                {/* 2nd Col */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <TechStackCard />
                    </motion.div>

                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                        {[ProjectCard, YearsCard].map((Components, index) =>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            >
                                <Components />
                            </motion.div>
                        )}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Contact />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default MainContent

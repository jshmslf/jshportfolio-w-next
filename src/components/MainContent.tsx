import ProfileCard from "./ProfileCard"
import ProjectCard from "./ProjectCard"
import YearsCard from "./YearsCard"
import SkillsCard from "./SkillsCard"
import TechStackCard from "./TechStackCard"
import Contact from "./Contact"


function MainContent() {
    return (
        <div className="flex flex-col items-center px-4">
            <div className="grid grid-cols-[45%_60%] max-w-6xl gap-4 mx-50">
                {/* 1st Col */}
                <div className="flex flex-col gap-4">
                    <ProfileCard />
                    <SkillsCard />
                </div>

                {/* 2nd Col */}
                <div className="flex flex-col gap-4">
                    <TechStackCard />

                    <div className="grid grid-cols-2 gap-4 ">
                        <ProjectCard />
                        <YearsCard />
                    </div>

                    <Contact />
                </div>
            </div>
            <footer className="mt-15 text-center text-sm text-neutral-400 font-mono">
                made with <span>💖</span> by <a
                    href="https://github.com/jshmslf"
                    className="font-black text-accent"
                    style={{ textShadow: "0 0 18px #22d3ee, 0 0 26px #22d3ee" }}
                >
                    jshmslf
                </a>
            </footer>
        </div>
    )
}

export default MainContent

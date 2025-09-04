import ProfileCard from "./ProfileCard"
import ProjectCard from "./ProjectCard"
import YearsCard from "./YearsCard"
import SkillsCard from "./SkillsCard"
import TechStackCard from "./TechStackCard"
import Contact from "./Contact"
import SpotifyTab from "./SpotifyTab"


function MainContent() {
    return (
        <div className="flex flex-col items-center px-4">
            <div className="grid gap-4 max-w-6xl w-full grid-cols-1 md:grid-cols-[45%_55%]">
                {/* 1st Col */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <ProfileCard />
                    <SpotifyTab />
                    <SkillsCard />
                </div>

                {/* 2nd Col */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <TechStackCard />

                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                        <ProjectCard />
                        <YearsCard />
                    </div>

                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default MainContent

import { Card, CardHeader } from "@/components/ui/card"
import ProfileCard from "./ProfileCard"
import ProjectCard from "./ProjectCard"
import YearsCard from "./YearsCard"


function MainContent() {
    return (
        <div className="grid grid-cols-[40%_60%] gap-4 mx-50">
            {/* 1st Col */}
            <div className="flex flex-col gap-4">
                <ProfileCard />
                <Card>
                    <CardHeader>
                    </CardHeader>
                </Card>
            </div>

            {/* 2nd Col */}
            <div className="flex flex-col gap-4">
                <Card>
                    <CardHeader>

                    </CardHeader>
                </Card>

                <div className="grid grid-cols-2 gap-4 ">
                    <ProjectCard />
                    <YearsCard />
                </div>

                <Card>Right Bottom</Card>
            </div>
        </div>
    )
}

export default MainContent

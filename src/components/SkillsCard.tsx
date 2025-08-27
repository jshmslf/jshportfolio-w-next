import { FaBootstrap, FaCode, FaFigma, FaFlutter, FaGit, FaGolang, FaJava, FaNodeJs, FaPython } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import InfiniteCarousel from "./infiniteCarousel";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobeillustrator, SiAdobephotoshop, SiLeetcode, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const techLogos = [
    { node: <FaPython />, },
    { node: <FaJava />, },
    { node: <IoLogoJavascript />, },
    { node: <FaNodeJs />, },
    { node: <FaGolang />, },
    { node: <SiShadcnui />, },
    { node: <FaGit />, },
    { node: <SiLeetcode />, },
]

const techLogos2 = [
    { node: <SiAdobephotoshop /> },
    { node: <SiAdobeillustrator /> },
    { node: <FaFigma /> },
    { node: <FaBootstrap /> },
    { node: <SiNextdotjs /> },
    { node: <RiReactjsFill /> },
    { node: <FaFlutter /> },
]

function SkillsCard() {
    return (
        <Card>
            <CardContent>
                <CardTitle className="inline-flex items-center gap-2">
                    <FaCode className="text-accent text-3xl" />
                    <span className="font-bold text-2xl font-mono">My Skills</span>
                </CardTitle>
                <CardDescription className="text-neutral-500 mt-[-0.2rem] text-xs">My favorite tools I am proficient with</CardDescription>
                <InfiniteCarousel
                    logos={techLogos}
                    size={40}
                />
                <InfiniteCarousel
                    isReversed
                    logos={techLogos2}
                    size={40}
                />
            </CardContent>
        </Card>
    )
}

export default SkillsCard

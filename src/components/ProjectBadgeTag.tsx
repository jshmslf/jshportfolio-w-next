import { ReactNode } from "react";
import { FaCss3, FaFlask, FaHtml5, FaPython } from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiPostgresql, SiPrisma, SiShadcnui } from "react-icons/si";

type BadgeProps = {
    tag?: string | null
}

const iconSize = "w-3.5 h-3.5"

const withSize = (Icon: React.ComponentType<{ className?: string }>) => (
    <Icon className={iconSize} />
)

const iconMap: Record<string, ReactNode> = {
    nextjs: withSize(RiNextjsFill),
    javascript: withSize(RiJavascriptFill),
    python: withSize(FaPython),
    html: withSize(FaHtml5),
    css: withSize(FaCss3),
    flask: withSize(FaFlask),
    tailwind: withSize(RiTailwindCssFill),
    shadcn: withSize(SiShadcnui),
    prisma: withSize(SiPrisma),
    clerk: withSize(SiClerk),
    postgres: withSize(SiPostgresql)
}


function ProjectBadgeTag({ tag }: BadgeProps) {
    if (!tag) return null;

    const icon = iconMap[tag.toLowerCase()] ?? null;
    return (
        <div className="
        inline-flex items-center gap-1 px-2 py-[0.07rem] rounded-full
        bg-neutral-800/80 text-neutral-300 text-xs font-medium
        transition-duration-200
        hover:bg-neutral-700/0 cursor-default
        ">
            {icon}
            <span>{tag}</span>
        </div>
    )
}



export default ProjectBadgeTag

import { GoDotFill } from "react-icons/go"
import { Badge } from "./ui/badge"
import { FaPersonDigging } from "react-icons/fa6"
import { IoWarningOutline } from "react-icons/io5"

type StatusType = "available" | "not_available" | "working"

interface StatusProps {
    status: StatusType
}

const statusConfig: Record<StatusType, { text: string; variantType: string; icon: React.ReactNode }> = {
    available: {
        icon: <GoDotFill />,
        text: "Available to Work",
        variantType: "status_active"
    },
    not_available: {
        icon: <IoWarningOutline />,
        text: "Not Available",
        variantType: "status_notActive"
    },
    working: {
        icon: <FaPersonDigging />,
        text: "Working",
        variantType: "status_working"
    },
}

function Status({ status }: StatusProps) {
    const { text, variantType, icon } = statusConfig[status]

    return (
        <Badge variant={variantType as any} className={`px-3 rounded-full gap-x-2 font-bold`}>
            {icon}
            {text}
        </Badge>
    )
}

export default Status

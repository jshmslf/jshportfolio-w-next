import { Skeleton } from "@/components/ui/skeleton"

export function PicSkeleton() {
    return (
        <div className="w-full space-y-4 p-4">
            {/* Tall image placeholder */}
            <div className="w-full">
                <Skeleton className="w-full h-[500px] md:h-[1500px] rounded-lg" />
            </div>

            {/* Text placeholders */}
            <div className="space-y-2">
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </div>
    )
}

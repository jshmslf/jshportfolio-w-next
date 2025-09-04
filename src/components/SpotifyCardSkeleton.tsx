import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SpotifyCardSkeleton() {
    return (
        <Card className="relative flex flex-row items-center p-3 w-auto max-w-full overflow-hidden shadow-md">
            <CardContent>
                <div className="absolute inset-0 bg-gray-800/20 rounded-lg" />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/90 rounded-lg" />

                <div className="relative flex flex-row items-center gap-3 z-10 w-full">
                    <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />

                    <div className="flex flex-col gap-1 w-full">
                        <Skeleton className="h-4 w-32 rounded" />
                        <Skeleton className="h-3 w-24 rounded" />
                        <Skeleton className="h-2 w-20 rounded" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

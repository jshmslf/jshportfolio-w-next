import React from 'react'
import { Skeleton } from './ui/skeleton'

function ProjTileSkeleton() {
    return (
        <div className="p-4 rounded-2xl bg-neutral-900 shadow space-y-3">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
        </div>
    )
}

export default ProjTileSkeleton

"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import SpotifyCardSkeleton from "./SpotifyCardSkeleton";
import Image from "next/image";

interface Track {
    is_playing: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    url?: string;
    timestamp?: string | null;
}

export default function SpotifyTab() {
    const [track, setTrack] = useState<Track | null>(null);
    const lastPlayedRef = useRef<Track | null>(null);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const res = await fetch("/api/spotify/now-playing");
                if (!res.ok) return;

                const data: Track = await res.json();

                if (data.is_playing || data.title) {
                    setTrack(data);
                    lastPlayedRef.current = data;
                } else {
                    // nothing active >>> fallback to previous known
                    setTrack(lastPlayedRef.current);
                }
            } catch (err) {
                console.error("Error fetching Spotify track:", err);
                setTrack(lastPlayedRef.current);
            }
        };

        fetchTrack();
        const interval = setInterval(fetchTrack, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!track) {
        return <SpotifyCardSkeleton />;
    }

    return (
        <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-full"
        >
            <Card className="relative flex flex-row items-center p-3 w-full max-w-full overflow-hidden shadow-md">
                <CardContent>
                    {/* bg album art */}
                    {track.albumImageUrl && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20"
                            style={{ backgroundImage: `url(${track.albumImageUrl})` }}
                        />
                    )}

                    {/* Gradient overlay to left*/}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/90" />

                    {/* Main content */}
                    <div className="relative flex flex-row items-center gap-3 z-10 w-full">
                        {/* Small album art */}
                        {track.albumImageUrl && (
                            <Image
                                src={track.albumImageUrl}
                                width={48}
                                height={48}
                                alt={track.title ?? "Album Art"}
                                className="w-12 h-12 rounded-lg shadow-md flex-shrink-0"
                            />
                        )}

                        {/* txt */}
                        <div className="flex flex-col gap-0 text-white">
                            <p className="text-sm font-bold">{track.title}</p>
                            <p className="text-xs text-gray-200">
                                {track.artist}
                            </p>
                            <p className="text-[10px] text-gray-300 mt-1">
                                {track.is_playing
                                    ? "Now Playing"
                                    : `Last Played${track.timestamp ? ` (${track.timestamp})` : ""}`}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}

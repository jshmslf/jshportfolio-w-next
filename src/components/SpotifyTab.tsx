"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

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
    const [lastPlayed, setLastPlayed] = useState<Track | null>(null);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const res = await fetch("/api/spotify/now-playing");
                if (!res.ok) return;

                const data: Track = await res.json();

                if (data.is_playing) {
                    setTrack(data);
                    setLastPlayed(data); // store for fallback
                } else if (data.title) {
                    // last played item returned
                    setTrack(data);
                    setLastPlayed(data);
                } else {
                    // nothing active → fallback to previous known
                    setTrack(lastPlayed);
                }
            } catch (err) {
                console.error("Error fetching Spotify track:", err);
                setTrack(lastPlayed); // fallback on error
            }
        };

        fetchTrack();
        const interval = setInterval(fetchTrack, 15000);
        return () => clearInterval(interval);
    }, []);

    if (!track) {
        return <p className="text-sm text-gray-400">Loading current song… 🎧</p>;
    }

    return (
        <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-auto"
        >
            <Card className="relative flex flex-row items-center p-3 w-auto max-w-full overflow-hidden shadow-md">
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
                            <img
                                src={track.albumImageUrl}
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

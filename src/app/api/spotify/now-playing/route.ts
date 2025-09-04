import { NextResponse } from "next/server";

const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
} = process.env;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
                    "base64"
                ),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN!,
        }),
    });

    return response.json();
}

async function getNowPlaying(accessToken: string) {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
    });
    if (response.status === 204 || response.status > 400) return null;
    return response.json();
}

async function getRecentlyPlayed(accessToken: string) {
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
    });
    if (!response.ok) return null;
    return response.json();
}

function formatRelativeTime(isoString: string) {
    const playedAt = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - playedAt.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds}s ago`;
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
}

export async function GET() {
    try {
        const { access_token } = await getAccessToken();

        // 1️⃣ Try currently playing
        const nowPlaying = await getNowPlaying(access_token);
        if (nowPlaying && nowPlaying.item) {
            const track = nowPlaying.item;
            return NextResponse.json({
                is_playing: nowPlaying.is_playing,
                title: track.name,
                artist: track.artists.map((a: any) => a.name).join(", "),
                album: track.album.name,
                albumImageUrl: track.album.images?.[0]?.url,
                url: track.external_urls.spotify,
                timestamp: null,
            });
        }

        // 2️⃣ Fallback: recently played
        const recentlyPlayed = await getRecentlyPlayed(access_token);
        if (recentlyPlayed?.items?.length > 0) {
            const lastTrack = recentlyPlayed.items[0].track;
            return NextResponse.json({
                is_playing: false,
                title: lastTrack.name,
                artist: lastTrack.artists.map((a: any) => a.name).join(", "),
                album: lastTrack.album.name,
                albumImageUrl: lastTrack.album.images?.[0]?.url,
                url: lastTrack.external_urls.spotify,
                timestamp: formatRelativeTime(recentlyPlayed.items[0].played_at),
            });
        }

        // 3️⃣ Nothing found
        return NextResponse.json({
            is_playing: false,
            message: "No recent track found",
            last_track: null,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch Spotify data" },
            { status: 500 }
        );
    }
}

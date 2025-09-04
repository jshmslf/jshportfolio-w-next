// src/app/api/auth/callback/spotify/route.ts
import { NextResponse } from "next/server";

const SPOTIFY_REDIRECT_URI = "http://127.0.0.1:3000/api/auth/callback/spotify"; // must match your app settings

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const code = searchParams.get("code");

        if (!code) {
            return NextResponse.json({ error: "No code provided" }, { status: 400 });
        }

        // Exchange authorization code for access & refresh token
        const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                    ).toString("base64"),
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: SPOTIFY_REDIRECT_URI,
            }),
        });

        const data = await tokenResponse.json();

        if (data.error) {
            console.error("Spotify token error:", data);
            return NextResponse.json({ error: data.error }, { status: 400 });
        }

        console.log("Spotify Auth Response:", data);
        // data contains:
        // - access_token
        // - token_type
        // - scope
        // - expires_in
        // - refresh_token

        // TODO: save data.refresh_token somewhere safe (e.g., your database or .env)
        // You need this refresh_token to call /now-playing later

        return NextResponse.json(data);
    } catch (err) {
        console.error("Spotify callback error:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Toaster } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';
import MouseBlur from "@/components/MouseBlur";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jsh-dev",
  description: "jshmslf portfolio made w/ nextjs",
  icons: {
    icon: '/src/app/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased xl:mx-35 mt-4`}
      >
        <NavBar />
        {/* <ParticlesBackground> */}
        {children}
        <Toaster position="top-center" toastOptions={{ className: "bg-neutral-900 text-neutral-200 border border-neutral-700" }} />
        <Analytics />
        <MouseBlur />
        {/* </ParticlesBackground> */}
        <Footer />
      </body>
    </html>
  );
}

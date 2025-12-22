import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// ✅ Import the new Music Cursor
import { MusicCursor } from "@/components/ui/MusicCursor"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nav.wav",
  description: "Portfolio",
  icons: { icon: '/logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* cursor-none hides the default pointer so you see our custom Dot + Notes */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white cursor-none`}>
        
        {/* ✅ ADD MUSIC CURSOR (Hidden on Mobile) */}
        <div className="hidden md:block">
           <MusicCursor />
        </div>

        {children}
      </body>
    </html>
  );
}
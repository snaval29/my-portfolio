import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { StardustCursor } from "@/components/ui/StardustCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naval Sharma | UX Designer",
  description: "Portfolio of Naval Sharma",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // ✅ UPDATED CLASS LIST:
        // 1. md:cursor-none -> Hides cursor on general background
        // 2. md:[&_a]:cursor-none -> Forces links (Nav bar) to have no cursor
        // 3. md:[&_button]:cursor-none -> Forces buttons to have no cursor
        // 4. md:[&_label]:cursor-none -> Forces form labels to have no cursor
        className={`
          ${inter.variable} ${jetbrainsMono.variable} 
          antialiased bg-neutral-950 text-white 
          selection:bg-purple-500/30 selection:text-white
          md:cursor-none 
          md:[&_a]:cursor-none 
          md:[&_button]:cursor-none
          md:[&_label]:cursor-none
        `}
      >
        <div className="hidden md:block">
            <StardustCursor />
        </div>

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
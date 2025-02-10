import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import ClientWrapper from "@/components/ClientWrapper";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ANIPIX - Beautiful Mobile Wallpapers",
  description:
    "Discover and download stunning wallpapers for your mobile device",
manifest: "/manifest.json",
  type: "website",
  keywords:
    "wallpapers, mobile wallpapers, hd wallpapers, 4k wallpapers, anime wallpapers, art wallpapers, aesthetic ,anime art, animal wallpapers, car wallpapers, space wallpapers",
  siteName: "ANIPIX",
  locale: "en_US",
  themeColor: "#f9fafb",
  backgroundColor: "#f9fafb",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  favicon: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        {children}
        <ClientWrapper />
        </body>
    </html>
  );
}

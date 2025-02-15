import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import ClientWrapper from "@/components/ClientWrapper";
import Script from "next/script";


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
  title: "ANIPIX - Stunning Mobile & Anime Wallpapers",
  description: "Explore and download HD, 4K, and aesthetic wallpapers for mobile. Find anime, space, car, art, and nature wallpapers to personalize your device.",
  manifest: "/manifest.json",
  type: "website",
  keywords: "mobile wallpapers, HD wallpapers, 4K wallpapers, anime art, aesthetic wallpapers, nature wallpapers, space backgrounds, car wallpapers, artistic wallpapers, anime wallpapers, animal wallpapers, minimalist wallpapers",
  siteName: "ANIPIX - Mobile Wallpapers Hub",
  locale: "en_US",
  canonical: "https://www.anipixai.com/",
  themeColor: "#f9fafb",
  backgroundColor: "#f9fafb",
  viewport:
    "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover",
  favicon: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">

      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9589229761192215"
          crossOrigin="anonymous"></script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HC80H6Y2CP"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HC80H6Y2CP');`}
        </Script>
      </head>

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

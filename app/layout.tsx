import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

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
  // image: 'https://anipix.netlify.app/og-image.png',
  // url: 'https://anipix.netlify.app',
  type: "website",
  keywords:
    "wallpapers, mobile wallpapers, hd wallpapers, 4k wallpapers, anime wallpapers",
  siteName: "ANIPIX",
  locale: "en_US",
  themeColor: "#f9fafb",
  backgroundColor: "#f9fafb",
  favicon: "./favicon.ico",
  appleIcon: "/apple-icon.png",
  appleIconSize: "180x180",
  appleIconPrecomposed: true,
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
      </body>
    </html>
  );
}

import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'WallpaperHub - Beautiful Mobile Wallpapers',
  description: 'Discover and download stunning wallpapers for your mobile device',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        poppins.variable
      )}>
        {children}
      </body>
    </html>
  );
}
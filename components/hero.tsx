'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Make Your Phone
              <span className="block gradient-text">Beautiful & Unique</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Discover thousands of stunning wallpapers curated just for you. Express your style with our handpicked collection of HD wallpapers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Browse Gallery
              </Button>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-muted-foreground">Wallpapers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100K+</p>
                <p className="text-muted-foreground">Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.8</p>
                <p className="text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl" />
            <div className="relative w-[280px] h-[560px] floating">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop"
                alt="Phone Mockup"
                fill
                className="object-cover rounded-[2.5rem] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
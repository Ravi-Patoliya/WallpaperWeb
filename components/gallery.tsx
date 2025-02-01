"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import { motion } from "framer-motion";

const wallpapers = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=800&auto=format&fit=crop&q=60",
    alt: "Abstract Wallpaper",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    alt: "Nature Wallpaper",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60",
    alt: "Gradient Wallpaper",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop&q=60",
    alt: "Abstract Art",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60",
    alt: "Space Wallpaper",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=800&auto=format&fit=crop&q=60",
    alt: "Minimal Wallpaper",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    alt: "Nature Wallpaper 2",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60",
    alt: "Gradient Wallpaper 2",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=800&auto=format&fit=crop&q=60",
    alt: "Abstract Wallpaper",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    alt: "Nature Wallpaper",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60",
    alt: "Gradient Wallpaper",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop&q=60",
    alt: "Abstract Art",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60",
    alt: "Space Wallpaper",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=800&auto=format&fit=crop&q=60",
    alt: "Minimal Wallpaper",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    alt: "Nature Wallpaper 2",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60",
    alt: "Gradient Wallpaper 2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Featured Wallpapers
          </h2>
          <p className="text-muted-foreground">
            Browse through our collection of high-quality wallpapers
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
          {wallpapers.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[9/16]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={wallpaper.src}
                alt={wallpaper.alt}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold mb-2">
                  {wallpaper.alt}
                </h3>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#eb0071] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#eb0071]/90 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">View More</Button>
        </div>
      </div>
    </section>
  );
}

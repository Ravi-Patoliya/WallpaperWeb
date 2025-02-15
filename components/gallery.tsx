"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { GaEvent } from "@/lib/gtag";

const wallpapers = [
  {
    id: 1,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/Adventure-17_thumbnail_17347746726179.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 2,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/Wallpaper_30_thumbnail_17347656565831.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 3,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/space_28_thumbnail_17347719992996.png",
    alt: "Gradient Wallpaper",
  },
  {
    id: 4,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/car_22_thumbnail_17347824035955.webp",
    alt: "Anipix Art",
  },
  {
    id: 5,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/Adventure-2_thumbnail_17347659757089.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 6,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/anime_3_thumbnail_17347687897103.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 7,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/Wallpaper_21_thumbnail_17347650022655.png",
    alt: "Anipix Wallpaper 2",
  },
  {
    id: 8,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/animal_28_thumbnail_17349551639272.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 9,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/aiartexploration_%2014_thumbnail_17347770283322.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 10,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/Adventure-31_thumbnail_17383879075092.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 11,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/aesthic-14_thumbnail_17347655734927.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 12,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/ai_soulix_1_thumbnail_17328615165286.jpg",
    alt: "Anipix Art",
  },
  {
    id: 13,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/anime_28_thumbnail_17329645181193.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 14,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/animal_12_thumbnail_17347747704410.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 15,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/car_22_thumbnail_17347824035955.webp",
    alt: "Anipix Wallpaper 2",
  },
  {
    id: 16,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/thumbnails/space_14_thumbnail_17347707146564.jpg",
    alt: "Anipix Wallpaper",
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
        <div className="grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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
          <Button
            size="lg"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.anipix.wallpaper",
                "_blank"
              );
              GaEvent({
                category: "Download App",
                action: "Downloaded App",
                label: "View More Wallpapers",
              });
            }
            }
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import { motion } from "framer-motion";

const wallpapers = [
  {
    id: 1,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/wallpapers/Adventure-17_17347746714759.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 2,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/Wallpaper_30_17347656566347.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 3,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/space_28_17347719999025.png",
    alt: "Gradient Wallpaper",
  },
  {
    id: 4,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/car_22_17347824034415.webp",
    alt: "Anipix Art",
  },
  {
    id: 5,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/Adventure-2_17347659757878.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 6,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/anime_3_17347687897857.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 7,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/Wallpaper_21_17347650019446.png",
    alt: "Anipix Wallpaper 2",
  },
  {
    id: 8,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/animal_28_17349551626383.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 9,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/wallpapers/aiartexploration_+14_17347770276420.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 10,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/Adventure-31_previewImages_17383879075698.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 11,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/aesthic-14_17347655723975.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 12,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/ai_soulix_1_17328615168309.jpg",
    alt: "Anipix Art",
  },
  {
    id: 13,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/anime_28_17329645182727.jpg",
    alt: "Anipix Wallpaper",
  },
  {
    id: 14,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/animal_12_17347747693932.png",
    alt: "Anipix Wallpaper",
  },
  {
    id: 15,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/car_22_17347824034415.webp",
    alt: "Anipix Wallpaper 2",
  },
  {
    id: 16,
    src: "https://4wallpaper.s3.ap-south-1.amazonaws.com/previewImages/wallpapers/space_14_17347707143515.jpg",
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
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.anipix.wallpaper",
                "_blank"
              )
            }
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

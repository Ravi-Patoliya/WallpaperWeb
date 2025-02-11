"use client";

import { Button } from "@/components/ui/button";
import axiosInstance from "@/helper/axiosInstance";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {

  const [statistics, setStatistics] = useState({
    wallpaperCount: 0,
    userCount: 0,
    rating: 0,
  });

  const getDashboardStatistics = async () => {
    try {
      const response = await axiosInstance.get("/dashboard/get");
      const data = response.data;
      setStatistics(data);
    } catch (error) {
      console.error("Error fetching statistics", error);
    }
  }

  useEffect(() => {
    getDashboardStatistics();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container min-h-[calc(100vh-4rem)] flex items-center pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Make Your Phone
              <span className="block gradient-text">Beautiful & Unique</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Discover thousands of stunning wallpapers curated just for you.
              Express your style with our handpicked collection of HD
              wallpapers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.anipix.wallpaper",
                    "_blank"
                  )
                }
              >
                Download Now
              </Button>
              {/* <Button size="lg" variant="outline" className="text-lg">
                Browse Gallery
              </Button> */}
            </div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold">
                  {statistics?.wallpaperCount ?? "1000+"}
                </p>
                <p className="text-muted-foreground">Wallpapers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  {statistics?.userCount ?? "2k+"}
                </p>
                <p className="text-muted-foreground">Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  {statistics?.rating ?? "4.6"}
                </p>
                <p className="text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl" />

            {/* Container for image with responsive width and height */}
            <div className="relative w-full sm:w-[370px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto sm:h-[340px] lg:h-[560px] floating">
              <Image
                src="/home_mockup.png"
                alt="Phone Mockup"
                layout="responsive"
                width={600}
                height={840}
                className="object-cover rounded-[2.5rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

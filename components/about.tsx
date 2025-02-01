"use client";

import { Users, Crown, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "25 million active users",
    description: "WallpaperHub has more than 661 million downloads",
  },
  {
    icon: <Crown className="w-12 h-12" />,
    title: "Free & Premium Content",
    description:
      "Millions of free pieces of content and featured content available now",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Top tier content creators",
    description:
      "From some of the top artists in the world to local artists, we have it all",
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "AI-Powered Image Creation",
    description:
      "Upload an image and let AI reimagine it, or describe your idea and watch it come to life",
  },
];

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary to-purple-600 opacity-25" />
                    <div className="relative text-primary">{stat.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading gradient-text">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

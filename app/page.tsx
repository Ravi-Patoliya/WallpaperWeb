"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (path) {
      pageview(path); 
    }
  }, [path]);

  return (
    <main className="relative">
      <ToastContainer />
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-2 rounded-full shadow-lg"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </main>
  );
}

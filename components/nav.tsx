"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div
          className="mr-4 flex items-center space-x-2 cursor-pointer"
          onClick={() => route.push("/")}
        >
          <Image src="./logo.png" alt="Logo" width={50} height={50} />
          <span className="font-poppins text-xl font-bold">ANIPIX</span>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {["Home", "About", "Features", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.anipix.wallpaper",
                "_blank"
              )
            }
          >
            Download App
          </Button>
        </div>

        <button
          className="ml-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4">
              {["Home", "Features", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button
                className="w-full mt-4"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.anipix.wallpaper",
                    "_blank"
                  )
                }
              >
                Download App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CupSoda, Send, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Smartphone className="h-6 w-6 text-primary" /> */}
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <span className="font-poppins text-xl font-bold">ANIPIX</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your one-stop destination for beautiful mobile wallpapers.
            </p>
            {/* <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Youtube className="h-5 w-5" />
              </Button>
            </div> */}
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ul className="space-y-2">
                {["About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul> */}
            {/* </div> */}
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item =="Privacy Policy" ? "/privacy-policy" : item =="Terms of Service" ? "/terms-of-service" : "/cookie-policy"}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">
              Explore More with Us
            </h3>
            {/* <h3 className="font-heading font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to get updates on new wallpapers and features.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button>Subscribe</Button>
            </div> */}
            <div className="flex gap-4">
              {/* <div className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div> */}
              <Button
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0"
                onClick={() => window.open("https://www.instagram.com/aiarteuphoria_/", "_blank")}
              >
                <Instagram className="w-6 h-6 text-[#eb0071]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0"
                onClick={() => window.open("https://www.youtube.com/@aiarteuphoria", "_blank")}
              >
                <Youtube className="w-6 h-6 text-[#eb0071]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0"
                onClick={() => window.open("https://t.me/aiarteuphoria", "_blank")}
              >
                <Send className="w-6 h-6 text-[#eb0071]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0"
                onClick={() => window.open("https://buymeacoffee.com/yashsankha9?fbclid=PAZXh0bgNhZW0CMTEAAaYCrCS2K6wiaQQf7_SaptFj9zYPf6csK7rRhNinEW4_MhurEJxqDIHRcNQ_aem_L2yk93NoEd0OgVBNrcdlww", "_blank")}
              >
                <CupSoda className="w-6 h-6 text-[#eb0071]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} ANIPIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
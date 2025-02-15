"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GaEvent } from "@/lib/gtag";

export default function CookiePolicy() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    GaEvent({
      category: "Cookie Policy",
      action: "Viewed Cookie Policy",
      label: "Cookie Policy",
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navigation />
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">Cookie Policy</h1>
        <p className="mb-4 text-lg text-gray-700">
          Anipix uses cookies to improve your browsing experience. This
          Cookie Policy explains what cookies are, how we use them, and your
          options to manage them.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          1. What Are Cookies?
        </h2>
        <p className="mb-6 text-gray-700">
          Cookies are small text files stored on your device by your browser
          when you visit websites. They help websites remember your preferences
          and enhance your experience.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          2. How We Use Cookies
        </h2>
        <p className="mb-2 text-gray-700">
          We use cookies for several reasons, including:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <span className="font-heading text-md font-semibold">Functionality:</span> Cookies help us remember your
            preferences and settings for a more personalized experience.
          </li>
          <li>
            <span className="font-heading text-md font-semibold">Analytics:</span> We use cookies to collect data on how
            you interact with our app, helping us to improve our services.
          </li>
          <li>
            <span className="font-heading text-md font-semibold">Advertising:</span> Cookies help us serve relevant ads
            to you based on your interests.
          </li>
        </ul>

        <h2 className="font-heading text-lg font-semibold mb-2">
          3. Types of Cookies We Use
        </h2>
        <p className="mb-2 text-gray-700">
          We use both first-party and third-party cookies. Here's what they do:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <span className="font-heading text-md font-semibold">First-party cookies:</span> These are set by us and are
            used to improve your experience on our app.
          </li>
          <li>
            <span className="font-heading text-md font-semibold">Third-party cookies:</span> These are set by external
            services, such as analytics or advertising networks, to collect
            data on your activity across websites.
          </li>
        </ul>

        <h2 className="font-heading text-lg font-semibold mb-2">
          4. Managing Cookies
        </h2>
        <p className="mb-6 text-gray-700">
          You can control and manage cookies through your browser settings. Most
          browsers allow you to refuse or accept cookies, delete cookies, and
          manage your cookie preferences. Please note that disabling cookies may
          affect your experience with our app.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          5. Your Consent
        </h2>
        <p className="mb-6 text-gray-700">
          By using our app, you consent to the use of cookies in accordance with
          this Cookie Policy. You can change your cookie preferences at any time
          through your browser settings.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          6. Changes to This Cookie Policy
        </h2>
        <p className="mb-6 text-gray-700">
          We may update this Cookie Policy from time to time. Any changes will
          be posted on this page with an updated "Last Updated" date. We encourage
          you to review this policy periodically to stay informed about how we
          use cookies.
        </p>

        <p className="text-sm text-gray-500 font-heading font-semibold mb-2">Last updated: February 6, 2025</p>
      </main>
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-2 rounded-full shadow-lg"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}

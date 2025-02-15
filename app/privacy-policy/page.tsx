"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GaEvent } from "@/lib/gtag";

export default function PrivacyPolicy() {
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
      category: "Privacy Policy",
      action: "Viewed Privacy Policy",
      label: "Privacy Policy",
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
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">Privacy Policy</h1>
        <p className="mb-4 text-lg text-gray-700">
          Welcome to Anipix! Your privacy is critically important to us.
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our services.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <span className="font-heading text-md font-semibold">Personal Data</span>: We collect personal data such as your
            name, email address, and payment details when you register or make
            purchases on our app.
          </li>
          <li>
            <span className="font-heading text-md font-semibold">Usage Data</span>: We collect information on how you use
            the app, including activity logs and user behavior, to improve our
            services.
          </li>
          <li>
            <span className="font-heading text-md font-semibold">Device Data</span>: We may collect device information,
            such as your IP address, browser type, and device model, to ensure
            security and optimize our app for different devices.
          </li>
        </ul>

        <h2 className="font-heading text-lg font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-2 text-gray-700">
          The information we collect is used to provide and improve our
          services, including:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Personalize your experience and content recommendations.</li>
          <li>Process transactions securely and provide customer support.</li>
          <li>Monitor app performance and optimize functionality.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>

        <h2 className="font-heading text-lg font-semibold mb-2">
          3. How We Protect Your Information
        </h2>
        <p className="mb-6 text-gray-700">
          We take your privacy seriously and implement various security measures
          to safeguard your personal information, including encryption,
          secure servers, and regular software updates. However, no data
          transmission method over the internet can be completely secure, and
          we cannot guarantee absolute security.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          4. Sharing Your Information
        </h2>
        <p className="mb-6 text-gray-700">
          We do not sell, rent, or trade your personal information. We may
          share data with third-party service providers who assist us with
          operations such as payment processing, analytics, and marketing, but
          only to the extent necessary to perform these services.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          5. Your Rights and Choices
        </h2>
        <p className="mb-6 text-gray-700">
          You have the right to access, update, or delete your personal data at
          any time. You can also opt out of marketing communications by clicking
          the unsubscribe link in any promotional email or by contacting us
          directly.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          6. Children's Privacy
        </h2>
        <p className="mb-6 text-gray-700">
          Our app is not intended for children under the age of 13. We do not
          knowingly collect personal data from children. If you believe we have
          inadvertently collected such data, please contact us, and we will take
          steps to remove it.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-6 text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last Updated" date. We encourage
          you to review this policy periodically to stay informed about how we
          are protecting your information.
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

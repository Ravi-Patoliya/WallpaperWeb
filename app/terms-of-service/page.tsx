"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/nav";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function TermsOfService() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  return (
    <>
      <Navigation />
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">
          Terms of Service
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Welcome to Anipix! By using our services, you agree to these
          Terms of Service. Please read them carefully before proceeding.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-6 text-gray-700">
          By accessing or using our app, you agree to comply with these terms.
          If you do not agree, you may not use our services.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          2. Changes to the Terms
        </h2>
        <p className="mb-6 text-gray-700">
          We may update these Terms of Service from time to time. When we make
          changes, we will post the updated terms on this page and update the
          "Last updated" date. Your continued use of the app constitutes
          acceptance of any changes.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          3. User Responsibilities
        </h2>
        <p className="mb-6 text-gray-700">
          You are responsible for your actions and content while using our app.
          You agree not to use our services for any illegal or harmful
          activities, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Posting content that violates copyright or intellectual property rights.</li>
          <li>Engaging in any activity that could harm our services or other users.</li>
          <li>Using the app to distribute spam or unsolicited messages.</li>
        </ul>

        <h2 className="font-heading text-lg font-semibold mb-2">
          4. Account Security
        </h2>
        <p className="mb-6 text-gray-700">
          You are responsible for maintaining the security of your account
          information, including your username and password. If you believe your
          account has been compromised, please contact us immediately.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          5. Content Ownership
        </h2>
        <p className="mb-6 text-gray-700">
          All content available on Anipix, including images, designs, and
          text, is protected by copyright. You may use the content for personal
          use only. Any commercial use, redistribution, or reproduction of our
          content is prohibited without prior consent.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          6. Termination of Services
        </h2>
        <p className="mb-6 text-gray-700">
          We may suspend or terminate your access to our services if you violate
          these terms or engage in harmful behavior. You can also terminate your
          account at any time by contacting us.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-6 text-gray-700">
          Our liability is limited to the maximum extent permitted by law. We are
          not responsible for any indirect, incidental, or consequential damages
          arising from your use of our services.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          8. Governing Law
        </h2>
        <p className="mb-6 text-gray-700">
          These Terms of Service are governed by the laws of the jurisdiction
          in which we operate. Any disputes related to these terms will be
          resolved in the appropriate courts of that jurisdiction.
        </p>

        <h2 className="font-heading text-lg font-semibold mb-2">
          9. Contact Us
        </h2>
        <p className="mb-6 text-gray-700">
          If you have any questions or concerns about these Terms of Service,
          please contact us at funkeystyle9@gmail.com.
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

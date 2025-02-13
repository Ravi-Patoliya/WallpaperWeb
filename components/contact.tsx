"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import axiosInstance from "@/helper/axiosInstance";
import { toast } from "react-toastify";

export function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent default form submission
    e.preventDefault();
    // Api call to send email
    await axiosInstance
      .post("/contact/create", contactForm)
      .then((res) => {
        toast.success("Message sent successfully");
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to send message");
      });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="grid  gap-12">
              {/* <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  contact@ANIPIX.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone:</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Address:</span>
                  123 App Street, San Francisco, CA 94105
                </p>
              </div>
            </div> */}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    required
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    value={contactForm.name}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    value={contactForm.email}
                  />
                  <Input
                    placeholder="Subject"
                    required
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        subject: e.target.value,
                      })
                    }
                    value={contactForm.subject}
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                    required
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    value={contactForm.message}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

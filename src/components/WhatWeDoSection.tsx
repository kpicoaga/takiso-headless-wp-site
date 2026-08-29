"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    emoji: "📱",
    title: "MOBILE-FIRST DESIGN",
    desc: "We start building your site for mobile devices first, ensuring the code is lean, optimized, and free of bloat. This makes your site faster, cleaner, and more responsive.",
    link: "#get-started",
    linkText: "→ Get Started",
    showLinkText: false,
  },
  {
    emoji: "💻",
    title: "FULLY RESPONSIVE",
    desc: "Your website will fit perfectly on all screen sizes — mobile phones, tablets, and desktops — so visitors can enjoy a beautiful experience no matter the device.",
    link: "#get-started",
    linkText: "→ Get Started",
    showLinkText: false,
  },
  {
    emoji: "⚡",
    title: "OPTIMIZED PAGE SPEED",
    desc: "If your site takes more than 3 seconds to load, you could lose up to 50% of your visitors. Our sites load in 1 second or less, making sure users reach your content instantly.",
    link: "#page-speed",
    linkText: "→ More About Page Speed",
    showLinkText: false,
  },
  {
    emoji: "🔍",
    title: "SEO SERVICES",
    desc: "We have an in-house SEO specialist who understands how to rank in local markets. With proven case studies and detailed monthly reports, we focus on getting measurable results.",
    link: "#seo",
    linkText: "→ More About SEO",
    showLinkText: false,
  },
  {
    emoji: "📈",
    title: "GOOGLE PPC ADS",
    desc: "We offer expert Google Ads campaign creation and management. Our PPC specialist designs strategies that maximize your ROI with impactful, high-converting ads.",
    link: "#ads",
    linkText: "→ More About Ads",
    showLinkText: false,
  },
  {
    emoji: "🧩",
    title: "MODULAR DESIGN SYSTEM",
    desc: "We build with a scalable component-based structure, so your website is easy to expand and maintain — perfect for growing businesses or future updates.",
    link: "#modular-design",
    linkText: "→ Learn About Our Code",
    showLinkText: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" as const },
  }),
};

export default function WhatWeDoSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-1">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-sans">
            Never Worry About Your
            <span className="block">Website Ever Again</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Takiso Web Designs, we specialize in small business web design and development for clients
            anywhere in Australia. We write all the code by hand so your site works fast and is easy for people to find online, which helps bring more visitors and more revenue to your business. We also manage the edits for you and will never leave you high and dry. Our goal is to build strong, long-term relationships and grow together with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-50 hover:scale-[1.03] group no-underline cursor-pointer"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">{feature.emoji}</span>
              <h4 className="font-semibold mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
              {feature.showLinkText && (
                <span className="text-blue-700 font-semibold hover:underline mt-auto">
                  {feature.linkText}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
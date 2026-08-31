'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    title: '100% Secure',
    description:
      'We build our sites using modern frameworks like React, ensuring clean, optimized code with no unnecessary plugins, meaning there\'s literally nothing that can be hacked.',
  },
  {
    title: 'Custom Designed',
    description:
      'Our designs are made by an in-house design team, which allows us to make anything we want.',
  },
  {
    title: '100 PageSpeed Scores',
    description:
      'Our sites have zero bloat, zero waste, and built with purpose so we get 98-100/100 speed scores with Google.',
  },
  {
    title: 'Money Back Guarantee',
    description:
      'If we can\'t design something you like, you get your money back and the contract is cancelled. We stand by our work.',
  },
  {
    title: 'Unmatched Support',
    description:
      'Call or text us anytime, no phone trees or robots. When you call us you get me - the owner and developer.',
  },
  {
    title: 'We Know SEO',
    description:
      'No snake oil, no tricks, no lies. We explain very clearly what SEO is, how it works, and what we can do to get you ranking.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="mb-10 lg:mb-0 flex justify-center">
            <div className="relative w-full max-w-xl">
              <img
                src="/images/kevin.webp"
                alt="About us"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white text-black text-sm p-3 rounded-md flex items-center gap-3 shadow-md">
                <div className="text-right leading-tight">
                  <p className="font-bold">KEVIN PICOAGA</p>
                  <p className="text-xs">Owner, Developer</p>
                </div>
                <img
                  src="/images/logosmall.webp"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
          {/* Content Section */}
          <div>
            <div className="text-left mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-1">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Websites Starting At{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $0 Down{' '}
                </span>And 150$ Per Month
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                We offer $0 down for a standard 5 page small business website. If
                you need more than that then we have to do custom pricing based on
                the scope of work, number of additional pages, and time involved.{' '}
                <span className="font-semibold text-gray-900">
                  12 month minimum contract.
                </span>{' '}
                Includes design, development, hosting, unlimited edits, 24/7
                support, and lifetime updates.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
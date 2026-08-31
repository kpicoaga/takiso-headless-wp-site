'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, TrendingUp, Target, FileText, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SeoServicesPage() {
  const features = [
    { icon: CheckCircle, text: 'Comprehensive Keyword Research & Analysis' },
    { icon: CheckCircle, text: 'On-Page Optimization (Content, Meta Tags, Structure)' },
    { icon: CheckCircle, text: 'Technical SEO Audits & Implementation' },
    { icon: CheckCircle, text: 'High-Quality Link Building Strategies' },
    { icon: CheckCircle, text: 'Local SEO for Geo-Targeted Businesses' },
    { icon: CheckCircle, text: 'Content Strategy & Creation for SEO' },
    { icon: CheckCircle, text: 'Regular Performance Tracking & Reporting' },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Increased Organic Traffic', description: 'Attract more qualified visitors from search engines.' },
    { icon: Target, title: 'Higher Search Rankings', description: 'Achieve top positions for your target keywords.' },
    { icon: FileText, title: 'Improved Brand Visibility', description: 'Enhance your online presence and brand recognition.' },
    { icon: Link2, title: 'Better ROI', description: 'SEO often provides a higher return on investment compared to other marketing channels.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-100 pt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg mb-6"
          >
            <Search className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Expert <span className="text-gradient-cyan">SEO Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Drive sustainable growth with our data-driven SEO strategies. We help your website rank higher, attract more organic traffic, and convert visitors into customers.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[400px]"
              alt="SEO specialist analyzing data"
              src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Our SEO Approach</h2>
            <p className="text-gray-600">
              We combine technical expertise with creative content strategies to deliver long-term SEO success.
            </p>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <feature.icon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">Key Benefits of Our SEO Services</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link href="/contact?service=seo-services">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Boost Your Rankings
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
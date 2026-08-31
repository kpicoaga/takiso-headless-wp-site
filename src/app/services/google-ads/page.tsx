'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, DollarSign, Users, Filter, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GoogleAdsPage() {
  const features = [
    { icon: CheckCircle, text: 'Strategic Campaign Setup & Structuring' },
    { icon: CheckCircle, text: 'In-depth Keyword Research & Targeting' },
    { icon: CheckCircle, text: 'Compelling Ad Copywriting & A/B Testing' },
    { icon: CheckCircle, text: 'Landing Page Optimization Recommendations' },
    { icon: CheckCircle, text: 'Bid Management & Budget Optimization' },
    { icon: CheckCircle, text: 'Conversion Tracking & Performance Reporting' },
  ];

  const processSteps = [
    { icon: Filter, title: 'Discovery & Strategy', description: 'Understanding your goals and target audience.' },
    { icon: Edit3, title: 'Campaign Creation', description: 'Building targeted ad groups and compelling ads.' },
    { icon: Users, title: 'Optimization & Monitoring', description: 'Continuously improving campaign performance.' },
    { icon: DollarSign, title: 'Reporting & Scaling', description: 'Transparent reporting and strategies for growth.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-amber-100 pt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block p-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-lg mb-6"
          >
            <BarChart3 className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Results-Driven <span className="text-gradient-cyan">Google Ads</span> Management
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Maximize your advertising ROI with our expert Google Ads campaign management.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">What We Offer</h2>
            <p className="text-gray-600">
              Our Google Ads specialists handle every aspect of your campaigns, from initial strategy to ongoing optimization.
            </p>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <feature.icon className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[400px]"
              alt="Google Ads dashboard"
              src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-xl shadow-xl mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">Our Google Ads Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-3 inline-block">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
          <Link href="/contact?service=google-ads">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Free Ads Audit
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
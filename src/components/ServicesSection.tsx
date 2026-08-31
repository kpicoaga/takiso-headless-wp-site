'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Search, ShoppingCart, BarChart3, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesSection = () => {
  const allServices = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Hand-coded websites built from scratch with clean, optimized code for maximum performance and scalability.',
      features: ['Custom Functionality', 'API Integrations', 'CMS Development', 'Scalable Architecture'],
      color: 'from-sky-500 to-sky-600',
      path: '/web-development',
    },
    {
      id: 'mobile-first',
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Beautiful, responsive designs that look perfect on all devices and screen sizes, prioritizing the mobile experience.',
      features: ['Mobile Optimized Layouts', 'Touch Friendly Interfaces', 'App-like Experience', 'Progressive Web App (PWA) capabilities'],
      color: 'from-purple-500 to-purple-600',
      path: '/web-development',
    },
    {
      id: 'seo-services',
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your search rankings, drive organic traffic, and increase visibility.',
      features: ['Keyword Research & Strategy', 'On-Page & Off-Page SEO', 'Technical SEO Audits', 'Local SEO Optimization'],
      color: 'from-green-500 to-green-600',
      path: '/services/seo-services',
    },
    {
      id: 'google-ads',
      icon: BarChart3,
      title: 'Google Ads Management',
      description: 'Professional Google Ads campaigns designed to maximize your ROI and drive qualified leads to your business.',
      features: ['Campaign Setup & Management', 'Keyword Targeting & Optimization', 'Ad Copy Creation & Testing', 'Performance Tracking & Reporting'],
      color: 'from-orange-500 to-orange-600',
      path: '/services/google-ads',
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce websites with secure payment processing, inventory management, and user-friendly interfaces.',
      features: ['Custom Shopping Cart', 'Secure Payment Gateway Integration', 'Inventory & Order Management', 'Product Page Optimization'],
      color: 'from-pink-500 to-pink-600',
      path: '/services/ecommerce-solutions',
    },
    {
      id: 'performance-optimization',
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization services to ensure your website loads lightning fast, improving user experience and SEO.',
      features: ['Code Minification & Optimization', 'Image Compression & Lazy Loading', 'CDN Setup & Configuration', 'Advanced Caching Strategies'],
      color: 'from-indigo-500 to-indigo-600',
      path: '/contact',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web solutions and digital marketing services to help your business succeed online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.path} className="w-full mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
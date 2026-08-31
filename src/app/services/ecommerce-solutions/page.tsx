'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle, CreditCard, Package, Settings, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EcommercePage() {
  const features = [
    { icon: CheckCircle, text: 'Custom E-commerce Website Design' },
    { icon: CheckCircle, text: 'Secure Shopping Cart & Checkout Process' },
    { icon: CheckCircle, text: 'Payment Gateway Integration (Stripe, PayPal, etc.)' },
    { icon: CheckCircle, text: 'Product & Inventory Management Systems' },
    { icon: CheckCircle, text: 'Mobile-Responsive & Optimized for Conversions' },
    { icon: CheckCircle, text: 'SEO for E-commerce Products & Categories' },
  ];

  const platforms = [
    { icon: Store, name: 'Shopify Development', description: 'Custom themes and app integrations.' },
    { icon: Settings, name: 'WooCommerce Solutions', description: 'Flexible WordPress e-commerce.' },
    { icon: Package, name: 'Custom Platforms', description: 'Bespoke solutions for unique needs.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-gradient-to-br from-pink-50 to-rose-100 pt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl shadow-lg mb-6"
          >
            <ShoppingCart className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Powerful <span className="text-gradient-cyan">E-commerce Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Launch and grow your online store with our comprehensive e-commerce development services.
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
              alt="E-commerce website"
              src="https://images.unsplash.com/photo-1539278383962-a7774385fa02"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Features of Our E-commerce Stores</h2>
            <p className="text-gray-600">
              We equip your online store with all the essential features for success.
            </p>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <feature.icon className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" />
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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">E-commerce Platforms We Work With</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mb-4 inline-block">
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
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
          <Link href="/contact?service=ecommerce-solutions">
            <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Selling Online
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
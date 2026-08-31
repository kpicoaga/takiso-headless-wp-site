'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PerformanceSection = () => {
  const stats = [
    { number: '100%', label: 'Satisfaction Guaranteed', color: 'from-blue-500 to-blue-600' },
    { number: '100', label: 'Page Speed Scores', color: 'from-green-500 to-green-600' },
    { number: '5/5', label: 'Google Reviews', color: 'from-purple-500 to-purple-600' },
  ];

  const benefits = [
    { icon: Clock, title: 'Better load times means more traffic and more site conversions over time.' },
    { icon: TrendingUp, title: 'Faster websites can help improve SEO and your Google ads performance.' },
    { icon: Zap, title: 'Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions.' },
  ];

  return (
    <section id="performance" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-blue-300 font-semibold text-lg"
              >
                PERFORMANCE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mt-2 leading-tight"
              >
                We Build{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Better Websites
                </span>{' '}
                That Perform
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100 leading-relaxed"
            >
              When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
            </motion.p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-blue-100 leading-relaxed">{benefit.title}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats and Performance Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Performance Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7c52c497-ed1a-4311-bfae-bee3726a9013/54f434ee29a79ffd515f937b4ded746e.jpg"
                  alt="Google PageSpeed Insights performance dashboard showing 100 scores"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating performance indicators */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                100/100
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                1.0s Load
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
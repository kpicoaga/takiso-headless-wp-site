'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, Database, Cloud, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  const features = [
    { icon: CheckCircle, text: 'Custom Feature Development' },
    { icon: CheckCircle, text: 'Scalable & Secure Architecture' },
    { icon: CheckCircle, text: 'API Design & Integration' },
    { icon: CheckCircle, text: 'Content Management Systems (CMS)' },
    { icon: CheckCircle, text: 'Database Design & Optimization' },
    { icon: CheckCircle, text: 'Cloud Deployment & DevOps' },
  ];

  const techStack = [
    { name: 'React', icon: Layers },
    { name: 'Node.js', icon: Layers },
    { name: 'Python', icon: Layers },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'AWS/GCP/Azure', icon: Cloud },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-gradient-to-br from-sky-50 to-sky-100 pt-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block p-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg mb-6"
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Custom <span className="text-gradient-cyan">Web Development</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We build powerful, scalable, and secure web applications tailored to your unique business needs.
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
              alt="Team of developers collaborating"
              src="https://images.unsplash.com/photo-1665667332739-d33305807f07"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Our Development Expertise</h2>
            <p className="text-gray-600">
              Our development process is agile and collaborative. We focus on writing clean, maintainable code and leveraging the latest technologies to deliver robust solutions.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <feature.icon className="w-6 h-6 text-sky-500 mr-3 flex-shrink-0" />
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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">Technologies We Master</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <tech.icon className="w-10 h-10 text-sky-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link href="/contact?service=web-development">
            <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discuss Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
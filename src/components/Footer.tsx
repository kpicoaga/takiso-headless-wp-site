'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Takiso Web Design
              </span>
            </div>

            <p className="text-blue-100 leading-relaxed max-w-md">
              We believe small businesses deserve better. Just because you&apos;re small, doesn&apos;t mean your site needs to be. Let us make you something amazing.
            </p>

            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <Link href="/contact" onClick={scrollToTop}>Get Started Today</Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xl font-bold text-white mb-6 block">Quick Links</span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.to}
                  onClick={scrollToTop}
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-xl font-bold text-white mb-6 block">Contact Information</span>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200">24/7</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200">kevin@takiso.site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-200 gap-2">
          <span>© 2025 Takiso Web Designs</span>
        </div>
      </div>
    </footer>
  );
};
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  titulo: string;
  subtitulo: string;
  imagenUrl?: string | null;
  textoBoton: string;
  urlBoton: string;
}

export default function HeroSection({
  titulo,
  subtitulo,
  imagenUrl,
  textoBoton,
  urlBoton,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-gray-950 pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        {imagenUrl && (
          <img
            src={imagenUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-900"
              >
                <Zap className="w-4 h-4 mr-2" />
                Custom Designs, Custom Coded!
              </motion.div>

              <motion.h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {titulo.split(" ").slice(0, -1).join(" ")}
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  {titulo.split(" ").slice(-1)}
                </span>
              </motion.h1>

              <motion.p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                {subtitulo}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={urlBoton}>
                <Button className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  {textoBoton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            {imagenUrl ? (
              <img
                src={imagenUrl}
                alt="Professional web designer working on custom website"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-white/40 text-6xl">✨</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
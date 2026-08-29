"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Takiso
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`font-medium transition-colors ${isActive("/pricing") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Pricing
            </Link>
            <Link
              href="/portfolio"
              className={`font-medium transition-colors ${isActive("/portfolio") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Portfolio
            </Link>
            <Link href="/contact">
              <Button className="px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 bg-white overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/portfolio"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    <Button className="w-full rounded-full font-semibold">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream-light/80 backdrop-blur-md border-b border-cream-accent py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-charcoal">
              TW WHOLESALES
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gold uppercase -mt-1 font-semibold">
              Boutique Collection
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Collection", "About", "Location"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm tracking-widest uppercase text-sepia hover:text-gold transition-colors duration-300 font-medium group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/2348034883697"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-charcoal text-cream-light hover:bg-gold hover:text-charcoal px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors duration-300 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Chat
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream-light pt-28 px-8 flex flex-col justify-start space-y-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {["Home", "Collection", "About", "Location"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-widest text-sepia hover:text-gold"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pt-8 border-t border-cream-accent">
              <a
                href="https://wa.me/2348034883697"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-charcoal text-cream-light px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

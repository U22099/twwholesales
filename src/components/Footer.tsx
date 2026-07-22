"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-cream-light border-t border-cream-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-cream-accent/10">
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-widest text-white">
              TW WHOLESALES
            </h3>
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold">
              Boutique Collection
            </p>
            <p className="text-xs text-cream-light/60 max-w-sm font-light leading-relaxed">
              Sourcing the finest luxury footwear and female designer handbags at wholesale value. We cater to boutique retailers and fashion enthusiasts who prioritize absolute elegance.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {["Home", "Collection", "About", "Location"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cream-light/60 hover:text-white transition-colors duration-300 font-medium w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Quick Inquiry
            </h4>
            <p className="text-xs text-cream-light/60 font-light leading-relaxed">
              Got questions? Connect directly with our wholesale representative.
            </p>
            <a
              href={`https://wa.me/2348034883697?text=${encodeURIComponent("Hello, I'm interested in the products I saw on your website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-gold pb-1 hover:text-gold hover:border-white transition-colors duration-300"
            >
              Send WhatsApp message
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-cream-light/40 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} TW Wholesales Store. All rights reserved.
          </p>

          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cream-light/60 hover:text-white transition-colors duration-300"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-gold" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

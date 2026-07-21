"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cream-light pt-20 sm:pt-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12">
        <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8 text-left z-10 pt-4 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="h-px w-6 sm:w-8 bg-gold" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Exquisite Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-charcoal leading-[1.1] tracking-tight"
          >
            Elevate
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-gold-dark font-normal italic pr-2 sm:pr-4">
              Your Style
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md text-xs sm:text-sm md:text-base text-sepia leading-relaxed font-light"
          >
            Curated selection of high-end wholesale footwear and premium designer handbags. Tailored for those who appreciate understated elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#collection"
              className="flex items-center gap-2 sm:gap-3 bg-charcoal text-cream-light hover:bg-gold hover:text-charcoal px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-lg"
            >
              <ShoppingBag className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              Explore Catalog
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#location"
              className="flex items-center gap-2 sm:gap-3 border border-cream-accent bg-white text-sepia hover:border-gold hover:text-gold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-sm"
            >
              Visit Store
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </motion.a>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center h-90 sm:h-112.5 md:h-137.5 lg:h-150 w-full mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-linear-to-tr from-cream-dark via-white to-cream-light rounded-4xl sm:rounded-[40px] border border-cream-accent/60 -z-10 shadow-inner"
          />

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-6 right-4 sm:right-6 w-7/12 aspect-4/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800"
              alt="Designer Handbag"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-6 left-4 sm:left-6 w-7/12 aspect-4/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800"
              alt="Premium Loafers"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-cream-accent shadow-xl flex items-center gap-3 sm:gap-4 z-20"
          >
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-gold font-serif text-base sm:text-lg font-bold">TW</span>
            </div>
            <div>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-sepia font-semibold">
                Lagos, Nigeria
              </p>
              <p className="text-[10px] sm:text-xs text-charcoal font-bold">
                Wholesale Prices
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-charcoal py-4 sm:py-5 overflow-hidden border-t border-cream-accent/10">
        <div className="animate-marquee flex whitespace-nowrap text-cream-light font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase">
          {Array(4)
            .fill([
              "Premium Footwear",
              "Designer Handbags",
              "Luxury Wholesale",
              "Exclusive Collections",
              "Lagos Boutique",
            ])
            .flat()
            .map((text, i) => (
              <span key={i} className="mx-6 sm:mx-8 flex items-center gap-2 sm:gap-3">
                {text}
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold" />
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

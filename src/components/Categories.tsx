"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  const list = [
    {
      title: "Footwear",
      subtitle: "Men's & Women's Designer Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
      link: "#collection",
    },
    {
      title: "Handbags",
      subtitle: "Luxury Female Designer Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800",
      link: "#collection",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="h-px w-6 sm:w-8 bg-gold" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Curated Selection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-charcoal"
            >
              Our Core Specialization
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-xs sm:text-sm text-sepia font-light leading-relaxed"
          >
            We focus exclusively on luxury designer handbags and exquisite men&apos;s & women&apos;s footwear, sourcing only the finest items to guarantee top-tier wholesale quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {list.map((category, idx) => (
            <motion.a
              key={category.title}
              href={category.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative h-80 sm:h-100 md:h-125 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-cream-accent/60 block"
            >
              <div className="absolute inset-0 bg-charcoal/30 z-10 transition-colors duration-500 group-hover:bg-charcoal/20" />
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent z-20" />

              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-30 flex items-end justify-between">
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-[10px] sm:text-xs font-semibold text-gold tracking-widest uppercase">
                    {category.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-charcoal flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal shrink-0"
                >
                  <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

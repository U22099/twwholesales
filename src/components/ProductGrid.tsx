"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard, { Product } from "./ProductCard";

export default function ProductGrid() {
  const [filter, setFilter] = useState<"all" | "footwear" | "handbags">("all");

  const products: Product[] = [
    {
      id: 1,
      name: "Men's Breathable Strip Slip-On Shoes",
      category: "footwear",
      brand: "TW Signature",
      price: "Inquire Price",
      image: "/images/breathable-slipon.jpg",
    },
    {
      id: 2,
      name: "Men’s Designer-Style Chunky Lug-Sole Loafers",
      category: "footwear",
      brand: "TW Premium",
      price: "Inquire Price",
      image: "/images/lug-sole-loafers.jpg",
    },
    {
      id: 3,
      name: "Fernando Melo Men's Luxury Half-shoes",
      category: "footwear",
      brand: "Fernando Melo",
      price: "Inquire Price",
      image: "/images/melo-halfshoes.jpg",
    },
    {
      id: 4,
      name: "Versse Braided Top-Handle Dumpling Bag",
      category: "handbags",
      brand: "Versse",
      price: "Inquire Price",
      image: "/images/versse-dumpling.jpg",
    },
    {
      id: 5,
      name: "Chrisbella 2-in-1 Dome Handbag",
      category: "handbags",
      brand: "Chrisbella",
      price: "Inquire Price",
      image: "/images/chrisbella-dome.jpg",
    },
    {
      id: 6,
      name: "Sovereign Italian Leather Monk Strap",
      category: "footwear",
      brand: "Vinci",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800",
    },
    {
      id: 7,
      name: "Classic Woven Suede Loafers",
      category: "footwear",
      brand: "Melo Luxury",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800",
    },
    {
      id: 8,
      name: "Aurelia Gold-Chain Shoulder Tote",
      category: "handbags",
      brand: "Aurelia",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800",
    },
    {
      id: 9,
      name: "Seraphina Pleated Leather Hobo Bag",
      category: "handbags",
      brand: "Seraphina",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
    },
    {
      id: 10,
      name: "Heritage Suede Wingtip Oxfords",
      category: "footwear",
      brand: "TW Class",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800",
    },
    {
      id: 11,
      name: "Riviera Suede Tassel Slip-ons",
      category: "footwear",
      brand: "TW Riviera",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800",
    },
    {
      id: 12,
      name: "Celine-Style Pebbled Leather Crossbody",
      category: "handbags",
      brand: "TW Luxury",
      price: "Inquire Price",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

 useEffect(() => {
    setFilteredProducts(
     filter === "all"
      ? products
      : products.filter((p) => p.category === filter));
 }, [filter]);

  return (
    <section id="collection" className="py-16 sm:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="h-px w-6 bg-gold" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Exquisite Showcase
            </span>
            <span className="h-px w-6 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-charcoal"
          >
            Featured Collection
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-1.5 sm:space-x-2 bg-cream-dark p-1.5 rounded-full border border-cream-accent/60 max-w-full overflow-x-auto"
          >
            {(["all", "footwear", "handbags"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  filter === tab ? "text-cream-light" : "text-sepia hover:text-charcoal"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-charcoal rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}

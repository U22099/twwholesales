"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Tag } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  category: "footwear" | "handbags";
  image: string;
  brand: string;
  price: string;
  isPlaceholder?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  const rawImage = product.image || "";
  const formattedImage = rawImage.startsWith("./")
    ? rawImage.replace("./", "/")
    : rawImage;

  const whatsappUrl = `https://wa.me/2348034883697?text=${encodeURIComponent(
    `Hello TW Wholesales, I am interested in inquiring about "${product.name}" from your collection. Could you please provide more details?`
  )}`;

  return (
    <div
      {/* initial={{ opacity: 0, y: 20 }} */}
      {/* whileInView={{ opacity: 1, y: 0 }} */}
      {/* viewport={{ once: true }} */}
      {/* exit={{ opacity: 0, scale: 0.9 }} */}
      {/* transition={{ duration: 0.4 }} */}
      className="group relative bg-white rounded-2xl overflow-hidden border border-cream-accent/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative aspect-square bg-cream-dark overflow-hidden flex items-center justify-center">
        {imgError || !formattedImage || product.isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-linear-to-b from-cream-dark to-cream-accent/30">
            <Tag className="w-6 h-6 text-gold mb-2 opacity-80" />
            <span className="text-[9px] tracking-[0.2em] font-bold text-gold uppercase mb-1">
              {product.brand}
            </span>
            <span className="font-serif text-xs font-bold text-sepia line-clamp-2 px-2">
              {product.name}
            </span>
            <span className="text-[8px] text-sepia/60 mt-2 px-2.5 py-0.5 bg-white/70 border border-cream-accent rounded-full font-semibold">
              Boutique Stock
            </span>
          </div>
        ) : (
          <img
            src={formattedImage}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
        )}

        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cream-accent/60 shadow-xs">
          <p className="text-[8px] font-bold tracking-widest text-gold uppercase">
            {product.category}
          </p>
        </div>

        <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 shadow-xs">
          <p className="text-[8px] font-medium tracking-wider text-cream-light uppercase">
            {product.brand}
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between gap-3 bg-white">
        <div>
          <h3 className="font-serif text-xs sm:text-sm font-bold text-charcoal line-clamp-1 group-hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 border-t border-cream-accent/40">
          <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
            {product.price}
          </span>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-charcoal text-cream-light hover:bg-gold hover:text-charcoal px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-xs"
          >
            <MessageSquare className="w-3 h-3" />
            Inquire
          </motion.a>
        </div>
      </div>
    </div>
  );
}

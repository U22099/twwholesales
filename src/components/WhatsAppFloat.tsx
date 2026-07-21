"use client";

import { motion } from "framer-motion";
import { MessageCircleCode } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/2348034883697";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] group"
      >
        <MessageCircleCode className="w-7 h-7 fill-white" />
        <span className="absolute right-16 bg-charcoal text-cream-light text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-cream-accent/20 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
          Inquire Now
        </span>
      </motion.a>
    </motion.div>
  );
}

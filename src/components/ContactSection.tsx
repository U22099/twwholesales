"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const address = "5, Folashade Abiodun Street, New Ipaja Residential Scheme, Joke Ayo Busstop, A.I.T. Estate, Alagbado, Lagos State, Nigeria";
  const whatsappNumber = "08034883697";
  const whatsappUrl = `https://wa.me/2348034883697?text=${encodeURIComponent("Hello, I'm interested in the products I saw on your website.")}`;
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31706.367446399403!2d3.2206450547152694!3d6.610103661850004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5%2CFolashade%20Abiodun%20Street%2C%20New%20Ipaja%20Residential%20Scheme%2C%20Joke%20Ayo%20Busstop%2C%20Alagbado%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1784594092873!5m2!1sen!2sng`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="h-px w-6 sm:w-8 bg-gold" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                  Visit & Connect
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-charcoal"
              >
                Store Location & Contact
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-sepia font-light leading-relaxed"
              >
                Find us at our main outlet in Lagos, or connect with our customer representative on WhatsApp for wholesales inquiries, stock checks, and catalog questions.
              </motion.p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-cream-accent/80 shadow-xs"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-4.5 sm:w-5 h-4.5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-charcoal mb-0.5 sm:mb-1">
                    Store Address
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sepia leading-relaxed">
                    {address}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-cream-accent/80 shadow-xs"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-4.5 sm:w-5 h-4.5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-charcoal mb-0.5 sm:mb-1">
                    WhatsApp Hotline
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sepia leading-relaxed font-semibold">
                    {whatsappNumber}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-cream-accent/80 shadow-xs"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-cream-dark flex items-center justify-center text-gold shrink-0">
                  <Clock className="w-4.5 sm:w-5 h-4.5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-charcoal mb-0.5 sm:mb-1">
                    Business Hours
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sepia leading-relaxed">
                    Monday – Saturday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gold uppercase tracking-wider mt-0.5 sm:mt-1 font-semibold">
                    Closed on Sundays
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-1"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-charcoal text-cream-light hover:bg-gold hover:text-charcoal px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md w-full sm:w-auto sm:inline-flex"
              >
                <MessageSquare className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                Connect on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 h-75 sm:h-100 lg:h-112.5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-cream-accent bg-white p-1.5 sm:p-2 relative group"
          >
            <iframe
              title="TW Wholesales Location Map"
              src={mapEmbedUrl}
              className="w-full h-full rounded-xl sm:rounded-2xl border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-lg border border-cream-accent flex items-center gap-1.5 sm:gap-2 pointer-events-none">
              <span className="text-[8px] sm:text-[10px] font-bold text-charcoal uppercase tracking-widest">
                Lagos, NG
              </span>
              <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

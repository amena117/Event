"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const events = [
    { id: 1, type: "Wedding", title: "Elegant Garden Wedding", url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, type: "Corporate", title: "Annual Tech Gala", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" },
    { id: 3, type: "Birthday", title: "Luxury 30th Birthday", url: "https://images.unsplash.com/photo-1530103862676-de8892ebeea6?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, type: "Outdoor", title: "Lakeside Celebration", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" },
    { id: 5, type: "Wedding", title: "Grand Hall Reception", url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" },
];

export function FeaturedEvents() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Events"
                    subtitle="Explore our portfolio of breathtaking weddings, corporate galas, and luxury celebrations."
                />

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group overflow-hidden break-inside-avoid shadow-lg cursor-pointer rounded-sm"
                            onClick={() => setSelectedImage(event.url)}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={event.url}
                                alt={event.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-avoda-green-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                <ZoomIn className="text-avoda-gold mb-4 w-10 h-10" strokeWidth={1} />
                                <span className="text-avoda-gold uppercase tracking-widest text-xs font-semibold mb-2">{event.type}</span>
                                <h3 className="text-white font-serif text-xl">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={36} strokeWidth={1} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            src={selectedImage}
                            alt="Lightbox Event"
                            className="max-w-full max-h-full object-contain rounded-sm"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

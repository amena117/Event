"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const allEvents = [
    { id: 1, type: "Wedding", title: "Elegant Garden Wedding", url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, type: "Corporate", title: "Annual Tech Gala", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" },
    { id: 3, type: "Birthday", title: "Luxury 30th Birthday", url: "https://images.unsplash.com/photo-1530103862676-de8892ebeea6?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, type: "Outdoor", title: "Lakeside Ceremony", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" },
    { id: 5, type: "Wedding", title: "Grand Hall Reception", url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, type: "Corporate", title: "Winter Product Launch", url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" },
];

const filters = ["All", "Wedding", "Birthday", "Corporate", "Outdoor"];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredEvents = activeFilter === "All"
        ? allEvents
        : allEvents.filter(event => event.type === activeFilter);

    return (
        <div className="pt-20 pb-24 bg-white min-h-screen">
            {/* Portfolio Header */}
            <section className="bg-avoda-cream py-24 text-center px-4">
                <motion.h1
                    className="font-serif text-5xl md:text-6xl text-avoda-green-dark mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Portfolio
                </motion.h1>
                   <motion.p
                    className="max-w-2xl mx-auto text-avoda-green-dark/80 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A curated selection of our finest events. Browse through our galleries to find inspiration for your next celebration.
                </motion.p>
            </section>

            {/* Filter Buttons */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors duration-300 border ${activeFilter === filter
                                    ? "bg-avoda-gold text-avoda-green-dark border-avoda-gold"
                                    : "bg-transparent text-avoda-green-dark border-avoda-green-dark/20 hover:border-avoda-gold hover:text-avoda-gold"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={event.id}
                                className="relative group overflow-hidden bg-gray-100 aspect-square cursor-pointer"
                                onClick={() => setSelectedImage(event.url)}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={event.url}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-avoda-green-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                    <ZoomIn className="text-avoda-gold mb-4 w-10 h-10" strokeWidth={1} />
                                    <span className="text-avoda-gold uppercase tracking-widest text-xs font-semibold mb-2">{event.type}</span>
                                    <h3 className="text-white font-serif text-xl">{event.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

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
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

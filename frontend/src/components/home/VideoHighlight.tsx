"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function VideoHighlight() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image (Cover image for video) */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-avoda-green-dark/50 mix-blend-multiply" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    className="uppercase tracking-[0.2em] text-avoda-gold text-sm font-semibold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Cinematic Experience
                </motion.p>

                <motion.h2
                    className="font-serif text-4xl md:text-6xl text-white mb-12 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Moments we captured.
                </motion.h2>

                <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-avoda-gold/20 backdrop-blur-sm border border-avoda-gold hover:bg-avoda-gold transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="absolute inset-0 rounded-full border border-avoda-gold animate-ping opacity-50"></span>
                    <Play className="w-8 h-8 text-white ml-2 group-hover:text-avoda-green-dark transition-colors" fill="currentColor" />
                </motion.button>
            </div>

            {/* Video Modal Placeholder */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
                            onClick={() => setIsPlaying(false)}
                        >
                            <X size={36} strokeWidth={1} />
                        </button>

                        <div className="w-full max-w-6xl aspect-video bg-avoda-green-dark border border-white/10 flex flex-col items-center justify-center shadow-2xl relative">
                            <Play className="w-16 h-16 text-white/20 mb-4" />
                            <p className="text-white/50 font-serif text-xl tracking-wider">Cinematic Video Player (Placeholder)</p>

                            {/* Note: In production you'd use a real <video> or <iframe> here */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

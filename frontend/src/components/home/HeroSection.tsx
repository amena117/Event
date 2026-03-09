"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Setup (Simulating Video Background with CSS & an image) */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-avoda-green-dark/40 backdrop-brightness-75" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.p
                    className="uppercase tracking-[0.3em] text-white/80 text-sm md:text-base font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Luxury Event Services
                </motion.p>

                <motion.h1
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Crafting unforgettable <br className="hidden md:block" /> celebrations.
                </motion.h1>

                <motion.p
                    className="text-white/90 text-sm md:text-lg max-w-2xl font-light leading-relaxed mb-12 drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Amen transforms weddings, celebrations, and corporate events into extraordinary experiences through design, photography, and storytelling.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link
                        href="/booking"
                        className="px-8 py-4 bg-avoda-gold text-avoda-green-dark uppercase tracking-widest text-sm font-semibold hover:bg-avoda-gold-light transition-colors shadow-xl"
                    >
                        Book Your Event
                    </Link>
                    <Link
                        href="/portfolio"
                        className="px-8 py-4 border border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-avoda-green-dark transition-colors backdrop-blur-sm"
                    >
                        View Portfolio
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="uppercase tracking-widest text-white/70 text-[10px]">Scroll Discover</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-white/70" size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const posts = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103862676-de8892ebeea6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop"
];

export function InstagramShowcase() {
    return (
        <section className="py-24 bg-avoda-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Join Us On Instagram"
                    subtitle="@avoda.events — Follow us for daily inspiration and behind-the-scenes glimpses."
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-12 w-full">
                    {posts.map((url, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="relative group aspect-square overflow-hidden block"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={url}
                                alt="Instagram post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-avoda-green-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="text-white w-8 h-8" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

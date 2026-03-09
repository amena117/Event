"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
    return (
        <div className="pt-20 bg-white">
            {/* Hero */}
          
             <section className="bg-avoda-cream py-24 text-center px-4">
                <motion.h1
                    className="font-serif text-5xl md:text-6xl text-avoda-green-dark mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
               
                        Our Story
                    </motion.h1>
              
            </section>

            {/* Brand & Mission */}
            <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="uppercase tracking-[0.2em] text-avoda-gold text-sm font-semibold mb-6">The Amen Standard</h2>
                    <p className="font-serif text-3xl md:text-4xl text-avoda-green-dark leading-relaxed mb-10">
                        "Amen was founded to turn special moments into unforgettable memories through creativity, design, and storytelling."
                    </p>
                    <p className="text-avoda-green-dark/80 text-lg font-light leading-relaxed mb-8">
                        What began as a passion for capturing fleeting moments has evolved into a premier luxury event agency. We believe that every celebration is a unique narrative waiting to be told. Our mission is to seamlessly blend architectural design, exquisite culinary arts, and cinematic storytelling to create environments where magic happens naturally.
                    </p>
                    <div className="w-16 h-1 bg-avoda-gold mx-auto mt-12" />
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-avoda-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading title="The Visionaries" subtitle="Meet the passionate leaders behind every flawless Avoda experience." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                        {[
                            { name: "Eleanor Vance", role: "Creative Director & Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
                            { name: "Marcus Thorne", role: "Head of Photography", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
                            { name: "Sophia Lin", role: "Lead Event Producer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" }
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm mx-auto shadow-lg max-w-sm">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-avoda-green-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <h3 className="font-serif text-2xl text-avoda-green-dark mb-2">{member.name}</h3>
                                <p className="text-avoda-gold uppercase tracking-widest text-xs font-semibold">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

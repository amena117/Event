"use client";

import { motion } from "framer-motion";
import { Sparkles, Camera, Video, UtensilsCrossed, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
    {
        id: "decoration",
        title: "Event Decoration",
        description: "Luxury setups and creative themes tailored to your vision.",
        icon: <Sparkles className="w-8 h-8 mb-4 stroke-avoda-gold" strokeWidth={1} />,
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: "photography",
        title: "Photography",
        description: "Professional event photography capturing unforgettable moments.",
        icon: <Camera className="w-8 h-8 mb-4 stroke-avoda-gold" strokeWidth={1} />,
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "videography",
        title: "Videography",
        description: "Cinematic event films and meticulously crafted highlight videos.",
        icon: <Video className="w-8 h-8 mb-4 stroke-avoda-gold" strokeWidth={1} />,
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "catering",
        title: "Catering",
        description: "High-quality, curated cuisine tailored for luxury special events.",
        icon: <UtensilsCrossed className="w-8 h-8 mb-4 stroke-avoda-gold" strokeWidth={1} />,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    }
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-avoda-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Our Premium Services"
                    subtitle="Discover curated experiences designed to elevate your celebration to the highest standards."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-white shadow-xl isolate"
                        >
                            {/* Background Image (Revealed on hover) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-0 group-hover:opacity-100 -z-20"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="absolute inset-0 bg-avoda-green-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            {/* Card Content */}
                            <div className="p-8 h-full flex flex-col justify-between transition-colors duration-500 group-hover:text-white text-avoda-green-dark">
                                <div>
                                    <div className="group-hover:-translate-y-2 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-semibold mb-4 group-hover:-translate-y-2 transition-transform duration-500">{service.title}</h3>
                                    <p className="text-sm opacity-80 leading-relaxed mb-6 group-hover:opacity-90 group-hover:-translate-y-2 transition-transform duration-500 line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="overflow-hidden h-0 group-hover:h-auto group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
                                    <Link
                                        href={`/services#${service.id}`}
                                        className="flex items-center text-avoda-gold font-medium uppercase tracking-widest text-xs group/link"
                                    >
                                        Explore Service
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

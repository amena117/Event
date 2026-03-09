"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        id: "decoration",
        title: "Event Decoration",
        description: "Our hallmark service. We provide luxury event setups, creating bespoke themes and transformative spaces. From intimate floral arrangements to grand architectural installations, our design team ensures every visual element speaks to your unique story. We source the finest materials and employ top-tier florists and designers.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        features: ["Bespoke Floral Design", "Custom Lighting Systems", "Luxury Furniture Rentals", "Thematic Architecture"]
    },
    {
        id: "photography",
        title: "Photography",
        description: "Professional event photography dedicated to capturing the unforgettable moments, emotions, and subtle details of your celebration. Our experienced photographers blend photojournalism with fine-art portraiture to deliver a timeless gallery of your most cherished memories.",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
        features: ["Full Day Coverage", "Pre-event Shoots", "High-Resolution Galleries", "Custom Fine-Art Albums"],
        reverse: true
    },
    {
        id: "videography",
        title: "Videography",
        description: "We create cinematic event films and captivating highlight videos that allow you to relive your celebration for years to come. Using state-of-the-art equipment and masterful editing, our storytellers craft emotional, high-definition narratives.",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
        features: ["4K Cinematic Filming", "Drone Aerial Footage", "Feature-Length Edits", "Social Media Teasers"]
    },
    {
        id: "catering",
        title: "Catering",
        description: "High-quality, curated cuisine tailored specifically for your special event. Our partnered executive chefs design exquisite menus that delight the senses, accommodating global palates and specific dietary requirements with impeccable, white-glove service.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
        features: ["Customized Menus", "Formal Plated Dinners", "Interactive Food Stations", "Premium Bar Services"],
        reverse: true
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-20 bg-white">
            {/* Header */}
            <section className="bg-avoda-cream py-24 text-center px-4">
                <motion.h1
                    className="font-serif text-5xl md:text-6xl text-avoda-green-dark mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
                <motion.p
                    className="max-w-2xl mx-auto text-avoda-green-dark/80 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Comprehensive luxury event solutions tailored to elevate your vision into a remarkable reality.
                </motion.p>
            </section>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
                {services.map((service, index) => (
                    <section key={service.id} id={service.id} className="scroll-mt-32">
                        <div className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 border-[1px] border-white/30 m-6 rounded-sm pointer-events-none" />
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="font-serif text-4xl lg:text-5xl text-avoda-green-dark mb-6">
                                    {service.title}
                                </h2>
                                <div className="w-16 h-1 bg-avoda-gold mb-8" />
                                <p className="text-avoda-green-dark/80 text-lg font-light leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-12">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-avoda-green-dark/90 font-medium">
                                            <span className="w-2 h-2 bg-avoda-gold rounded-full mr-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/booking?service=${service.id}`}
                                    className="inline-block px-8 py-4 bg-avoda-green-dark text-white uppercase tracking-widest text-sm font-semibold hover:bg-avoda-gold hover:text-avoda-green-dark transition-colors"
                                >
                                    Request Quote
                                </Link>
                            </motion.div>

                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

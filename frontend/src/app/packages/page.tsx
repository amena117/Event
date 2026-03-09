"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Sparkles, Camera, Video, UtensilsCrossed, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/components/home/CallToAction";

const packages = [
    {
        id: "silver",
        name: "Silver Package",
        icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
        price: "Custom Quote",
        description: "A refined starting point for intimate and meaningful celebrations.",
        features: [
            { icon: <Sparkles className="w-4 h-4" />, label: "Event Decoration" },
            { icon: <Camera className="w-4 h-4" />, label: "Professional Photography" },
            { icon: <Lightbulb className="w-4 h-4" />, label: "Basic Lighting Setup" },
        ],
        buttonText: "Request Quote",
        isPopular: false,
    },
    {
        id: "gold",
        name: "Gold Package",
        icon: <Camera className="w-8 h-8" strokeWidth={1.5} />,
        price: "Custom Quote",
        description: "Our most sought-after choice, fused to perfection for stunning events.",
        features: [
            { icon: <Sparkles className="w-4 h-4" />, label: "Event Decoration" },
            { icon: <Camera className="w-4 h-4" />, label: "Professional Photography" },
            { icon: <Video className="w-4 h-4" />, label: "Cinematic Videography" },
            { icon: <Lightbulb className="w-4 h-4" />, label: "Lighting Setup" },
            { icon: <Users className="w-4 h-4" />, label: "Event Coordination" },
        ],
        buttonText: "Request Quote",
        isPopular: true,
    },
    {
        id: "platinum",
        name: "Platinum Package",
        icon: <Video className="w-8 h-8" strokeWidth={1.5} />,
        price: "Custom Quote",
        description: "The ultimate all-inclusive experience for unforgettable luxury events.",
        features: [
            { icon: <Sparkles className="w-4 h-4" />, label: "Luxury Event Decoration" },
            { icon: <Camera className="w-4 h-4" />, label: "Professional Photography" },
            { icon: <Video className="w-4 h-4" />, label: "Cinematic Videography" },
            { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Catering Service" },
            { icon: <Lightbulb className="w-4 h-4" />, label: "Premium Lighting" },
            { icon: <Users className="w-4 h-4" />, label: "Full Event Coordination" },
        ],
        buttonText: "Book This Package",
        isPopular: false,
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function PackagesPage() {
    return (
        <div className="pt-20 bg-white">
            {/* Hero Banner */}
            <section className="relative py-24 bg-avoda-green-dark text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),_transparent_60%)]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <motion.p
                        className="uppercase tracking-[0.3em] text-avoda-gold text-xs font-semibold mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Tailored Experiences
                    </motion.p>
                    <motion.h1
                        className="font-serif text-5xl md:text-6xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Choose Your Event Experience
                    </motion.h1>
                    <motion.p
                        className="text-avoda-cream/80 text-lg font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Flexible packages designed to make your event unforgettable.
                    </motion.p>
                </div>
            </section>

            {/* Package Cards */}
            <section className="py-28 bg-avoda-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
                    >
                        {packages.map((pkg) => (
                            <motion.div
                                key={pkg.id}
                                variants={cardVariants}
                                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                                className={`relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl ${pkg.isPopular ? "ring-2 ring-avoda-gold md:scale-105" : ""
                                    }`}
                            >
                                {pkg.isPopular && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-avoda-gold via-avoda-gold-light to-avoda-gold" />
                                )}

                                <div
                                    className={`p-8 text-center ${pkg.isPopular ? "bg-avoda-green-dark" : "bg-avoda-cream/60"}`}
                                >
                                    {pkg.isPopular && (
                                        <span className="inline-block mb-4 px-4 py-1 bg-avoda-gold text-white uppercase text-xs tracking-widest font-bold rounded-full">
                                            Most Popular
                                        </span>
                                    )}
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${pkg.isPopular ? "bg-avoda-gold/20 text-avoda-gold" : "bg-white text-avoda-green-dark shadow-sm"
                                            }`}
                                    >
                                        {pkg.icon}
                                    </div>
                                    <h2
                                        className={`font-serif text-2xl mb-2 ${pkg.isPopular ? "text-white" : "text-avoda-green-dark"}`}
                                    >
                                        {pkg.name}
                                    </h2>
                                    <p className={`text-sm leading-relaxed min-h-[48px] ${pkg.isPopular ? "text-avoda-cream/80" : "text-avoda-green-dark/70"}`}>
                                        {pkg.description}
                                    </p>
                                </div>

                                <div className="flex flex-col flex-grow p-8">
                                    <ul className="space-y-4 flex-grow mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <div className="w-7 h-7 rounded-full bg-avoda-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                                    <Check className="w-4 h-4 text-avoda-gold" strokeWidth={3} />
                                                </div>
                                                <span className="text-avoda-green-dark/80 text-sm">{feature.label}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/booking?package=${pkg.id}`}
                                        className={`w-full py-4 rounded-full text-center uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${pkg.isPopular
                                            ? "bg-avoda-gold text-white hover:bg-avoda-gold-light shadow-lg"
                                            : "bg-avoda-green-dark text-white hover:bg-avoda-green-dark/90"
                                            }`}
                                    >
                                        {pkg.buttonText}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Feature Comparison Note */}
            <section className="py-20 bg-white text-center px-4">
                <SectionHeading
                    title="All Packages Include"
                    subtitle="Every Avoda experience comes with our hallmark commitment to excellence."
                />
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        "Dedicated Event Manager",
                        "Free Consultation",
                        "Flexible Payment Plans",
                        "Satisfaction Guarantee",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-avoda-gold/10 flex items-center justify-center mb-4">
                                <Check className="w-5 h-5 text-avoda-gold" strokeWidth={3} />
                            </div>
                            <p className="text-sm font-medium text-avoda-green-dark">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CallToAction />
        </div>
    );
}

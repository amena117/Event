"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const packages = [
    {
        name: "Silver Package",
        price: "Custom Quote",
        features: [
            "Event Decoration",
            "Professional Photography",
            "Basic Lighting Setup"
        ],
        buttonText: "Request Quote"
    },
    {
        name: "Gold Package",
        isPopular: true,
        price: "Custom Quote",
        features: [
            "Event Decoration",
            "Professional Photography",
            "Cinematic Videography",
            "Lighting Setup",
            "Event Coordination"
        ],
        buttonText: "Request Quote"
    },
    {
        name: "Platinum Package",
        price: "Custom Quote",
        features: [
            "Luxury Event Decoration",
            "Professional Photography",
            "Cinematic Videography",
            "Catering Service",
            "Premium Lighting",
            "Full Event Coordination"
        ],
        buttonText: "Book This Package"
    }
];

export function EventPackages() {
    return (
        <section className="py-24 bg-avoda-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Choose Your Event Experience"
                    subtitle="Flexible packages designed to make your event unforgettable."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto items-center">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={`relative flex flex-col p-8 sm:p-10 bg-white rounded-2xl transition-all duration-300 ${pkg.isPopular
                                    ? "border-2 border-avoda-gold shadow-2xl relative z-10 md:scale-105"
                                    : "border border-gray-100 shadow-xl"
                                }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-avoda-gold text-white uppercase tracking-widest text-xs font-bold px-6 py-2 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8 border-b border-gray-100 pb-8 mt-4">
                                <h3 className="font-serif text-3xl text-avoda-green-dark mb-4">{pkg.name}</h3>
                                <p className="text-4xl font-light text-avoda-gold mb-2">{pkg.price}</p>
                            </div>

                            <ul className="flex-grow space-y-5 mb-10">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-avoda-green-dark/80">
                                        <div className="w-6 h-6 rounded-full bg-avoda-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                            <Check className="w-4 h-4 text-avoda-gold" strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/booking"
                                className={`w-full py-4 rounded-full uppercase tracking-widest text-sm font-semibold text-center transition-all duration-300 ${pkg.isPopular
                                        ? "bg-avoda-gold text-avoda-green-dark hover:bg-avoda-gold-light shadow-lg hover:shadow-xl"
                                        : "bg-avoda-green-dark text-white hover:bg-avoda-green-dark/90"
                                    }`}
                            >
                                {pkg.buttonText}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

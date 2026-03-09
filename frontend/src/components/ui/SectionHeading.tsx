"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
    return (
        <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
            <motion.h2
                className={`font-serif text-3xl md:text-5xl mb-6 ${light ? "text-white" : "text-avoda-green-dark"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className={`max-w-2xl text-base md:text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-avoda-cream/80" : "text-avoda-green-dark/80"
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.div
                className={`w-24 h-1 mt-8 ${centered ? "mx-auto" : ""} bg-avoda-gold`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
        </div>
    );
}

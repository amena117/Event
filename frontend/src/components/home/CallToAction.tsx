"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="py-32 relative overflow-hidden bg-avoda-green-dark">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-avoda-gold/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-avoda-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    className="font-serif text-4xl md:text-6xl text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    Let's create your <span className="text-avoda-gold italic">dream</span> event.
                </motion.h2>

                <motion.p
                    className="text-avoda-cream/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Reach out today to discuss your vision. Our team is ready to turn your ideas into an unforgettable reality.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="/booking"
                        className="w-full sm:w-auto px-10 py-4 bg-avoda-gold text-avoda-green-dark uppercase tracking-widest text-sm font-semibold hover:bg-avoda-white transition-colors min-w-[200px]"
                    >
                        Book Your Event
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-4 border border-avoda-cream/30 text-avoda-cream uppercase tracking-widest text-sm font-semibold hover:border-avoda-gold hover:text-avoda-gold transition-colors min-w-[200px]"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

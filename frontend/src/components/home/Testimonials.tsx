"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
    {
        id: 1,
        name: "Sarah & James",
        event: "Wedding Celebration",
        text: "Avoda turned our wedding into an absolute dream. The attention to detail in the decoration and photography was breathtaking. They exceeded every expectation."
    },
    {
        id: 2,
        name: "Elena Richardson",
        event: "Corporate Gala",
        text: "The professionalism and creativity of the Avoda team are unmatched. They transformed our annual gala into a spectacular event that our clients are still talking about."
    },
    {
        id: 3,
        name: "Michael T.",
        event: "30th Birthday Party",
        text: "From start to finish, the planning was seamless. The catering was exquisite, and the lighting created the perfect ambiance. Highly recommend their services."
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Client Stories"
                    subtitle="Read what our clients have to say about their experiences working with Avoda."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-avoda-cream p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex mb-6 space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-avoda-gold fill-avoda-gold" />
                                ))}
                            </div>

                            <blockquote className="text-avoda-green-dark/80 italic leading-relaxed mb-8 min-h-[120px]">
                                "{testimonial.text}"
                            </blockquote>

                            <div className="border-t border-avoda-green-dark/10 pt-6">
                                <p className="font-serif font-bold text-lg text-avoda-green-dark uppercase tracking-wide">{testimonial.name}</p>
                                <p className="text-sm text-avoda-gold uppercase tracking-widest mt-1">{testimonial.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

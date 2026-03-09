"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send, Clock } from "lucide-react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate a short delay for UX
        await new Promise((r) => setTimeout(r, 1000));
        setSubmitted(true);
        setIsSubmitting(false);
    };

    const inputClass =
        "w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-avoda-gold/50 focus:border-avoda-gold transition-all duration-300 text-avoda-green-dark placeholder-gray-400";
    const labelClass = "block text-sm font-medium text-avoda-green-dark/80 mb-2";

    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Hero Banner */}
            <section className="bg-avoda-green-dark py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.12),_transparent_60%)]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <motion.p
                        className="uppercase tracking-[0.3em] text-avoda-gold text-xs font-semibold mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get In Touch
                    </motion.p>
                    <motion.h1
                        className="font-serif text-5xl md:text-6xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-avoda-cream/80 text-lg font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We'd love to hear from you. Reach out and our team will respond promptly.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-avoda-cream">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+251 911 000 000", href: "tel:+251911000000" },
                            { icon: <Mail className="w-6 h-6" />, label: "Email", value: "hello@avoda-events.com", href: "mailto:hello@avoda-events.com" },
                            { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Addis Ababa, Ethiopia", href: "#map" },
                            { icon: <Clock className="w-6 h-6" />, label: "Hours", value: "Mon–Sat, 9am–6pm", href: undefined },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href ?? "#"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-full bg-avoda-gold/10 flex items-center justify-center mb-5 text-avoda-gold group-hover:bg-avoda-gold group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <p className="text-xs uppercase tracking-widest text-avoda-green-dark/50 font-semibold mb-2">{item.label}</p>
                                <p className="text-avoda-green-dark font-medium text-sm leading-relaxed">{item.value}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-50"
                    >
                        <h2 className="font-serif text-3xl text-avoda-green-dark mb-2">Send a Message</h2>
                        <p className="text-avoda-green-dark/60 text-sm mb-10">Fill out the form and we'll get back to you within 24 hours.</p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-16 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                                    <Send className="w-7 h-7 text-green-500" />
                                </div>
                                <h3 className="font-serif text-2xl text-avoda-green-dark mb-3">Message Sent!</h3>
                                <p className="text-avoda-green-dark/70 text-sm leading-relaxed max-w-xs mx-auto">
                                    Thank you for reaching out to Avoda. A member of our team will contact you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Full Name</label>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={inputClass}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputClass}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Phone Number</label>
                                        <input
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={inputClass}
                                            placeholder="+251 911 000 000"
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Subject</label>
                                        <input
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className={inputClass}
                                            placeholder="e.g. Wedding Inquiry"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-avoda-gold text-white rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-avoda-gold-light transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-3"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send className="w-4 h-4" />}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Map + Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Map */}
                        <div id="map" className="w-full h-[340px] rounded-3xl overflow-hidden shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.1152345037!2d38.6922384738593!3d8.963177093282298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24e49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Social + Quick Contact */}
                        <div className="bg-avoda-green-dark rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-avoda-gold/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl mb-2">Connect With Us</h3>
                                <p className="text-avoda-cream/70 text-sm mb-8 leading-relaxed">
                                    Follow our journey on social media or reach us instantly via WhatsApp.
                                </p>

                                <div className="flex gap-4 mb-10">
                                    <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-avoda-gold transition-colors duration-300">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-avoda-gold transition-colors duration-300">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://wa.me/251911000000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                </div>

                                <a
                                    href="https://wa.me/251911000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] transition-colors px-6 py-4 rounded-full font-semibold text-sm uppercase tracking-wider w-full justify-center"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}

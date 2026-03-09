"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-avoda-green-dark text-avoda-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-serif text-4xl font-bold tracking-tight text-white mb-6 inline-block">
                           Amen
                        </Link>
                        <p className="text-avoda-cream/80 text-sm leading-relaxed max-w-xs">
                            Transforming weddings, celebrations, and corporate events into extraordinary experiences through design, photography, and storytelling.
                        </p>
                    </div>

                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-avoda-gold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Home</Link></li>
                            <li><Link href="/services" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Services</Link></li>
                            <li><Link href="/portfolio" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Portfolio</Link></li>
                            <li><Link href="/packages" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Packages</Link></li>
                            <li><Link href="/about" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-avoda-gold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services#decoration" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Event Decoration</Link></li>
                            <li><Link href="/services#photography" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Photography</Link></li>
                            <li><Link href="/services#videography" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Videography</Link></li>
                            <li><Link href="/services#catering" className="text-avoda-cream/80 hover:text-avoda-gold transition-colors text-sm">Catering Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="uppercase tracking-widest text-xs font-semibold text-avoda-gold mb-6">Connect</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-avoda-cream/80 text-sm">
                                <MapPin size={18} className="mr-3 text-avoda-gold flex-shrink-0 mt-0.5" />
                                <span>Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center text-avoda-cream/80 text-sm">
                                <Phone size={18} className="mr-3 text-avoda-gold flex-shrink-0" />
                                <span>+251 911 000 000</span>
                            </li>
                            <li className="flex items-center text-avoda-cream/80 text-sm">
                                <Mail size={18} className="mr-3 text-avoda-gold flex-shrink-0" />
                                <span>hello@amen-events.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-avoda-cream/20 flex items-center justify-center text-white hover:border-avoda-gold hover:text-avoda-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-avoda-cream/20 flex items-center justify-center text-white hover:border-avoda-gold hover:text-avoda-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-avoda-cream/50 text-xs">
                        © {new Date().getFullYear()} Amen Events. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 space-x-4 text-xs text-avoda-cream/50">
                        <Link href="/privacy" className="hover:text-avoda-gold transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-avoda-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

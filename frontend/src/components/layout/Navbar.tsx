"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Next.js hook to get current path

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname(); // current route
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine link color
  const getLinkColor = () => {
    if (!isHome) return "text-avoda-green-dark"; // other pages
    return isScrolled ? "text-avoda-green-dark" : "text-white/90"; // home page
  };

  const getBrandColor = () => {
    if (!isHome) return "text-avoda-green-dark";
    return isScrolled ? "text-avoda-green-dark" : "text-white";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-serif text-3xl font-bold tracking-tight ${getBrandColor()}`}
            >
              Amen
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide uppercase font-medium hover:text-avoda-gold transition-colors ${getLinkColor()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/booking"
              className={`px-6 py-2 border transition-all duration-300 uppercase tracking-widest text-sm
                ${isScrolled || !isHome
                  ? "border-avoda-green-dark text-avoda-green-dark hover:bg-avoda-green-dark hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-avoda-green-dark"
                }`}
            >
              Book Event
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled || !isHome ? "text-avoda-green-dark" : "text-white"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-avoda-green-dark text-avoda-cream absolute top-20 left-0 w-full shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 text-base tracking-wider uppercase border-b border-white/10 last:border-0 hover:text-avoda-gold"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 bg-avoda-gold text-avoda-green-dark uppercase tracking-widest font-semibold text-sm hover:bg-avoda-gold-light transition-colors"
              >
                Book Event
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
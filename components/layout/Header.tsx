"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only on the homepage hero — goes solid on all inner pages and once scrolled
  const isTransparent = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isTransparent ? "bg-transparent" : "bg-navy shadow-md"
      }`}
    >
      {/* 3px sunrise→gold accent strip — hidden while transparent to avoid floating stripe */}
      <div
        className={`h-[3px] bg-gradient-to-r from-sunrise to-gold transition-opacity duration-300 ${
          isTransparent ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — transparent background, no wrapper box */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/Logo_image_without_bg.png"
              alt="HoCAID — Horizon Community Initiative for Aid and Development"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto"
              sizes="(max-width: 768px) 133px, 160px"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold font-sans text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-4 px-4 py-2 rounded bg-gradient-to-r from-sunrise to-gold text-navy font-sans text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav — always opaque so menu items stay legible */}
      {mobileOpen && (
        <nav
          className={`md:hidden border-t border-white/10 px-4 pb-4 ${
            isTransparent ? "bg-navy/95 backdrop-blur-sm" : "bg-navy"
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80 hover:text-gold font-sans text-sm font-medium border-b border-white/10 last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="block mt-3 px-4 py-2 rounded bg-gradient-to-r from-sunrise to-gold text-navy font-sans text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            Donate Now
          </Link>
        </nav>
      )}
    </header>
  );
}

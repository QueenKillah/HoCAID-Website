"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/careers", label: "Careers" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-navy">
      {/* 3px sunrise→gold accent strip */}
      <div className="h-[3px] bg-gradient-to-r from-sunrise to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="h-10 md:h-12 overflow-hidden flex items-center">
              <Image
                src="/images/Logo_image_without_bg.png"
                alt="HoCAID — Horizon Community Initiative for Aid and Development"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto"
                sizes="(max-width: 768px) 133px, 160px"
                priority
              />
            </div>
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

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-navy border-t border-white/10 px-4 pb-4"
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

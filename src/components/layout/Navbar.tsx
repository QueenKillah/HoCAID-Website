"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Elevated shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-navy text-white transition-shadow duration-300",
        scrolled ? "shadow-xl shadow-navy/40" : "shadow-md"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          aria-label="HoCAID — go to homepage"
        >
          {!logoError ? (
            <div
              className="overflow-hidden"
              style={{ width: 108, height: 36 }}
            >
              <Image
                src="/images/logo.png"
                alt="HoCAID"
                width={120}
                height={40}
                className="h-full w-auto"
                style={{
                  filter: "brightness(0) invert(1)",
                  transform: "scale(1.15)",
                  transformOrigin: "center",
                }}
                priority
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <span className="font-display text-xl font-bold tracking-tight">
              Ho<span className="text-gold">CAID</span>
            </span>
          )}
        </Link>

        {/* ── Desktop nav ── */}
        <ul
          className="hidden items-center gap-0.5 lg:flex"
          role="list"
        >
          {NAV_LINKS.filter((l) => l.label !== "Home").map((link) =>
            link.children ? (
              /* Dropdown item */
              <li key={link.href} className="group relative">
                <button
                  className={cn(
                    "flex min-h-[44px] items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  )}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  role="menu"
                  className="invisible absolute left-0 top-full mt-1 min-w-[230px] translate-y-1 rounded-xl border border-grey/10 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Link
                    href={link.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-cream"
                  >
                    All {link.label}
                  </Link>
                  <div className="mx-4 my-1 border-t border-grey/20" />
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      className={cn(
                        "block px-4 py-2.5 text-sm transition-colors hover:bg-cream hover:text-navy",
                        isActive(child.href)
                          ? "font-semibold text-orange"
                          : "text-grey"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* ── Desktop Donate CTA ── */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/get-involved#donate"
            className="flex min-h-[44px] items-center rounded-lg bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Donate
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="relative z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute transition-all duration-200",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
            )}
          >
            <X size={24} />
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "absolute transition-all duration-200",
              isOpen ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            )}
          >
            <Menu size={24} />
          </span>
        </button>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          "fixed inset-0 top-[64px] z-40 flex flex-col overflow-y-auto bg-navy transition-all duration-300 ease-in-out lg:hidden",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-4 pb-8 pt-4">
          <ul className="flex flex-col" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                <Link
                  href={link.href}
                  className={cn(
                    "flex min-h-[56px] items-center text-lg font-semibold transition-colors",
                    isActive(link.href) ? "text-gold" : "text-white hover:text-gold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>

                {/* Pillar sub-links inside mobile menu */}
                {link.children && (
                  <ul className="mb-3 ml-3 flex flex-col gap-0.5 border-l-2 border-white/10 pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "flex min-h-[40px] items-center text-sm transition-colors",
                            isActive(child.href)
                              ? "font-semibold text-gold"
                              : "text-white/70 hover:text-white"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/get-involved#donate"
              className="flex min-h-[52px] items-center justify-center rounded-xl bg-gradient-cta px-6 text-base font-bold text-white shadow-md transition-opacity hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white/30 px-6 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

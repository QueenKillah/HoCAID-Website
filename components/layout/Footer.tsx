import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/careers", label: "Careers" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://www.twitter.com/hocaidng",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.068zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hocaid",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hocaidng",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/hocaid",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* 3px sunrise→gold accent strip */}
      <div className="h-[3px] bg-gradient-to-r from-sunrise to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="h-10 overflow-hidden mb-4">
              <Image
                src="/images/Logo_image_without_bg.png"
                alt="HoCAID"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-xs">
              Horizon Community Initiative for Aid and Development — rising
              together towards a better tomorrow.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-sunrise hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} className="flex-shrink-0 text-gold" />
                <a
                  href="mailto:hocaid.ng@gmail.com"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
                >
                  hocaid.ng@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={16} className="flex-shrink-0 text-gold" />
                <a
                  href="tel:+2348064749454"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
                >
                  +234 806 474 9454
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} Horizon Community Initiative for Aid
            and Development. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/50 text-center sm:text-right">
            Registered NGO · RC No.&nbsp;9492937 · Tax ID&nbsp;2623728389617 · Est. April 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

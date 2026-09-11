import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
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
                <span>
                  No. 21, Henry Umahi Street,<br />
                  Trademore Estate, Lugbe,<br />
                  FCT, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} className="flex-shrink-0 text-gold" />
                <a
                  href="mailto:info@hocaid.org"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise rounded"
                >
                  info@hocaid.org
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
            CAC Reg. No.&nbsp;RC&nbsp;9492937 · Tax ID&nbsp;2623728389617 · Est. April 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

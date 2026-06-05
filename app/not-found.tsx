import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-cream flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/logo.png"
        alt="HoCAID"
        width={140}
        height={56}
        className="h-14 w-auto mx-auto mb-8"
      />

      <div
        className="h-1 w-24 rounded-full bg-gradient-to-r from-sunrise to-gold mb-8 mx-auto"
        aria-hidden="true"
      />

      <h1 className="font-display font-bold text-navy text-7xl sm:text-8xl mb-4 leading-none">
        404
      </h1>
      <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-5">
        Page Not Found
      </h2>
      <p className="font-sans text-navy/60 text-lg mb-10 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-lg font-sans font-semibold text-navy bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg font-sans font-semibold text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

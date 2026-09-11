import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-sunrise to-gold py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">Stay connected</h2>
        <p className="font-sans text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
          We are preparing a responsible updates programme. For now, contact HoCAID directly to ask about our priorities or future updates.
        </p>
        <Link href="/contact" className="inline-block px-7 py-3 rounded-lg bg-navy text-white font-sans font-semibold text-sm hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sunrise">
          Contact HoCAID
        </Link>
      </div>
    </section>
  );
}

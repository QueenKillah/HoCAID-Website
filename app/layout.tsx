import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// TODO: set NEXT_PUBLIC_SITE_URL=https://hocaid.org in Vercel env vars at deploy time
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hocaid.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s — HoCAID",
    default: "HoCAID — Rising Together Towards a Better Tomorrow",
  },
  description:
    "Horizon Community Initiative for Aid and Development (HoCAID) strengthens health systems, drives food security, champions climate resilience, and empowers communities across Africa.",
  openGraph: {
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    siteName: "HoCAID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

// Organization structured data (JSON-LD)
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HoCAID",
  alternateName: "Horizon Community Initiative for Aid and Development",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Horizon Community Initiative for Aid and Development (HoCAID) strengthens health systems, drives food security, champions climate resilience, and empowers communities across Africa.",
  foundingDate: "2026-04",
  areaServed: "Africa",
  sameAs: [
    "https://x.com/hocaid",
    "https://linkedin.com/company/hocaid-ng",
    "https://instagram.com/hocaidng",
    "https://facebook.com/hocaid",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-navy">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

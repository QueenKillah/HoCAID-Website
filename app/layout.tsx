import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";
import NavigationProgress from "@/components/ui/NavigationProgress";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hocaid.org";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s — HoCAID",
    default: "HoCAID — Rising Together Towards a Better Tomorrow",
  },
  description:
    "Horizon Community Initiative for Aid and Development (HoCAID) strengthens health systems, drives food security, champions climate resilience, and empowers communities across Africa.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ url: "/favicon-192x192.png", sizes: "192x192" }],
  },
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

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NGO"],
  name: "HoCAID",
  legalName: "HORIZON COMMUNITY INITIATIVE FOR AID AND DEVELOPMENT",
  alternateName: "Horizon Community Initiative for Aid and Development",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Horizon Community Initiative for Aid and Development (HoCAID) strengthens health systems, drives food security, champions climate resilience, and empowers communities across Africa.",
  foundingDate: "2026-04",
  areaServed: "Africa",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Certificate of Incorporation Number",
      value: "9492937",
    },
    {
      "@type": "PropertyValue",
      name: "National Tax ID",
      value: "2623728389617",
    },
  ],
  sameAs: [
    "https://www.twitter.com/hocaidng",
    "https://www.linkedin.com/company/hocaid",
    "https://www.instagram.com/hocaidng",
    "https://www.facebook.com/hocaid",
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
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <NavigationProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-cream text-navy">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

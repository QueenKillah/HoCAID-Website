import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "HoCAID — Rising Together Towards a Better Tomorrow",
    template: "%s | HoCAID",
  },
  description:
    "Horizon Community Initiative for Aid and Development — empowering communities through Health, Agriculture, Digital Access, Environment, and Gender & Youth Empowerment.",
  openGraph: {
    siteName: "HoCAID",
    type: "website",
    images: [{ url: "/images/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}

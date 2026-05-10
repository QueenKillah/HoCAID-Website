import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HoCAID — Horizon Community Initiative for Aid and Development. Our vision, mission, story, values, and the communities we serve across Nigeria and Africa.",
  openGraph: {
    title: "About HoCAID",
    description:
      "Our vision, mission, story, and the communities rising together towards a better tomorrow.",
    url: "/about",
  },
  twitter: { card: "summary_large_image" },
};

export default function AboutPage() {
  return <AboutContent />;
}

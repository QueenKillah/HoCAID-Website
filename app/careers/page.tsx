import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Join Us & Volunteer",
  description:
    "Join HoCAID's team or volunteer programme. Be part of the change you want to see across communities in Nigeria and Africa.",
  openGraph: {
    title: "Join Us & Volunteer — HoCAID",
    description:
      "Join HoCAID's team or volunteer programme. Be part of the change you want to see.",
  },
  twitter: { card: "summary_large_image" },
};

export default function CareersPage() {
  return <CareersContent />;
}

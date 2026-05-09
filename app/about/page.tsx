import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-display text-2xl text-navy">About — coming soon</p>
    </div>
  );
}

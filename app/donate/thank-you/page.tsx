import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You — HoCAID",
  description:
    "Thank you for your generous donation to HoCAID. Your gift is lighting the path for communities in need.",
};

export default function ThankYouPage() {
  return (
    // Suspense required for useSearchParams() in ThankYouContent
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #FBBF24 0%, #F97316 55%, #0C2340 100%)",
          }}
        />
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

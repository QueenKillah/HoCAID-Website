"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("hocaid_cookie_consent")) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (private browsing etc.)
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("hocaid_cookie_consent", "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-40 bg-navy text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl"
    >
      <p className="font-sans text-sm text-white/80 max-w-xl leading-relaxed">
        This site uses essential cookies to ensure it works properly. By
        continuing to use it, you agree to our use of cookies in accordance with
        the NDPR and GDPR.
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 px-6 py-2.5 rounded-lg font-sans font-semibold text-navy text-sm bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        Accept
      </button>
    </div>
  );
}

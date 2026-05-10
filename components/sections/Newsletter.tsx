"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const shouldReduceMotion = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-gradient-to-r from-sunrise to-gold py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
            Stay with us as we rise
          </h2>
          <p className="font-sans text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
            Get updates on our programmes, stories of impact, and ways to get
            involved — straight to your inbox.
          </p>

          {status === "success" ? (
            <p
              role="status"
              className="font-sans font-semibold text-white text-lg"
            >
              You&apos;re subscribed — welcome to the journey. ✦
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-describedby={status === "error" ? "nl-error" : undefined}
                className="flex-1 px-4 py-3 rounded-lg text-navy font-sans text-sm
                           placeholder:text-navy/40
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg bg-navy text-white font-sans font-semibold
                           text-sm whitespace-nowrap
                           hover:bg-navy/90 active:bg-navy/80 transition-colors
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white focus-visible:ring-offset-2
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p
              id="nl-error"
              role="alert"
              className="font-sans text-white text-sm mt-3"
            >
              Something went wrong — please try again.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

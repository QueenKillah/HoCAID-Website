"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ── Schema ────────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1000 characters or fewer"),
});

type FormValues = z.infer<typeof schema>;

// ── Shared input class ────────────────────────────────────────────────────────
const inputCls = [
  "w-full px-4 py-3 rounded-lg border border-navy/20 bg-white",
  "font-sans text-navy text-sm placeholder:text-navy/40",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:border-transparent",
  "aria-[invalid=true]:border-sunrise/60 aria-[invalid=true]:bg-sunrise/5",
  "transition-colors",
].join(" ");

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const msgLen = (watch("message") ?? "").length;
  const yOff = shouldReduceMotion ? 0 : 20;

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: yOff }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center py-20 gap-4"
          role="alert"
        >
          <CheckCircle2 className="w-14 h-14 text-gold" aria-hidden="true" />
          <h3 className="font-display font-bold text-navy text-2xl">
            Message received!
          </h3>
          <p className="font-sans text-navy/70 text-base max-w-sm">
            Thanks — we&apos;ll be in touch within 2 business days.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          initial={{ opacity: 0, y: yOff }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 gap-5"
        >
          {/* Full name */}
          <div>
            <label
              htmlFor="ct-name"
              className="block font-sans font-medium text-navy text-sm mb-1.5"
            >
              Full Name{" "}
              <span className="text-sunrise" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="ct-name"
              type="text"
              autoComplete="name"
              placeholder="Ada Okafor"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "ct-name-err" : undefined}
              {...register("name")}
              className={inputCls}
            />
            {errors.name && (
              <p
                id="ct-name-err"
                role="alert"
                className="font-sans text-sunrise text-xs mt-1.5"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="ct-email"
              className="block font-sans font-medium text-navy text-sm mb-1.5"
            >
              Email Address{" "}
              <span className="text-sunrise" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="ct-email"
              type="email"
              autoComplete="email"
              placeholder="ada@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "ct-email-err" : undefined}
              {...register("email")}
              className={inputCls}
            />
            {errors.email && (
              <p
                id="ct-email-err"
                role="alert"
                className="font-sans text-sunrise text-xs mt-1.5"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject dropdown */}
          <div>
            <label
              htmlFor="ct-subject"
              className="block font-sans font-medium text-navy text-sm mb-1.5"
            >
              Subject{" "}
              <span className="text-sunrise" aria-hidden="true">
                *
              </span>
            </label>
            <select
              id="ct-subject"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "ct-subject-err" : undefined}
              {...register("subject")}
              className={inputCls}
            >
              <option value="">Select a subject…</option>
              <option value="General">General Enquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Media">Media</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <p
                id="ct-subject-err"
                role="alert"
                className="font-sans text-sunrise text-xs mt-1.5"
              >
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label
                htmlFor="ct-message"
                className="font-sans font-medium text-navy text-sm"
              >
                Message{" "}
                <span className="text-sunrise" aria-hidden="true">
                  *
                </span>
              </label>
              <span
                className="font-sans text-navy/40 text-xs"
                aria-live="polite"
              >
                {msgLen}/1000
              </span>
            </div>
            <textarea
              id="ct-message"
              rows={5}
              maxLength={1000}
              placeholder="Tell us how we can help, or share what brought you here…"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "ct-msg-err" : undefined}
              {...register("message")}
              className={`${inputCls} resize-none`}
            />
            {errors.message && (
              <p
                id="ct-msg-err"
                role="alert"
                className="font-sans text-sunrise text-xs mt-1.5"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          {/* API-level error */}
          {status === "error" && (
            <p
              role="alert"
              className="font-sans text-sunrise text-sm bg-sunrise/5 border border-sunrise/20 rounded-lg px-4 py-3"
            >
              {errorMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={[
              "w-full py-4 rounded-xl font-sans font-bold text-navy text-base",
              "bg-gradient-to-r from-sunrise to-gold",
              "hover:opacity-90 active:opacity-80 transition-opacity",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-gold focus-visible:ring-offset-2",
              "disabled:opacity-60 disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

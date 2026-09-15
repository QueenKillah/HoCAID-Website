"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const input =
  "w-full px-4 py-3 rounded-lg border border-navy/20 bg-white font-sans text-sm text-navy placeholder:text-navy/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise transition-shadow";

const label = "block font-sans font-semibold text-navy text-sm mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setErrorMsg("Name, email address, and message are required.");
      return;
    }
    setErrorMsg("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(
          data.error ??
            "Something went wrong — please email info@hocaid.org directly.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please email info@hocaid.org directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy/10 bg-white p-8 sm:p-10 shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-sunrise/10 flex items-center justify-center mx-auto mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-sunrise"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-2xl mb-3">
          Message received!
        </h3>
        <p className="font-sans text-navy/65 text-sm leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you at{" "}
          <strong className="font-semibold text-navy">{fields.email}</strong> as
          soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email — side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            value={fields.name}
            onChange={set("name")}
            placeholder="Your name"
            autoComplete="name"
            required
            className={input}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="your@email.com"
            autoComplete="email"
            required
            className={input}
          />
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="cf-phone" className={label}>
          Phone Number
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={fields.phone}
          onChange={set("phone")}
          placeholder="+234 ..."
          autoComplete="tel"
          className={input}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="cf-subject" className={label}>
          Subject
        </label>
        <input
          id="cf-subject"
          type="text"
          value={fields.subject}
          onChange={set("subject")}
          placeholder="What is this about?"
          className={input}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={label}>
          Message
        </label>
        <textarea
          id="cf-message"
          value={fields.message}
          onChange={set("message")}
          placeholder="Your message..."
          rows={6}
          required
          className={`${input} resize-y`}
        />
      </div>

      {/* Inline error */}
      {(status === "error" || errorMsg) && (
        <p
          role="alert"
          className="font-sans text-sm text-navy/70 bg-cream rounded-lg px-4 py-3"
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-xl font-sans font-bold text-navy text-sm sm:text-base bg-gradient-to-r from-sunrise to-gold hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

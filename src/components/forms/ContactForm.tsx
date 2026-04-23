"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const field =
  "mt-1.5 h-12 w-full rounded-lg border border-grey/30 bg-white px-4 text-base text-navy placeholder:text-grey/50 transition-colors focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";
const fieldError =
  "mt-1.5 h-12 w-full rounded-lg border border-red-400 bg-white px-4 text-base text-navy placeholder:text-grey/50 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-400";
const errMsg = "mt-1 text-xs text-red-500";

const Spinner = () => (
  <svg
    className="animate-spin"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit = async () => {
    /* Replace with real API / Resend / Formspree call in production */
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-green/5 p-8 text-center ring-1 ring-green/20">
        <CheckCircle2 size={40} className="text-green" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">
          Message received!
        </h3>
        <p className="text-sm text-grey">
          Thank you for reaching out. We aim to respond within 2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-orange hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium text-navy">
            Full Name <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={errors.name ? fieldError : field}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p id="cf-name-err" role="alert" className={errMsg}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium text-navy">
            Email Address <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={errors.email ? fieldError : field}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p id="cf-email-err" role="alert" className={errMsg}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="cf-subject" className="text-sm font-medium text-navy">
          Subject <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          placeholder="How can we help?"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "cf-subject-err" : undefined}
          className={errors.subject ? fieldError : field}
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p id="cf-subject-err" role="alert" className={errMsg}>
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium text-navy">
          Message <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Tell us more about your enquiry..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`mt-1.5 w-full resize-none rounded-lg border px-4 py-3 text-base text-navy placeholder:text-grey/50 transition-colors focus:outline-none focus:ring-1 ${
            errors.message
              ? "border-red-400 focus:border-red-500 focus:ring-red-400"
              : "border-grey/30 bg-white focus:border-navy focus:ring-navy"
          }`}
          {...register("message", {
            required: "A message is required",
            minLength: {
              value: 20,
              message: "Please write at least 20 characters",
            },
          })}
        />
        {errors.message && (
          <p id="cf-message-err" role="alert" className={errMsg}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-cta px-7 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Spinner />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;

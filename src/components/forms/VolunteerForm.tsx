"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { PILLARS } from "@/lib/constants";

type FormValues = {
  name: string;
  email: string;
  area: string;
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

const VolunteerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-green/5 p-8 text-center ring-1 ring-green/20">
        <CheckCircle2 size={40} className="text-green" aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-navy">
          Application received!
        </h3>
        <p className="text-sm text-grey">
          Thank you for your interest. Our volunteer coordinator will be in touch within 5 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-orange hover:underline"
        >
          Submit another application
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
          <label htmlFor="vf-name" className="text-sm font-medium text-navy">
            Full Name <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="vf-name"
            type="text"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={errors.name ? fieldError : field}
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p role="alert" className={errMsg}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="vf-email" className="text-sm font-medium text-navy">
            Email Address <span className="text-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="vf-email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={errors.email ? fieldError : field}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p role="alert" className={errMsg}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Area of interest */}
      <div>
        <label htmlFor="vf-area" className="text-sm font-medium text-navy">
          Area of Interest <span className="text-orange" aria-hidden="true">*</span>
        </label>
        <select
          id="vf-area"
          aria-invalid={!!errors.area}
          className={`${errors.area ? fieldError : field} cursor-pointer`}
          {...register("area", { required: "Please select an area of interest" })}
        >
          <option value="">Select a pillar…</option>
          {PILLARS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
          <option value="general">General / Any Area</option>
        </select>
        {errors.area && <p role="alert" className={errMsg}>{errors.area.message}</p>}
      </div>

      {/* Skills & availability */}
      <div>
        <label htmlFor="vf-message" className="text-sm font-medium text-navy">
          Skills & Availability
        </label>
        <textarea
          id="vf-message"
          rows={4}
          placeholder="Relevant experience, skills, availability, and location…"
          className="mt-1.5 w-full resize-none rounded-lg border border-grey/30 bg-white px-4 py-3 text-base text-navy placeholder:text-grey/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          {...register("message")}
        />
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
            Submitting…
          </>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
};

export default VolunteerForm;

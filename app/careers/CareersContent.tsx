"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, TrendingUp, Users, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ── FadeUp helper ─────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const REASONS = [
  {
    icon: Zap,
    title: "Real, Measurable Impact",
    body: "Every day at HoCAID, your work translates directly into better outcomes — from improved health access to stronger food security for real communities.",
  },
  {
    icon: TrendingUp,
    title: "Grow Professionally",
    body: "Gain hands-on experience in NGO management, field operations, M&E, and cross-sector partnerships across Nigeria and beyond.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    body: "Join a passionate, diverse team united by purpose, where collaboration is the culture and every voice shapes the work.",
  },
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    body: "Be part of something that matters. At HoCAID, your skills and energy contribute to a mission much bigger than any job description.",
  },
];

type JobType = "Full-time" | "Part-time" | "Volunteer";

const JOBS: {
  title: string;
  type: JobType;
  location: string;
  description: string;
}[] = [
  {
    title: "Programme Officer",
    type: "Full-time",
    location: "Abuja, Nigeria",
    description:
      "Lead the design, implementation, and monitoring of HoCAID programmes across our six pillars. Coordinate with community partners, government agencies, and donors to deliver measurable impact.",
  },
  {
    title: "M&E Coordinator",
    type: "Full-time",
    location: "Abuja, Nigeria",
    description:
      "Design and manage monitoring and evaluation frameworks to track programme performance. Collect, analyse, and communicate data to drive evidence-based decision-making across HoCAID's portfolio.",
  },
  {
    title: "Communications Associate",
    type: "Part-time",
    location: "Remote / Abuja",
    description:
      "Create compelling content — stories, social media posts, reports — that amplifies HoCAID's impact and engages donors, partners, and communities. Strong writing and digital storytelling skills required.",
  },
  {
    title: "Field Volunteer",
    type: "Volunteer",
    location: "Nigeria (Various)",
    description:
      "Work directly with communities to support programme delivery across health, agriculture, environment, or community engagement. Flexible commitment with full training and mentorship provided.",
  },
  {
    title: "Health Systems Consultant",
    type: "Volunteer",
    location: "Nigeria / Remote",
    description:
      "Provide specialist expertise in health system strengthening, primary care delivery, or pandemic preparedness. Short-term assignments with meaningful contribution to our flagship health pillar.",
  },
];

const FILTER_OPTIONS: ("All" | JobType)[] = ["All", "Full-time", "Part-time", "Volunteer"];

const AREAS = [
  "Health Systems",
  "Food Security & Agriculture",
  "Climate & Environment",
  "Digital Innovation & Data",
  "Governance & Policy",
  "Community Engagement",
  "Communications & Media",
  "Research & M&E",
  "Other",
];

const TYPE_BADGE: Record<JobType, string> = {
  "Full-time": "bg-navy/10 text-navy",
  "Part-time": "bg-gold/20 text-navy",
  "Volunteer": "bg-sunrise/15 text-sunrise",
};

// ── Volunteer form schema ─────────────────────────────────────────────────────
const volSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  area: z.string().min(1, "Please select an area of interest"),
  motivation: z
    .string()
    .min(20, "Please share a bit more (at least 20 characters)")
    .max(500, "Maximum 500 characters"),
});
type VolValues = z.infer<typeof volSchema>;

const inputCls = [
  "w-full px-4 py-3 rounded-lg border border-navy/20 bg-white",
  "font-sans text-navy text-sm placeholder:text-navy/40",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:border-transparent",
  "aria-[invalid=true]:border-sunrise/60 aria-[invalid=true]:bg-sunrise/5",
  "transition-colors",
].join(" ");

// ── Component ─────────────────────────────────────────────────────────────────
export default function CareersContent() {
  const [filter, setFilter] = useState<"All" | JobType>("All");
  const [volStatus, setVolStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [volError, setVolError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<VolValues>({ resolver: zodResolver(volSchema) });

  const motivationLen = (watch("motivation") ?? "").length;

  const filteredJobs = filter === "All" ? JOBS : JOBS.filter((j) => j.type === filter);

  const onVolSubmit = async (data: VolValues) => {
    setVolStatus("loading");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setVolStatus("success");
    } catch (err) {
      setVolError(err instanceof Error ? err.message : "Something went wrong.");
      setVolStatus("error");
    }
  };

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
              Work With Us
            </p>
            <h1 className="font-display font-bold text-white leading-tight text-4xl sm:text-5xl md:text-6xl mb-6">
              Join Us &amp; Volunteer
            </h1>
            <p className="font-sans text-white/75 text-xl sm:text-2xl leading-relaxed mb-10">
              Be Part of the Change You Want to See
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#openings"
                className="inline-block px-8 py-4 rounded-lg font-sans font-semibold text-navy bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                View Openings
              </a>
              <a
                href="#volunteer"
                className="inline-block px-8 py-4 rounded-lg font-sans font-semibold text-white border-2 border-white hover:bg-white hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Volunteer With Us
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-sunrise to-gold" />
      </section>

      {/* ── 2. Why Join ─────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              Why HoCAID?
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-16 leading-tight">
              Reasons to Rise With Us
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full border border-navy/8 hover:border-sunrise/30 transition-colors">
                  <r.icon
                    size={28}
                    className="text-sunrise mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-bold text-navy text-lg mb-3">
                    {r.title}
                  </h3>
                  <p className="font-sans text-navy/65 text-sm leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Current Openings ─────────────────────────────────────────────── */}
      <section id="openings" className="bg-white py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              Opportunities
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-10 leading-tight">
              Current Openings
            </h2>

            {/* Filter tabs */}
            <div
              className="flex flex-wrap gap-2 justify-center mb-12"
              role="group"
              aria-label="Filter by job type"
            >
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={[
                    "px-5 py-2 rounded-full font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise",
                    filter === opt
                      ? "bg-navy text-white"
                      : "bg-cream text-navy hover:bg-navy/10",
                  ].join(" ")}
                >
                  {opt}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Job listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <FadeUp key={job.title} delay={i * 0.07}>
                <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-navy/8 hover:border-sunrise/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold ${TYPE_BADGE[job.type]}`}
                        >
                          {job.type}
                        </span>
                        <span className="font-sans text-navy/50 text-xs">
                          {job.location}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-navy text-xl mb-2">
                        {job.title}
                      </h3>
                      <p className="font-sans text-navy/65 text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <a
                      href={`mailto:hocaid.ng@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="flex-shrink-0 self-start px-6 py-2.5 rounded-lg font-sans font-semibold text-navy text-sm bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
            {filteredJobs.length === 0 && (
              <p className="text-center font-sans text-navy/50 py-12">
                No openings in this category right now. Check back soon or{" "}
                <a href="#volunteer" className="text-sunrise hover:underline">
                  express your interest below
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. Volunteer With Us ────────────────────────────────────────────── */}
      <section id="volunteer" className="bg-cream py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              Give Your Time
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl text-center mb-5 leading-tight">
              Volunteer With HoCAID
            </h2>
            <p className="font-sans text-navy/65 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Our volunteer programme places passionate individuals alongside our
              team to co-deliver community interventions. Whether you have a few
              hours a week or a months-long commitment, there is a role for you.
              Share your interests below and we will be in touch.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: highlights */}
            <FadeUp delay={0.1}>
              <div className="space-y-6">
                {[
                  {
                    title: "Flexible Commitment",
                    body: "Choose from short-term (1–4 weeks), medium-term (1–3 months), or longer placements depending on your availability and our needs.",
                  },
                  {
                    title: "Full Training Provided",
                    body: "All volunteers receive an orientation, relevant technical training, and ongoing support from a dedicated programme lead.",
                  },
                  {
                    title: "Meaningful Contribution",
                    body: "Your skills directly support community health workers, smallholder farmers, youth groups, and local governance actors.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-sunrise mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-sans font-semibold text-navy text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-navy/65 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: EOI form */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display font-bold text-navy text-xl mb-6">
                  Expression of Interest
                </h3>

                {volStatus === "success" ? (
                  <div
                    className="flex flex-col items-center text-center py-10 gap-3"
                    role="alert"
                  >
                    <CheckCircle2
                      className="w-12 h-12 text-gold"
                      aria-hidden="true"
                    />
                    <p className="font-display font-bold text-navy text-xl">
                      Thank you!
                    </p>
                    <p className="font-sans text-navy/65 text-sm max-w-xs">
                      We&apos;ve received your expression of interest. Our team
                      will reach out within 5 business days.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onVolSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="vol-name"
                        className="block font-sans font-medium text-navy text-sm mb-1.5"
                      >
                        Full Name{" "}
                        <span className="text-sunrise" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="vol-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Ada Okafor"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                        className={inputCls}
                      />
                      {errors.name && (
                        <p role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block font-sans font-medium text-navy text-sm mb-1.5"
                      >
                        Email Address{" "}
                        <span className="text-sunrise" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="vol-email"
                        type="email"
                        autoComplete="email"
                        placeholder="ada@example.com"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                        className={inputCls}
                      />
                      {errors.email && (
                        <p role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label
                        htmlFor="vol-phone"
                        className="block font-sans font-medium text-navy text-sm mb-1.5"
                      >
                        Phone Number{" "}
                        <span className="text-navy/40 font-normal">(optional)</span>
                      </label>
                      <input
                        id="vol-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+234 800 000 0000"
                        {...register("phone")}
                        className={inputCls}
                      />
                    </div>

                    {/* Area of interest */}
                    <div>
                      <label
                        htmlFor="vol-area"
                        className="block font-sans font-medium text-navy text-sm mb-1.5"
                      >
                        Area of Interest{" "}
                        <span className="text-sunrise" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        id="vol-area"
                        aria-invalid={!!errors.area}
                        {...register("area")}
                        className={inputCls}
                      >
                        <option value="">Select an area…</option>
                        {AREAS.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                      {errors.area && (
                        <p role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                          {errors.area.message}
                        </p>
                      )}
                    </div>

                    {/* Motivation */}
                    <div>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <label
                          htmlFor="vol-motivation"
                          className="font-sans font-medium text-navy text-sm"
                        >
                          Motivation{" "}
                          <span className="text-sunrise" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <span
                          className="font-sans text-navy/40 text-xs"
                          aria-live="polite"
                        >
                          {motivationLen}/500
                        </span>
                      </div>
                      <textarea
                        id="vol-motivation"
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us why you want to volunteer with HoCAID and what you hope to contribute…"
                        aria-invalid={!!errors.motivation}
                        {...register("motivation")}
                        className={`${inputCls} resize-none`}
                      />
                      {errors.motivation && (
                        <p role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                          {errors.motivation.message}
                        </p>
                      )}
                    </div>

                    {volStatus === "error" && (
                      <p
                        role="alert"
                        className="font-sans text-sunrise text-sm bg-sunrise/5 border border-sunrise/20 rounded-lg px-4 py-3"
                      >
                        {volError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={volStatus === "loading"}
                      className="w-full py-4 rounded-xl font-sans font-bold text-navy text-base bg-gradient-to-r from-sunrise to-gold hover:opacity-90 active:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {volStatus === "loading" ? "Submitting…" : "Submit Interest"}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 5. CTA strip ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight mb-5">
              Questions? We&apos;d Love to Hear From You.
            </h2>
            <p className="font-sans text-white/65 text-lg mb-10">
              Reach out to our team and we&apos;ll help find the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-lg font-sans font-semibold text-navy bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Contact Us
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

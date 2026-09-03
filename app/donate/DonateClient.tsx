"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePaystackPayment } from "react-paystack";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Landmark } from "lucide-react";
import { toKobo, PAYSTACK_PUBLIC_KEY } from "@/lib/paystack";

// ── Schema ────────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z
    .string()
    .max(200, "Message must be 200 characters or fewer")
    .optional(),
});

type FormValues = z.infer<typeof schema>;

// ── Tiers ─────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    amount: 5000,
    label: "₦5,000",
    impact:
      "Supports a household with climate-smart farming inputs for one full season.",
  },
  {
    amount: 15000,
    label: "₦15,000",
    impact:
      "Funds a community health worker's training and essential monthly supplies.",
  },
  {
    amount: 50000,
    label: "₦50,000",
    impact:
      "Equips a village savings group with financial literacy tools for a full year.",
  },
  {
    amount: 0,
    label: "Custom",
    impact: "Every naira you give lights the path for a community in need.",
  },
];

const CUSTOM_IDX = TIERS.length - 1;

// ── Shared input class ────────────────────────────────────────────────────────
const inputCls = [
  "w-full px-4 py-3 rounded-lg border border-navy/20 bg-white",
  "font-sans text-navy text-sm placeholder:text-navy/40",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:border-transparent",
  "aria-[invalid=true]:border-sunrise/60 aria-[invalid=true]:bg-sunrise/5",
  "transition-colors",
].join(" ");

// ── Component ─────────────────────────────────────────────────────────────────
export default function DonateClient() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customAmt, setCustomAmt] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const isCustom = selectedIdx === CUSTOM_IDX;
  const effectiveAmount = isCustom
    ? parseInt(customAmt.replace(/\D/g, ""), 10) || 0
    : TIERS[selectedIdx].amount;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // Paystack config re-evaluates each render — ensures latest email is always used
  const paystackConfig = {
    reference: `hocaid-${Date.now()}`,
    email: watch("email") || "",
    amount: toKobo(effectiveAmount || 1), // 1 prevents 0-kobo error on initial render
    publicKey: PAYSTACK_PUBLIC_KEY,
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  };

  const onSubmit = () => {
    if (!PAYSTACK_PUBLIC_KEY) {
      showToast("Payment is not configured yet — please try again soon.");
      return;
    }
    if (effectiveAmount < 100) {
      showToast("Please enter a minimum donation of ₦100.");
      return;
    }
    initializePayment({
      onSuccess: async (ref) => {
        const reference = (ref as { reference?: string })?.reference ?? "";
        setIsVerifying(true);
        try {
          const res = await fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`);
          const data = (await res.json()) as { amount?: number };
          const params = new URLSearchParams({ ref: reference });
          if (res.ok && data.amount) params.set("amount", String(data.amount));
          router.push(`/donate/thank-you?${params.toString()}`);
        } catch {
          router.push(`/donate/thank-you?ref=${reference}`);
        } finally {
          setIsVerifying(false);
        }
      },
      onClose: () => {
        showToast("No worries — you can donate any time.");
      },
    });
  };

  const amountLabel =
    effectiveAmount > 0
      ? `₦${effectiveAmount.toLocaleString("en-NG")}`
      : "Now";

  const yOff = shouldReduceMotion ? 0 : 24;
  const msgLen = (watch("message") ?? "").length;

  return (
    <section className="bg-cream py-16 px-6 pb-28">
      <div className="max-w-2xl mx-auto">

        {/* ── Tier cards ── */}
        <motion.div
          initial={{ opacity: 0, y: yOff }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="font-display font-bold text-navy text-2xl mb-3">
            Choose your contribution
          </h2>
          <p className="font-sans text-navy/65 text-sm leading-relaxed mb-6">
            Every gift goes directly towards HoCAID&apos;s six core programmes —
            Health Systems, Food Security, Climate Resilience, Digital Innovation,
            Governance &amp; Policy, and Community Engagement — empowering
            communities across Nigeria and Africa.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {TIERS.map((tier, i) => {
              const sel = selectedIdx === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedIdx(i)}
                  aria-pressed={sel}
                  className={[
                    "relative rounded-xl border-2 p-4 text-left transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-sunrise focus-visible:ring-offset-2",
                    sel
                      ? "border-sunrise bg-white shadow-md"
                      : "border-navy/10 bg-white hover:border-navy/25",
                  ].join(" ")}
                >
                  {sel && (
                    <CheckCircle2
                      className="absolute top-3 right-3 w-4 h-4 text-gold"
                      aria-hidden="true"
                    />
                  )}
                  <span className="block font-display font-bold text-navy text-xl mb-2">
                    {tier.label}
                  </span>
                  <span className="block font-sans text-navy/55 text-xs leading-snug">
                    {tier.impact}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom amount input */}
          <AnimatePresence>
            {isCustom && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <label
                  htmlFor="custom-amt"
                  className="block font-sans font-medium text-navy text-sm mb-2 mt-1"
                >
                  Enter amount
                </label>
                <div className="relative">
                  <span
                    className="absolute left-4 top-1/2 -translate-y-1/2
                               font-sans text-navy/50 text-sm pointer-events-none"
                  >
                    ₦
                  </span>
                  <input
                    id="custom-amt"
                    type="number"
                    min={100}
                    step={100}
                    value={customAmt}
                    onChange={(e) => setCustomAmt(e.target.value)}
                    placeholder="e.g. 25000"
                    className={`${inputCls} pl-8`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Form ── */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          initial={{ opacity: 0, y: yOff }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

            {/* Full name */}
            <div>
              <label
                htmlFor="don-name"
                className="block font-sans font-medium text-navy text-sm mb-1.5"
              >
                Full Name <span className="text-sunrise" aria-hidden="true">*</span>
              </label>
              <input
                id="don-name"
                type="text"
                autoComplete="name"
                placeholder="Ada Okafor"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "don-name-err" : undefined}
                {...register("name")}
                className={inputCls}
              />
              {errors.name && (
                <p id="don-name-err" role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="don-email"
                className="block font-sans font-medium text-navy text-sm mb-1.5"
              >
                Email Address <span className="text-sunrise" aria-hidden="true">*</span>
              </label>
              <input
                id="don-email"
                type="email"
                autoComplete="email"
                placeholder="ada@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "don-email-err" : undefined}
                {...register("email")}
                className={inputCls}
              />
              {errors.email && (
                <p id="don-email-err" role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="don-phone"
                className="block font-sans font-medium text-navy text-sm mb-1.5"
              >
                Phone{" "}
                <span className="font-normal text-navy/50">(optional)</span>
              </label>
              <input
                id="don-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+234 800 000 0000"
                {...register("phone")}
                className={inputCls}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-baseline mb-1.5">
                <label
                  htmlFor="don-message"
                  className="font-sans font-medium text-navy text-sm"
                >
                  Message{" "}
                  <span className="font-normal text-navy/50">(optional)</span>
                </label>
                <span className="font-sans text-navy/40 text-xs" aria-live="polite">
                  {msgLen}/200
                </span>
              </div>
              <textarea
                id="don-message"
                rows={3}
                maxLength={200}
                placeholder="A word of encouragement, or share what brings you here…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "don-msg-err" : undefined}
                {...register("message")}
                className={`${inputCls} resize-none`}
              />
              {errors.message && (
                <p id="don-msg-err" role="alert" className="font-sans text-sunrise text-xs mt-1.5">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!effectiveAmount || isSubmitting || isVerifying}
            className={[
              "w-full py-4 rounded-xl font-sans font-bold text-navy text-base",
              "bg-gradient-to-r from-sunrise to-gold",
              "hover:opacity-90 active:opacity-80 transition-opacity",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-gold focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {isVerifying ? "Verifying payment…" : isSubmitting ? "Opening payment…" : `Donate ${amountLabel}`}
          </button>

          {/* Reassurance */}
          <p className="flex items-center justify-center gap-2 font-sans text-xs text-navy/50 mt-4">
            <ShieldCheck
              className="w-4 h-4 text-gold flex-shrink-0"
              aria-hidden="true"
            />
            Secure payment via Paystack. Your data is protected.
          </p>
          <p className="font-sans text-xs text-navy/40 text-center mt-2 leading-relaxed">
            Horizon Community Initiative for Aid and Development is a registered
            Nigerian NGO (RC&nbsp;No.&nbsp;9492937 · Tax&nbsp;ID&nbsp;2623728389617).
            100% of donations fund our community programmes.
          </p>
        </motion.form>
      </div>

      {/* ── Bank Transfer ── */}
      <motion.div
        initial={{ opacity: 0, y: yOff }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
        className="max-w-2xl mx-auto mt-14"
      >
        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-navy/15" />
          <span className="font-sans text-sm text-navy/45 font-medium tracking-wide uppercase">
            Or donate via bank transfer
          </span>
          <div className="flex-1 h-px bg-navy/15" />
        </div>

        <div className="bg-white rounded-2xl border border-navy/10 shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="flex items-center gap-3 px-6 py-4 bg-navy">
            <Landmark className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
            <span className="font-display font-bold text-white text-lg">Sterling Bank</span>
          </div>

          {/* Account rows */}
          <div className="divide-y divide-navy/8">
            {[
              { currency: "NGN", code: "ng", label: "Nigerian Naira", account: "0148139410" },
              { currency: "GBP", code: "gb", label: "British Pound", account: "0148400680", sort: "23-21-50-016" },
              { currency: "USD", code: "us", label: "US Dollar", account: "0148400563", sort: "23-21-50-016" },
              { currency: "EUR", code: "eu", label: "Euro", account: "0148400587", sort: "23-21-50-016" },
            ].map(({ currency, code, label, account, sort }) => (
              <div key={currency} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/w40/${code}.png`}
                    alt={label}
                    width={28}
                    height={20}
                    className="rounded-sm object-cover flex-shrink-0"
                  />
                  <div>
                    <span className="font-sans font-semibold text-navy text-sm">{currency}</span>
                    <span className="font-sans text-navy/50 text-xs ml-2">{label}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-navy text-base tracking-wider">{account}</p>
                  {sort && (
                    <p className="font-sans text-navy/45 text-xs mt-0.5">Sort code: {sort}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-cream/70 border-t border-navy/8">
            <p className="font-sans text-navy/50 text-xs text-center">
              Please use your name as the payment reference. Contact us at{" "}
              <a href="mailto:hocaid.ng@gmail.com" className="text-navy underline underline-offset-2 hover:text-sunrise transition-colors">
                hocaid.ng@gmail.com
              </a>{" "}
              after transferring so we can acknowledge your gift.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                       bg-navy text-white font-sans text-sm
                       px-6 py-3 rounded-xl shadow-xl whitespace-nowrap"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePaystackPayment } from "react-paystack";
import { ShieldCheck } from "lucide-react";
import { PAYSTACK_PUBLIC_KEY, toKobo } from "@/lib/paystack";

const amounts = [5000, 15000, 50000] as const;

export default function DonateClient() {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(amounts[0]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [custom, setCustom] = useState("");
  const [notice, setNotice] = useState("");

  const effectiveAmount = custom ? Number(custom.replace(/\D/g, "")) : amount;
  const initializePayment = usePaystackPayment({
    reference: `hocaid-${Date.now()}`,
    email,
    amount: toKobo(effectiveAmount || 1),
    publicKey: PAYSTACK_PUBLIC_KEY,
  });

  function donate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setNotice("Please provide your name and a valid email address.");
      return;
    }
    if (!PAYSTACK_PUBLIC_KEY) {
      setNotice("Online payments are not configured at the moment. Please contact HoCAID directly.");
      return;
    }
    if (!effectiveAmount || effectiveAmount < 100) {
      setNotice("Please enter a contribution of at least ₦100.");
      return;
    }
    setNotice("");
    initializePayment({
      onSuccess: async (response) => {
        const reference = (response as { reference?: string }).reference ?? "";
        try {
          const verification = await fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`);
          const data = (await verification.json()) as { amount?: number };
          router.push(`/donate/thank-you?ref=${encodeURIComponent(reference)}${data.amount ? `&amount=${data.amount}` : ""}`);
        } catch {
          router.push(`/donate/thank-you?ref=${encodeURIComponent(reference)}`);
        }
      },
      onClose: () => setNotice("Payment was not completed. You can try again whenever you are ready."),
    });
  }

  return (
    <section className="bg-cream py-16 px-6 pb-28">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-navy/10 p-6 sm:p-10 shadow-sm">
          <h2 className="font-display font-bold text-navy text-2xl mb-3">Choose your contribution</h2>
          <p className="font-sans text-navy/65 text-sm leading-relaxed mb-7">
            Choose an amount to give through Paystack. HoCAID&apos;s programme priorities are described on our Programmes page; contact us with any donation questions before giving.
          </p>
          <form onSubmit={donate} className="space-y-6" noValidate>
            <fieldset>
              <legend className="font-sans font-semibold text-navy text-sm mb-3">Contribution amount</legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {amounts.map((option) => (
                  <button key={option} type="button" aria-pressed={!custom && amount === option} onClick={() => { setAmount(option); setCustom(""); }} className={`rounded-xl border-2 p-4 font-display font-bold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise ${!custom && amount === option ? "border-sunrise bg-sunrise/5" : "border-navy/10"}`}>
                    ₦{option.toLocaleString("en-NG")}
                  </button>
                ))}
                <label className="rounded-xl border-2 border-navy/10 p-3">
                  <span className="sr-only">Custom contribution amount</span>
                  <input value={custom} onChange={(event) => setCustom(event.target.value)} inputMode="numeric" placeholder="Custom" className="w-full bg-transparent font-sans text-sm focus:outline-none" />
                </label>
              </div>
            </fieldset>
            <div>
              <label htmlFor="don-name" className="block font-sans font-medium text-navy text-sm mb-2">Full name</label>
              <input id="don-name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="w-full px-4 py-3 rounded-lg border border-navy/20 font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise" />
            </div>
            <div>
              <label htmlFor="don-email" className="block font-sans font-medium text-navy text-sm mb-2">Email address</label>
              <input id="don-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="w-full px-4 py-3 rounded-lg border border-navy/20 font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise" />
            </div>
            {notice && <p role="status" className="font-sans text-sm text-navy bg-cream rounded-lg px-4 py-3">{notice}</p>}
            <button type="submit" className="w-full py-4 rounded-xl font-sans font-bold text-navy bg-gradient-to-r from-sunrise to-gold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
              Donate ₦{effectiveAmount ? effectiveAmount.toLocaleString("en-NG") : "0"}
            </button>
          </form>
          <p className="flex items-center justify-center gap-2 font-sans text-xs text-navy/55 mt-5 text-center"><ShieldCheck className="w-4 h-4 text-forest flex-shrink-0" aria-hidden="true" />Secure payment is processed by Paystack.</p>
          <p className="font-sans text-xs text-navy/55 text-center mt-3">For questions about donations, contact <a className="underline hover:text-sunrise" href="mailto:info@hocaid.org">info@hocaid.org</a>.</p>
        </div>
      </div>
    </section>
  );
}

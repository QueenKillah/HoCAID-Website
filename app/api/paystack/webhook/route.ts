import crypto from "crypto";
import { NextResponse } from "next/server";

interface PaystackEvent {
  event?: string;
  data?: {
    amount?: number;
    currency?: string;
    reference?: string;
    paid_at?: string;
    customer?: { email?: string; first_name?: string; last_name?: string };
    metadata?: Record<string, unknown>;
  };
}

export async function POST(req: Request) {
  const rawBody = await req.text();

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    console.error("[Paystack Webhook] PAYSTACK_SECRET_KEY is not set");
    return new NextResponse("Server misconfiguration", { status: 500 });
  }

  // Verify HMAC SHA-512 signature before trusting any payload data
  const expected = crypto.createHmac("sha512", secret).update(rawBody).digest("hex");
  const received = req.headers.get("x-paystack-signature") ?? "";

  if (expected !== received) {
    console.warn("[Paystack Webhook] Invalid signature — request rejected");
    return new NextResponse("Invalid signature", { status: 401 });
  }

  let event: PaystackEvent;
  try {
    event = JSON.parse(rawBody) as PaystackEvent;
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  if (event.event === "charge.success") {
    const { reference, amount, currency, paid_at, customer } = event.data ?? {};

    const donation = {
      reference,
      amount_kobo: amount,
      amount_display: `${currency ?? "NGN"} ${((amount ?? 0) / 100).toFixed(2)}`,
      email: customer?.email,
      name: [customer?.first_name, customer?.last_name].filter(Boolean).join(" ") || null,
      paid_at: paid_at ?? new Date().toISOString(),
    };

    // TODO: Replace this log with a database write (e.g. Supabase, Planetscale, Prisma).
    // The `donation` object above contains everything you need to persist.
    // Example: await db.donations.create({ data: donation });
    console.log("[Paystack Webhook] charge.success →", JSON.stringify(donation));
  } else {
    console.log(`[Paystack Webhook] ${event.event ?? "unknown"} — no action taken`);
  }

  // Always return 200 immediately — Paystack retries if it doesn't receive one within 5 s
  return new NextResponse("OK", { status: 200 });
}

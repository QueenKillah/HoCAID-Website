import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Read raw body before any parsing — Paystack signs the exact bytes it sends
  const rawBody = await req.text();

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    console.error("[Paystack Webhook] PAYSTACK_SECRET_KEY is not set");
    return new NextResponse("Server misconfiguration", { status: 500 });
  }

  // Verify HMAC SHA-512 signature
  const expected = crypto
    .createHmac("sha512", secret)
    .update(rawBody)
    .digest("hex");

  const received = req.headers.get("x-paystack-signature") ?? "";

  if (expected !== received) {
    console.warn("[Paystack Webhook] Invalid signature — request rejected");
    return new NextResponse("Invalid signature", { status: 401 });
  }

  // Parse verified payload
  interface PaystackEvent {
    event?: string;
    data?: { amount?: number; reference?: string; customer?: { email?: string } };
  }
  let event: PaystackEvent;
  try {
    event = JSON.parse(rawBody) as PaystackEvent;
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  const eventType = event.event ?? "unknown";
  const amount = event.data?.amount ?? 0;

  console.log(
    `[Paystack Webhook] ${eventType} | ₦${(amount / 100).toFixed(2)} | ref: ${event.data?.reference ?? "—"}`
  );

  // Return 200 immediately — Paystack requires acknowledgement within 5 seconds.
  //
  // To wire this to a database later:
  //   1. After signature verification, push the raw event to a durable queue
  //      (e.g. Inngest, Upstash QStash, Vercel Queues) and return 200 right away.
  //   2. In the queue worker, handle each event.event type:
  //        - "charge.success"  → mark donation as paid, send receipt email
  //        - "transfer.failed" → flag for review
  //        - etc.
  //   3. Look up records using event.data.reference (store it at initiation time).
  //   4. Use event.data.customer.email to associate with a donor profile.
  //
  // Never do heavy work (DB writes, email sends) synchronously in this handler.

  return new NextResponse("OK", { status: 200 });
}

import { NextResponse } from "next/server";

interface PaystackVerifyResponse {
  status: boolean;
  data?: {
    status?: string;
    amount?: number;
    currency?: string;
    reference?: string;
    paid_at?: string;
    customer?: { email?: string; first_name?: string; last_name?: string };
    metadata?: Record<string, unknown>;
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ error: "reference is required" }, { status: 400 });
  }

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    console.error("[Paystack Verify] PAYSTACK_SECRET_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let res: Response;
  try {
    res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${secret}` },
        cache: "no-store",
      }
    );
  } catch (err) {
    console.error("[Paystack Verify] Network error:", err);
    return NextResponse.json({ error: "Network error contacting Paystack" }, { status: 502 });
  }

  if (!res.ok) {
    console.error(`[Paystack Verify] Paystack returned ${res.status}`);
    return NextResponse.json({ error: "Verification failed" }, { status: 502 });
  }

  const json = (await res.json()) as PaystackVerifyResponse;

  if (json.data?.status !== "success") {
    return NextResponse.json(
      { error: `Transaction status: ${json.data?.status ?? "unknown"}` },
      { status: 402 }
    );
  }

  const { reference: ref, amount, currency, paid_at, customer } = json.data;

  console.log(
    `[Paystack Verify] ✓ ref=${ref} | ${currency} ${((amount ?? 0) / 100).toFixed(2)} | ${customer?.email}`
  );

  // Return only the safe subset — the full Paystack payload stays server-side
  return NextResponse.json({ status: "success", amount, currency, reference: ref, paid_at, email: customer?.email });
}

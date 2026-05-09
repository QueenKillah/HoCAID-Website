export const PAYSTACK_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";

export const donationTiers = [
  {
    amount: 5000,
    label: "₦5,000",
    impact: "Funds essential health supplies for one family for a month.",
  },
  {
    amount: 15000,
    label: "₦15,000",
    impact: "Supports a community training session on climate-smart farming.",
  },
  {
    amount: 50000,
    label: "₦50,000",
    impact: "Equips a community health worker for an entire quarter.",
  },
];

export function toKobo(naira: number) {
  return naira * 100;
}

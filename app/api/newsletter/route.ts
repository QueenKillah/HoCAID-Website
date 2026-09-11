import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Newsletter subscriptions are not available at this time." },
    { status: 503 },
  );
}

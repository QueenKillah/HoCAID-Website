import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Online contact submissions are not available. Please contact HoCAID directly." },
    { status: 503 },
  );
}

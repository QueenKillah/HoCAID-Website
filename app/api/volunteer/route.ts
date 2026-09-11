import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Online volunteer applications are not available at this time." },
    { status: 503 },
  );
}

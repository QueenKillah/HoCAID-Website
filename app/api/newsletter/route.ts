import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("A valid email address is required"),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0].message },
      { status: 422 },
    );
  }

  console.log("[Newsletter] New subscriber:", result.data.email);

  return NextResponse.json({ success: true });
}

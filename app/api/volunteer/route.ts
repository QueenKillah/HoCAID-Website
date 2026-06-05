import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().optional(),
  area: z.string().min(1, "Please select an area of interest"),
  motivation: z
    .string()
    .min(20, "Please share a bit more about your motivation (at least 20 characters)")
    .max(500, "Motivation must be 500 characters or fewer"),
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

  const { name, email, phone, area, motivation } = result.data;
  console.log(
    `[Volunteer EOI] ${area} | ${name} <${email}>${phone ? ` | ${phone}` : ""} | ${new Date().toISOString()}\n${motivation}`,
  );

  // TODO: Wire to email delivery (Resend/SendGrid) to: hocaid.ng@gmail.com
  // await resend.emails.send({
  //   from: "no-reply@hocaid.org",
  //   to: "hocaid.ng@gmail.com",
  //   replyTo: email,
  //   subject: `[Volunteer EOI] ${area} — ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "N/A"}\nArea: ${area}\n\nMotivation:\n${motivation}`,
  // });

  return NextResponse.json({ success: true });
}

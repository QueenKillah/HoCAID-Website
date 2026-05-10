import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("A valid email address is required"),
  subject: z.enum(["General", "Partnership", "Media", "Other"], {
    error: () => "Please select a valid subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
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

  const { name, email, subject, message } = result.data;
  console.log(
    `[Contact] ${subject} | ${name} <${email}> | ${new Date().toISOString()}\n${message}`,
  );

  // TODO: Wire to an email delivery service when the team is ready.
  //
  //   Option A — Resend (recommended for Next.js/Vercel deployments):
  //     npm install resend
  //     import { Resend } from "resend";
  //     const resend = new Resend(process.env.RESEND_API_KEY);
  //     await resend.emails.send({
  //       from: "no-reply@hocaid.org",
  //       to: "info@hocaid.org",
  //       replyTo: email,
  //       subject: `[${subject}] Message from ${name}`,
  //       text: message,
  //     });
  //     Add RESEND_API_KEY to .env.local and Vercel env vars.
  //
  //   Option B — SendGrid:
  //     npm install @sendgrid/mail
  //     import sgMail from "@sendgrid/mail";
  //     sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  //     await sgMail.send({ to, from, subject, text: message });
  //     Add SENDGRID_API_KEY to .env.local and Vercel env vars.

  return NextResponse.json({ success: true });
}

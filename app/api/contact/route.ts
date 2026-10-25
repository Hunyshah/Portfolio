/**
 * Contact form endpoint. Sends mail through Resend's HTTP API when configured:
 *   RESEND_API_KEY      — Resend API key (server-only)
 *   CONTACT_TO_EMAIL    — inbox that receives messages
 *   CONTACT_FROM_EMAIL  — verified sender, e.g. "Portfolio <hello@yourdomain.com>"
 * Without them it returns 503 so the form never claims a message was delivered.
 */

const limits = { name: 100, email: 200, subject: 150, message: 5000 };

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled → pretend success, send nothing.
  if (typeof body.company === "string" && body.company.length > 0) {
    return Response.json({ ok: true });
  }

  const fields = {} as Record<keyof typeof limits, string>;
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (!value || value.length > limits[key]) {
      return Response.json({ error: `Please check the ${key} field.` }, { status: 400 });
    }
    fields[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return Response.json({ error: "Contact form is not configured." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: fields.email,
      subject: `[Portfolio] ${fields.subject}`,
      text: `From: ${fields.name} <${fields.email}>\n\n${fields.message}`,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "The message could not be sent. Please try again later." }, { status: 502 });
  }
  return Response.json({ ok: true });
}

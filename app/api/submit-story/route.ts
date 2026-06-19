import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, phone, story } = body as Record<string, unknown>;

  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!story || typeof story !== "string" || !story.trim()) {
    return NextResponse.json({ error: "Story is required." }, { status: 400 });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safePhone = typeof phone === "string" ? phone.trim() : "";
  const safeStory = story.trim();

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const smtpUser = process.env.SMTP_USER ?? "";
  const smtpPass = process.env.SMTP_PASS ?? "";
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const contactEmail =
    process.env.CONTACT_EMAIL ?? "shivam.ascendnow@gmail.com";

  if (!smtpHost) {
    console.log("=== New Story Submission (SMTP not configured) ===");
    console.log(`Name:  ${safeName}`);
    console.log(`Email: ${safeEmail}`);
    console.log(`Phone: ${safePhone || "(not provided)"}`);
    console.log(`Story:\n${safeStory}`);
    console.log("=================================================");
    return NextResponse.json({ success: true });
  }

  const textBody = [
    "New story submission received via the website.",
    "",
    `Name:  ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone || "(not provided)"}`,
    "",
    "Story:",
    safeStory,
  ].join("\n");

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: sans-serif; color: #18181b; background: #ffffff; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 32px 24px; }
    h1 { font-size: 22px; font-weight: 700; color: #09090b; margin-bottom: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px; }
    .value { font-size: 15px; color: #18181b; }
    .story-box { background: #f4f4f5; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
    hr { border: none; border-top: 1px solid #e4e4e7; margin: 24px 0; }
    .footer { font-size: 12px; color: #a1a1aa; }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>New Story Submission</h1>
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${escapeHtml(safeName)}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value">${escapeHtml(safeEmail)}</div>
    </div>
    <div class="field">
      <div class="label">Phone / WhatsApp</div>
      <div class="value">${safePhone ? escapeHtml(safePhone) : "<em style='color:#a1a1aa'>Not provided</em>"}</div>
    </div>
    <hr />
    <div class="field">
      <div class="label">Story</div>
      <div class="story-box">${escapeHtml(safeStory)}</div>
    </div>
    <hr />
    <div class="footer">Submitted via the story form on your website.</div>
  </div>
</body>
</html>
`.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: contactEmail,
      replyTo: safeEmail,
      subject: `New Story Submission - ${safeName}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send story submission email:", err);
    return NextResponse.json(
      { error: "Failed to send your submission. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

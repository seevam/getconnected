import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body as { email?: string; name?: string };

    if (!email || email.trim() === "") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const contactEmail = process.env.CONTACT_EMAIL ?? "shivam.ascendnow@gmail.com";

    if (!smtpHost) {
      console.log(
        `[Newsletter] New subscriber: ${email}${name ? ` (name: ${name})` : ""}`
      );
      return NextResponse.json({ success: true });
    }

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
      from: smtpFrom ?? smtpUser,
      to: contactEmail,
      subject: `New Newsletter Subscriber - ${email}`,
      text: `New subscriber: ${email}${name ? ` (name: ${name})` : ""}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Newsletter] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, id } = body as { url?: string; id?: string };

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const contactEmail = process.env.CONTACT_EMAIL ?? "shivam.ascendnow@gmail.com";

    const subject = "New Spotify Episode to Add";
    const text = `A new Spotify episode has been submitted for review:\n\nURL: ${url ?? "(not provided)"}\nEpisode ID: ${id ?? "(not provided)"}`;

    if (!smtpHost) {
      console.log(`[Add Spotify] ${subject}\n${text}`);
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
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Add Spotify] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function sendContactMessage(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("botcheck") || "").trim();

  if (honeypot) {
    return { ok: true, message: "Message sent successfully." };
  }

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.CONTACT_EMAIL || "abubuckkersiddikh@gmail.com";

  if (!apiKey) {
    return {
      ok: false,
      message:
        "Email service is not configured yet. Please email me directly at abubuckkersiddikh@gmail.com.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        `You received a new message from your portfolio contact form.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 8px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f5; padding: 12px; border-radius: 8px;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Failed to send message. Please try again or email me directly.",
      };
    }

    return {
      ok: true,
      message: "Thanks! Your message was sent successfully.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      ok: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

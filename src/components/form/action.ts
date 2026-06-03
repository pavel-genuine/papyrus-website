"use server";

import nodemailer from "nodemailer";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(data: FormData) {
  // cPanel SMTP কনফিগারেশন
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // 465 পোর্টের জন্য true
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // ইমেইল পাঠানো
    await transporter.sendMail({
      // অথেনটিকেটেড মেইল থেকেই পাঠাতে হবে, তবে ডিসপ্লে নাম ইউজারের দেওয়া যাবে
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      to: "info@papyrus.agency", // আপনার মেইন বিজনেস মেইলে নোটিফিকেশন আসবে
      replyTo: data.email, // আপনি ইনবক্সে 'Reply' চাপলে সরাসরি ক্লায়েন্টের মেইলে রিপ্লাই যাবে
      subject: `Papyrus Web: New Message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">New Website Inquiry</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a></p>
          <p style="margin: 15px 0 5px 0;"><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #111; font-style: italic; border-radius: 4px; white-space: pre-line;">
            ${data.message}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
          <small style="color: #777;">This email was sent via Papyrus Agency contact form.</small>
        </div>
      `,
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("SMTP Error:", error);
    return {
      success: false,
      message: "Could not send email. Please check SMTP settings or try again.",
    };
  }
}

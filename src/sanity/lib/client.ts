// src/sanity/client.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "74061qka", // আপনার স্যানিটি প্রজেক্ট আইডি দিন
  dataset: "production", // আপনার ডাটাবেজ সেট (সাধারণত production হয়)
  apiVersion: "2026-03-01", // বর্তমান এপিআই ভার্সন
  useCdn: true, // দ্রুত ডাটা লোড করার জন্য true রাখুন
});

"use server";

import { addFeedback } from "@/lib/feedback";

export async function saveFeedback(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (name === "" || message === "") return;
  await addFeedback(name, message);
}
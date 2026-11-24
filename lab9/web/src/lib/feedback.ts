import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export interface Feedback {
  id: number;
  name: string;
  message: string;
}

const file = path.join(process.cwd(), "data", "feedback.json");

export async function getFeedback(): Promise<Feedback[]> {
  try {
    return JSON.parse(await readFile(file, "utf8")) as Feedback[];
  } catch {
    return [];
  }
}

export async function addFeedback(name: string, message: string): Promise<void> {
  const all = await getFeedback();
  all.push({ id: Date.now(), name, message });
  await writeFile(file, JSON.stringify(all, null, 2));
}
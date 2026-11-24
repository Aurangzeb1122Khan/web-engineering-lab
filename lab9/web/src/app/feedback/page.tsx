import { getFeedback } from "@/lib/feedback";
import { saveFeedback } from "./actions";

export const metadata = { title: "Feedback" };

export default async function FeedbackPage() {
  const items = await getFeedback();

  return (
    <section aria-labelledby="feedback-heading">
      <h1 id="feedback-heading">Send Feedback</h1>

      <form action={saveFeedback}>
        <p className="span-all">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p className="span-all">
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" rows={4} required />
        </p>
        <button type="submit">Send</button>
      </form>

      <h2>Messages ({items.length})</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.message}
          </li>
        ))}
      </ul>
    </section>
  );
}
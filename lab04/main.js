
import { delay, makeCounter } from "./utils.js";

const schedule = document.querySelector("#schedule");
const status = document.querySelector('[role="status"]');

const nextConfirmation = makeCounter();

schedule.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-day]");

    if (!button || !schedule.contains(button)) {
        return;
    }

    button.classList.toggle("selected");

    const day = button.dataset.day;
    const action = button.classList.contains("selected")
        ? "booked"
        : "cancelled";

    // Wait asynchronously before displaying confirmation.
    await delay(300);

    // Count selected buttons after the delay.
    const bookedCount = schedule.querySelectorAll(
        "button[data-day].selected"
    ).length;

    // Generate a numbered confirmation.
    const confirmationNumber = nextConfirmation();

    status.textContent =
        `Confirmation #${confirmationNumber}: ${day} ${action}. ` +
        `Total booked: ${bookedCount}.`;
});

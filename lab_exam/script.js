const form = document.getElementById("reg-form");
const message = document.getElementById("message");

function setError(id, text) {
  document.getElementById(id + "-error").textContent = text;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;
  let valid = true;

  setError("name", "");
  setError("email", "");
  setError("event", "");
  message.textContent = "";

  if (name === "") {
    setError("name", "Please enter your name.");
    valid = false;
  }
  if (email === "") {
    setError("email", "Please enter your email.");
    valid = false;
  } else if (!email.includes("@")) {
    setError("email", "Email must contain @.");
    valid = false;
  }
  if (event === "") {
    setError("event", "Please choose an event.");
    valid = false;
  }

  if (valid) {
    message.textContent = "Registered " + name + " for " + event;
    form.reset();
  }
});
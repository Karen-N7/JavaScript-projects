const form = document.querySelector("form"),
  name = document.querySelector("input[type = text]"),
  password = document.querySelector("input[type = password]"),
  error = document.querySelector("#error");

form.addEventListener("submit", e => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 character");
  }
  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 character");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});

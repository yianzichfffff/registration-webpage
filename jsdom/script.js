// DOM Elements
const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

// Change Theme
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Form Submission and Validation
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  if(username.length < 3) errors.push("Username must be at least 3 characters.");
  if(!email.includes("@")) errors.push("Email must contain '@'.");
  if(password.length < 6) errors.push("Password must be at least 6 characters.");

  if(errors.length > 0){
    message.style.color = "red";
    message.innerHTML = errors.join("<br>");
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful!";
  }
});

// Reset Button
resetBtn.addEventListener("click", () => {
  form.reset();
  message.textContent = "";
});


// Real-time validation
document.getElementById("username").addEventListener("input", () => {
  const username = document.getElementById("username").value.trim();
  if(username.length < 3){
    message.style.color = "red";
    message.textContent = "Username must be at least 3 characters.";
  } else {
    message.textContent = "";
  }
});

document.getElementById("password").addEventListener("input", () => {
  const password = document.getElementById("password").value;
  if(password.length < 6){
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
  } else {
    message.textContent = "";
  }
});

document.getElementById("email").addEventListener("input", () => {
  const email = document.getElementById("email").value.trim();
  if(!email.includes("@")){
    message.style.color = "red";
    message.textContent = "Email must contain '@'.";
  } else {
    message.textContent = "";
  }
});

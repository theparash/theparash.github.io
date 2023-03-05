// Get the form element
const form = document.getElementById("form");

// Get the input field
const input = document.getElementById("number");

// Get the output box
const output = document.getElementById("output");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the entered phone number
  const phoneNumber = input.value.trim();

  // Check if the phone number starts with any of the specified prefixes
  if (
    phoneNumber.startsWith("984") ||
    phoneNumber.startsWith("985") ||
    phoneNumber.startsWith("986")
  ) {
    output.textContent = "NTC";
  } else if (phoneNumber.startsWith("974") || phoneNumber.startsWith("975")) {
    output.textContent = "SKY SIM";
  } else if (
    phoneNumber.startsWith("980") ||
    phoneNumber.startsWith("981") ||
    phoneNumber.startsWith("982")
  ) {
    output.textContent = "NCELL";
  } else if (
    phoneNumber.startsWith("961") ||
    phoneNumber.startsWith("962") ||
    phoneNumber.startsWith("988")
  ) {
    output.textContent = "SMART CELL";
  } else {
    output.textContent = "Invalid";
  }

  // Show the output box
  output.style.display = "block";
});

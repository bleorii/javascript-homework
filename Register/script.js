document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  const emailInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const passwordConfirmInput = document.querySelector(".password-confirm-input");
  const passLockIcon = document.querySelector(".passlock-icon");
  const ageInput = document.querySelector(".age-input");
  const phoneInput = document.querySelector("#phone");
  const genderInputs = document.querySelectorAll("input[name='gender']");
  const termsInput = document.querySelector("#terms");

  passLockIcon.addEventListener("click", function () {
    const type = passwordInput.type === "text" ? "password" : "text";
    passwordInput.type = type;
    passwordConfirmInput.type = type;
    passLockIcon.classList.toggle("bi-eye-fill");
    passLockIcon.classList.toggle("bi-eye-slash-fill");
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const phoneRegex = /^\+383\d{8}$/; 
    const age = parseInt(ageInput.value);

   
    if (!emailRegex.test(emailInput.value)) {
      console.log("❌ Invalid email format.");
      return;
    }

    
    if (!passwordRegex.test(passwordInput.value)) {
      console.log("❌ Password must be at least 6 characters, include one uppercase letter and one number.");
      return;
    }

    
    if (passwordInput.value !== passwordConfirmInput.value) {
      console.log("❌ Passwords do not match.");
      return;
    }

    
    if (!phoneRegex.test(phoneInput.value)) {
      console.log("❌ Invalid phone number. It must start with +383 followed by 8 digits.");
      return;
    }

   
    if (isNaN(age) || age < 18 || age > 99) {
      console.log("❌ Age must be a number between 18 and 99.");
      return;
    }

    
    if (![...genderInputs].some(input => input.checked)) {
      console.log("❌ Please select a gender.");
      return;
    }

  
    if (!termsInput.checked) {
      console.log("❌ You must agree to the terms.");
      return;
    }

    console.log("✅ Registration successful!");
  });
});

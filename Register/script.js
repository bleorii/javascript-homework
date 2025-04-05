document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
  
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const passwordConfirmInput = document.querySelector(".password-confirm-input");
    const passLockIcon = document.querySelector(".passlock-icon");
  
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
  
      console.log("✅ Registration successful!");
    });
  });
  
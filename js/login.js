document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("loginUser");
  const passwordInput = document.getElementById("loginPass");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    // Demo authentication (replace with backend later)
    if (username === "admin" && password === "1234") {
      window.location.href = "homepage1.html";
    } else {
      alert("Invalid username or password. Try again.");
    }
  });
});

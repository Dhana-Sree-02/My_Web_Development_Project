document.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Select all Book Session buttons
  const buttons = document.querySelectorAll(".counsellor-card .btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default link behavior if needed
      // Redirect to session.html
      window.location.href = "session.html";
    });
  });
});

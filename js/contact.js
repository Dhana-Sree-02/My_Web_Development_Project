document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent confidentially. Thank you for reaching out.");
    contactForm.reset();
  });
});

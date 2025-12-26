document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.querySelector(".contact-form");

  // Get counsellor name from URL
  const params = new URLSearchParams(window.location.search);
  const counsellorName = params.get("counsellor");

  if (counsellorName) {
    const counsellorSelect = form.querySelectorAll("select")[0];
    for (let option of counsellorSelect.options) {
      if (option.textContent === counsellorName) {
        option.selected = true;
        break;
      }
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const phone = form.querySelector("input[type='number']").value.trim();
    const counsellor = form.querySelectorAll("select")[0].value;
    const time = form.querySelectorAll("select")[1].value;

    if (!name || !email || !phone || counsellor === "user" || time === "user") {
      alert("Please fill in all fields and select valid options.");
      return;
    }

    alert(
      `Session booked successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCounsellor: ${counsellor}\nTime: ${time}`
    );

    form.reset();
  });
});

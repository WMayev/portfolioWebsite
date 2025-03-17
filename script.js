document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const sections = document.querySelectorAll(".dark-mode-section");

  // Sprawdzenie, czy użytkownik już wybrał tryb ciemny
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    sections.forEach(section => section.classList.add("dark-mode"));
    toggleButton.textContent = "☀️ Tryb Jasny";
  }

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      sections.forEach(section => section.classList.remove("dark-mode"));
      localStorage.setItem("darkMode", "disabled");
      toggleButton.textContent = "🌙 Tryb Ciemny";
    } else {
      body.classList.add("dark-mode");
      sections.forEach(section => section.classList.add("dark-mode"));
      localStorage.setItem("darkMode", "enabled");
      toggleButton.textContent = "☀️ Tryb Jasny";
    }
  });
});

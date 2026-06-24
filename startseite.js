const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Überprüfe beim Laden der Seite den gespeicherten Zustand
document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeToggle.querySelector(".icon").innerHTML = "☀️"; // Icon für Dark Mode
    } else {
        darkModeToggle.querySelector(".icon").innerHTML = "🌙"; // Icon für normalen Modus
    }
});

// Eventlistener für den Dark Mode Button
darkModeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");

    // Speichere den Zustand im Local Storage
    localStorage.setItem("dark-mode", isDarkMode);

    // Ändere das Icon basierend auf dem Dark Mode Zustand
    const icon = darkModeToggle.querySelector(".icon");
    if (isDarkMode) {
        icon.innerHTML = "☀️"; // Sonne im Dark Mode
    } else {
        icon.innerHTML = "🌙"; // Mond im normalen Modus
    }
});
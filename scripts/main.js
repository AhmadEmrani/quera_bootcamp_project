import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // TODO: Render Tasks
  // TODO: Create Task
  // TODO: Update Task
  // TODO: Delete Task

  // Set Date
  const setDates = document.querySelectorAll(".date");
  setDates.forEach((date) => {
    date.textContent += setDate();
  });

  // Sidebar
  initializeSidebar();

  // Toggle mode
  toggleTheme();
});

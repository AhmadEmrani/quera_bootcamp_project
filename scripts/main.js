import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";
import { editTask } from "./edit-task.js";

document.addEventListener("DOMContentLoaded", () => {
  // TODO: Render Tasks
  // TODO: Create Task
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

  // Edit Task
  editTask();
});

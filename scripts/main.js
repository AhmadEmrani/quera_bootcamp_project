import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";
import { editTask } from "./edit-task.js";
import { createTask } from "./create-task.js";
import { renderAllTasks } from "./render-tasks.js";

// export let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  // TODO: Render Tasks
  renderAllTasks();
  // TODO: Create Task
  createTask();
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
export let tasks = [];
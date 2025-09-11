import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";
import { editTask } from "./edit-task.js";
import { createTask } from "./create-task.js";
import { renderAllTasks } from "./render-tasks.js";
import { deleteTask } from "./delete-task.js";


let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  // TODO: Render Tasks
  renderAllTasks(tasks);
  // TODO: Create Task
  createTask(tasks);
  
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

  // Delete Task
  deleteTask();
});


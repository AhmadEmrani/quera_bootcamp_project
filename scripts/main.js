import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";
import { editTask } from "./edit-task.js";
import { createTask } from "./create-task.js";
import { renderAllTasks, renderEditTask } from "./render-tasks.js";
import { deleteTask } from "./delete-task.js";

// export let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  // TODO: Render Tasks
  renderAllTasks();
  // TODO: Create Task
  createTask();

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
  editTask((index) => {
    renderEditTask(tasks[index], index);
  });

  // Delete Task
  deleteTask();
});
export let tasks = [];

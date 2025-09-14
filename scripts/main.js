import { initializeSidebar } from "./sidebar-mobile.js";
import { setDate } from "./utils.js";
import { toggleTheme } from "./utils.js";
import { editTask } from "./edit-task.js";
import { createTask } from "./create-task.js";
import { renderAllTasks, renderEditTask } from "./render-tasks.js";
import { deleteTask } from "./delete-task.js";
import { completeTask } from "./complete-task.js";

document.addEventListener("DOMContentLoaded", () => {
  //call from local storage
  let tasks = JSON.parse(localStorage.getItem("todoTasksList")) || [];

  // Render Tasks
  renderAllTasks(tasks);

  // Create Task
  createTask(tasks);

  // Edit Task
  editTask((taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    renderEditTask(task, tasks);
  });

  //isComplete
  // handleCompleteTask();

  // Delete Task
  deleteTask((taskId) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index > -1) tasks.splice(index, 1);
    renderAllTasks(tasks);
  });

  // Change Complete Task
  completeTask((taskId) => {
    const todo = tasks.find((t) => String(t.id) === String(taskId));
    if (todo) {
      todo.isCompeleted = !todo.isCompeleted;
      renderAllTasks(tasks);
    }
  });

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

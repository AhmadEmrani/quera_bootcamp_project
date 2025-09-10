export function createTask() {
  let add_task_oppener = document.querySelector("#add-task-oppener");

  add_task_oppener.addEventListener("click", () => {
    let add_task_main = document.querySelector("#add-task-main");
    add_task_main.classList.toggle("hidden");
  });

  let tag_oppener = document.querySelector("#tag-oppener");
  let tag_oppener_img = document.querySelector("#tag-oppener-img");
  let tags_container = document.querySelector("#tags-container");

  tag_oppener.addEventListener("click", () => {
    tag_oppener_img.classList.toggle("rotate-90");
    tags_container.classList.toggle("hidden");
  });

  document.querySelector("#addTodoBtn").addEventListener("click", addtodo);
  let priorityInput_Value;
  const priorityInputs = document.querySelectorAll('input[name="priority"]');
  priorityInputs.forEach((input) => {
    input.addEventListener("change", () => {
      priorityInput_Value = input.value;
    });
  });

  function addtodo() {
    const titleInput = document.querySelector("#taskName");
    const descriptionInput = document.querySelector("#description");
    

    let todo = {
      id: crypto.randomUUID(),
      title: titleInput.value,
      description: descriptionInput.value,
      priority: priorityInput_Value,
      isending: false,
      isCompleted: false,
    };
    tasks.push(todo);
    titleInput.value = "";
    descriptionInput.value = "";
    console.log(tasks);
    renderAllTasks();

  }
}
import { tasks } from "./main.js";
import { renderAllTasks } from "./render-tasks.js";


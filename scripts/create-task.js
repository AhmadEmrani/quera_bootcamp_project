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

  const task_info_container = document.querySelector(
    "#task-information-container"
  );
  const radios = document.querySelectorAll(
    '#tags-container input[type="radio"]'
  );

  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      console.log("Radio clicked:", event.target.value);
      let priorityColor, priorityText, textColor;
      switch (event.target.value) {
        case "important":
          priorityColor = "#FFE2DB";
          priorityText = "بالا";
          textColor = "#FF5F37";
          break;
        case "medium":
          priorityColor = "#FFEFD6";
          priorityText = "متوسط";
          textColor = "#FFAF37";
          break;
        case "low":
          priorityColor = "#C3FFF1";
          priorityText = "پایین";
          textColor = "#11A483";
          break;
        default:
          priorityColor = "#CCCCCC";
          priorityText = "";
      }
      task_info_container.insertAdjacentHTML("beforeend", `
      <div class="priority-tag w-fit flex flex-row gap-2 rounded-[4px] bg-[${priorityColor}] px-2 py-1">
        <img class="cancel-priority-btn w-5 h-5 cursor-pointer" 
             src="../assets/icons/cancel-priority.svg" alt="close">
        <p class="text-[${textColor}] font-yekan font-semibold text-[14px]">
          ${priorityText}
        </p>
      </div>
    `);

      tags_container.classList.toggle("hidden");
      tag_oppener.classList.toggle("hidden");
    });
  });
  task_info_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel-priority-btn")) {
      e.target.closest(".priority-tag").remove();
      tags_container.classList.toggle("hidden");
      tag_oppener.classList.toggle("hidden");
    }
  });

  cancelBtn.addEventListener("click", () => {
    newTag.remove();
    tags_container.classList.toggle("hidden");
    tag_oppener.classList.toggle("hidden");
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

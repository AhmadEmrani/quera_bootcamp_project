export function createTask(tasks) {
  console.log(tasks);
  let add_task_oppener = document.querySelector("#add-task-oppener");
  const empty_image = document.querySelector("#image-no-tasks");

  if (tasks.length > 0) {
    empty_image.classList.add("hidden");
    console.log("enter this section");
  } else {
    empty_image.classList.remove("hidden");
    console.log("enter this section 2");
  }
  const observer = new MutationObserver(() => {
    console.log("DOM changed!");
    if (tasks.length > 0) {
      empty_image.classList.add("hidden");
      console.log("enter this section");
    } else {
      empty_image.classList.remove("hidden");
      console.log("enter this section 2");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  let add_task_main = document.querySelector("#add-task-main");
  add_task_oppener.addEventListener("click", () => {
    add_task_main.classList.toggle("hidden");
    add_task_oppener.classList.add("hidden");
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

  const cancel_adding_task_main = document.querySelector(
    "#cancel-adding-task-main"
  );
  cancel_adding_task_main.addEventListener("click", () => {
    add_task_main.classList.toggle("hidden");
    add_task_oppener.classList.remove("hidden");
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
      task_info_container.insertAdjacentHTML(
        "beforeend",
        `
      <div class="priority-tag w-fit flex flex-row gap-2 rounded-[4px] bg-[${priorityColor}] px-2 py-1 ">
        <img class="cancel-priority-btn w-5 h-5 cursor-pointer" 
             src="../assets/icons/cancel-priority.svg" alt="close">
        <p class="text-[${textColor}] font-yekan font-semibold text-[14px]">
          ${priorityText}
        </p>
      </div>
    `
      );

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


  const todoCount = document.getElementById("todo-tasks-counter");
  todoCount.textContent = parseInt(0);
  function addtodo() {
    //get title & Desc Data
    const titleInput = document.querySelector("#taskName");
    const descriptionInput = document.querySelector("#description");

    let todo = {
      id: crypto.randomUUID(),
      title: titleInput.value,
      description: descriptionInput.value,
      priority: priorityInput_Value,
      isediting: false,
      isCompleted: false,
    };
    add_task_main.classList.toggle("hidden");
    add_task_oppener.classList.remove("hidden");
    tasks.push(todo);
    titleInput.value = "";
    descriptionInput.value = "";
    console.log(tasks);
    renderAllTasks(tasks);
    todoCount.textContent = parseInt(todoCount.textContent) + 1;


  }
}
// import { tasks } from "./main.js";
import { renderAllTasks } from "./render-tasks.js";

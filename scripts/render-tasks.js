import { tasks } from "./main.js";

const tasksContainer = document.querySelector("#tasks-container");

export function renderAllTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((todo) => {

    let priorityColor, priorityText ,textColor;
    switch (todo.priority) {
      case "important":
        priorityColor = "#FFE2DB";
        priorityText = "بالا";
        textColor ="#FF5F37";
        break;
      case "medium":
        priorityColor = "#FFEFD6";
        priorityText = "متوسط";
        textColor ="#FFAF37";
        break;
      case "low":
        priorityColor = "#C3FFF1";
        priorityText = "پایین";
        textColor ="#11A483";
        break;
      default:
        priorityColor = "#CCCCCC";
        priorityText = "";
    }

    const li = document.createElement("li");
    li.className = "flex flex-row justify-between pl-4 py-4 border border-neutral-light-200 rounded-[12px] relative mb-4";

    li.innerHTML = `
      <!-- Edit/Delete buttons -->
      <div class="flex items-center gap-1.5 px-1.5 py-1 border border-neutral-light-200 rounded-lg bg-background-light absolute left-4 top-10 shadow-edit-buttons md:px-2 md:py-1.5 md:gap-2.5">
        <button class="delete-btn">
          <img src="../assets/icons/trash-light.svg" alt="حذف" class="w-4 h-4 md:w-5 md:h-5"/>
        </button>
        <div class="h-5 w-[1px] bg-neutral-light-200"></div>
        <button class="edit-btn">
          <img src="../assets/icons/edit-light.svg" alt="ویرایش" class="w-4 h-4 md:w-5 md:h-5"/>
        </button>
      </div>

      <div class="relative flex flex-row gap-4">
        <div class="w-1 h-auto rounded-l-[8px] bg-[${textColor}]"></div>
        <div class="flex w-5 h-5 p-2.5 gap-[10px] rounded-[5px] border border-neutral-light-300"></div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1 md:flex-row">
            <h3 class="text-14 font-[600] text-neutral-light-700 md:text-[16px]">${todo.title}</h3>
            <div class="w-fit h-5 rounded-[4px] px-[2px] py-2 flex flex-col items-center justify-center gap-2 text-center font-yekan font-[600] text-[10px] bg-[${priorityColor}] text-[${textColor}]">
              <p class="text-center">${priorityText}</p>
            </div>
          </div>
          <p class="text-[12px] font-[400] text-neutral-light-500 md:text-[14px]">${todo.description}</p>
        </div>
      </div>
      <figure>
        <img src="../assets/icons/3dotIcon.svg" alt=""/>
      </figure>
    `;

    tasksContainer.appendChild(li);

   
  
  });
}

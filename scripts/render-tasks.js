// import { tasks } from "./main.js";

const tasksContainer = document.querySelector("#tasks-container");
const completedTasks = document.querySelector(".completed-tasks");

export function renderAllTasks(tasks) {
  console.log(tasks);
  tasksContainer.innerHTML = "";

  tasks.forEach((todo) => {
    let priorityColor, priorityText, textColor;
    switch (todo.priority) {
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

    // todo is not completed
    if (!todo.isCompleted) {
      const li = document.createElement("li");
      li.className =
        "flex flex-row justify-between pl-4 py-4 border border-neutral-light-200 rounded-[12px] relative mb-4";

      li.innerHTML = `
        <!-- Edit/Delete buttons -->
        <div class="flex items-center gap-1.5 px-1.5 py-1 border border-neutral-light-200 rounded-lg bg-background-light absolute left-4 top-10 shadow-edit-buttons md:px-2 md:py-1.5 md:gap-2.5 md:max-w-[724px]">
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
              <div class="w-fit h-5 rounded-[4px] px-[8px] py-1 flex flex-col items-center justify-center gap-2 text-center font-yekan font-[600] text-[10px] md:text-[12px] bg-[${priorityColor}] text-[${textColor}]">
                <p class="text-center">${priorityText}</p>
              </div>
            </div>
            <p class="text-[12px] font-[400] text-neutral-light-500 md:text-[14px]">${todo.description}</p>
          </div>
        </div>
        <button class="more-btn">
          <img src="../assets/icons/3dotIcon.svg" alt="" />
        </button>
      `;

      tasksContainer.appendChild(li);
    } if (todo.isCompleted) {
      const li = document.createElement("li");
      li.className =
        "flex flex-row justify-between pl-4 py-4 border-solid border-neutral-light-300 border-[1px] rounded-[12px]";

      li.innerHTML = `
      <div class="relative flex flex-row gap-4">
      <div class="w-1 h-auto rounded-l-[8px] bg-[${textColor}]"></div>
      <input
        id="remember"
        type="checkbox"
        checked
        class="flex w-6 h-6 p-2.5 gap-[10px] rounded-[5px] border-solid accent-blue-600 border-neutral-light-300 border-[1px] text-primary-lightt focus:primary-hover-light"
      />
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <h3
            class="text-sm md:text-base font-[600] text-neutral-light-700 line-through"
          >
          ${todo.title}
          </h3>
        </div>
      </div>
    </div>
    <figure>
      <img src="../assets/icons/3dotIcon.svg" alt="" />
    </figure>
      
      `;
      completedTasks.appendChild(li);
    } if (todo.isediting) {
      const div = document.createElement("div");
      div.className =
        "font-yekan bg-background-light border border-solid border-neutral-light-200 rounded-xl shadow-app";
      div.innerHTML = `
      <div
      class="flex flex-col items-start gap-6 p-4 pb-6 border-b border-b-neutral-light-200"
    >
      <div class="flex flex-col gap-2">
        <h3
          class="font-semibold text-sm text-neutral-light-800 md:font-bold md:text-base"
        >
        ${todo.title}
        </h3>
        <p
          class="font-normal text-xs text-neutral-light-600 md:text-sm"
        >
        ${todo.description}
        </p>
      </div>
      <div class="">
        <button
          class="font-semibold text-xs text-[#11A483] bg-[#C3FFF1] px-2 py-1.5 flex items-center gap-1.5 rounded-[4px] md:text-sm"
        >
          <img
            src="../assets/icons/close.svg"
            alt="حذف"
            class="w-4 h-4 md:w-5 md:h-5"
          />
          پایین
        </button>
      </div>
      <div class="hidden">
        <button
          class="font-semibold text-xs text-[#FFAF37] bg-[#FFEFD6] px-2 py-1.5 flex items-center gap-1.5 rounded-[4px] md:text-sm"
        >
          <img
            src="../assets/icons/close.svg"
            alt="حذف"
            class="w-4 h-4 md:w-5 md:h-5"
          />
          متوسط
        </button>
      </div>
      <div class="hidden">
        <button
          class="font-semibold text-xs text-[#FF5F37] bg-[#FFE2DB] px-2 py-1.5 flex items-center gap-1.5 rounded-[4px] md:text-sm"
        >
          <img
            src="../assets/icons/close.svg"
            alt="حذف"
            class="w-4 h-4 md:w-5 md:h-5"
          />
          بالا
        </button>
      </div>
    </div>
    <div class="p-4 flex justify-end md:pt-5">
      <button
        class="font-semibold text-xs text-on-primary-light bg-app-primary-light flex items-center justify-center px-4 py-1.5 rounded-md md:text-sm"
      >
        ویرایش تسک
      </button>
    </div>
      
      `;
      tasksContainer.appendChild(div);
    }
  });
}

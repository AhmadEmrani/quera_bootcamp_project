const tasksContainer = document.querySelector("#tasks-container");
const completedTasks = document.querySelector(".completed-tasks");

function selectedPriorityTag(priority) {
  let priorityColor, priorityText, textColor;

  switch (priority) {
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
      priorityColor = "neutral-light-400";
      priorityText = "";
      textColor = "neutral-light200";
  }

  return `
    <div class="priority-tag flex items-center gap-1.5 rounded-[4px] bg-[${priorityColor}] px-2 py-1 text-[${textColor}] font-yekan font-semibold text-sm">
      <img class="cancel-priority-btn w-4 h-4 cursor-pointer md:w-5 md:h-5" 
          src="../assets/icons/cancel-priority.svg" alt="بستن" />
      ${priorityText}
    </div>
  `;
}

export function renderAllTasks(tasks) {
  tasksContainer.innerHTML = "";
  completedTasks.innerHTML = "";

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
        "task-card flex flex-row justify-between pl-4 py-4 border border-neutral-light-200 rounded-[12px] relative";

      li.innerHTML = `
        <!-- Edit/Delete buttons -->
        <div class="edit-delete-container hidden flex items-center gap-1.5 px-1.5 py-1 border border-neutral-light-200 rounded-lg bg-background-light absolute left-4 top-10 shadow-edit-buttons md:px-2 md:py-1.5 md:gap-2.5 md:max-w-[724px]">
          <button class="delete-btn">
            <img src="../assets/icons/trash-light.svg" alt="حذف" class="w-4 h-4 md:w-5 md:h-5"/>
          </button>
          <div class="h-5 w-[1px] bg-neutral-light-200"></div>
          <button class="edit-btn">
            <img src="../assets/icons/edit-light.svg" alt="ویرایش" class="w-4 h-4 md:w-5 md:h-5"/>
          </button>
        </div>
  
        <div class="relative flex flex-row gap-4 w-screen">
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
        <button class="more-btn cursor-pointer h-[18px] w-2 ">
          <img src="../assets/icons/3dotIcon.svg" alt="نمایش بیشتر" class="w-full"/>
        </button>
      `;

      li.dataset.id = todo.id;
      tasksContainer.appendChild(li);
    }
    if (todo.isCompleted) {
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
    <button class="more-btn cursor-pointer h-[18px] w-2 ">
      <img src="../assets/icons/3dotIcon.svg" alt="نمایش بیشتر" class="w-full"/>
    </button>
      `;
      li.dataset.id = todo.id;
      completedTasks.appendChild(li);
    }
  });
}

export function renderEditTask(taskId, tasks) {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) return;

  const tasksList = document.getElementById("tasks-container");
  let selectedPriority = task.priority;

  const existingEditCard = tasksList.querySelector(".edit-card-container");
  if (existingEditCard) existingEditCard.remove();

  const editCard = document.createElement("div");
  editCard.className =
    "edit-card-container font-yekan bg-background-light border border-solid border-neutral-light-200 rounded-xl shadow-app";

  editCard.innerHTML = `
    <div class="flex flex-col border-b border-b-neutral-light-200">
      <div class="flex flex-col gap-2 w-full px-4 pt-4">
        <input
          id="edit-title"
          type="text"
          value="${task.title}"
          class="font-semibold text-sm text-neutral-light-800 w-full focus:outline-none md:font-bold md:text-base"
        />
        <textarea
          id="task-description"
          class="font-normal text-xs text-neutral-light-600 w-full focus:outline-none resize-none md:text-sm"
        >${task.description}</textarea>
      </div>

      <div class="priority-box flex flex-col items-start gap-2 p-4">
        <button
          class="tags-opener font-semibold text-xs text-neutral-light-400 flex items-center gap-1 px-2 py-1 rounded-[4px] border border-solid border-neutral-light-200 cursor-pointer md:text-sm md:shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.25)]"
        >
          <img
            class="tags-opener-icon w-4 h-4 transition-all duration-500 md:w-5 md:h-5"
            src="../assets/icons/tag-right.svg"
            alt="آیکون تگ‌ها"
          />
          <img
            class="hidden tags-opened-icon w-4 h-4 transition-all duration-300 md:w-5 md:h-5"
            src="../assets/icons/tag-down.svg"
            alt="آیکون تگ‌ها"
          />
          تگ‌ها
        </button>

        <div
          class="tags-container hidden items-center gap-4 p-2.5 border border-solid border-neutral-light-200 rounded-lg shadow-app"
        >
          <span
            data-priority="low"
            class="priority-span font-semibold text-xs px-2 py-0.5 rounded-[4px] cursor-pointer bg-[#C3FFF1] text-[#11A483]"
            }"
            >پایین</span
          >
          <img src="../assets/icons/tags-container-line.svg" alt="خط" />
          <span
            data-priority="medium"
            class="priority-span font-semibold text-xs px-2 py-0.5 rounded-[4px] cursor-pointer bg-[#FFEFD6] text-[#FFAF37]"
            }"
            >متوسط</span
          >
          <img src="../assets/icons/tags-container-line.svg" alt="خط" />
          <span
            data-priority="important"
            class="priority-span font-semibold text-xs px-2 py-0.5 rounded-[4px] cursor-pointer bg-[#FFE2DB] text-[#FF5F37]"
            }"
            >بالا</span
          >
        </div> 

        <div class="priority-display mt-2">
          ${selectedPriority ? selectedPriorityTag(selectedPriority) : ""}
        </div>
      </div>
    </div>

    <div class="p-4 flex gap-2.5 justify-end w-full md:pt-5">
      <button
        id="cancel-edit"
        class="rounded-md p-[6px] gap-3 bg-neutral-light-100 cursor-pointer"
      >
        <img
          src="../assets/icons/cancel.svg"
          alt="بستن"
          class="w-4 h-4 md:w-5 md:h-5"
        />
      </button>

      <button
        id="save-edit"
        class="font-semibold text-xs text-on-primary-light bg-app-primary-light flex items-center justify-center px-4 py-1.5 cursor-pointer rounded-md md:text-sm"
      >
        ویرایش تسک
      </button>
    </div>
  `;

  tasksList.insertBefore(
    editCard,
    tasksList.querySelector(`.task-card[data-id="${task.id}"]`).nextSibling
  );

  const tagsContainer = editCard.querySelector(".tags-container");
  const tagsOpener = editCard.querySelector(".tags-opener");
  const tagsIconRight = tagsOpener.querySelector(".tags-opener-icon");
  const tagsIconDown = tagsOpener.querySelector(".tags-opened-icon");

  tagsOpener.classList.add("hidden");
  tagsOpener.addEventListener("click", () => {
    tagsContainer.classList.toggle("hidden");
    tagsContainer.classList.toggle("flex");
    tagsIconRight.classList.toggle("rotate-90");
    tagsIconRight.classList.toggle("hidden");
    tagsIconDown.classList.toggle("hidden");
  });

  let priorityDisplay = editCard.querySelector(".priority-display");
  const cancelPriorityBtn = priorityDisplay.querySelector(
    ".cancel-priority-btn"
  );
  cancelPriorityBtn.addEventListener("click", () => {
    selectedPriority = "";
    priorityDisplay.innerHTML = "";
    tagsOpener.classList.remove("hidden");
    tagsIconRight.classList.remove("rotate-90");
    tagsContainer.classList.add("hidden");
    tagsContainer.classList.remove("flex");
    tagsIconRight.classList.remove("hidden");
    tagsIconDown.classList.add("hidden");
  });
  editCard.querySelectorAll(".priority-span").forEach((span) => {
    span.addEventListener("click", () => {
      selectedPriority = span.dataset.priority;
      priorityDisplay.innerHTML = selectedPriorityTag(selectedPriority);

      tagsOpener.classList.add("hidden");
      tagsContainer.classList.add("hidden");
      tagsContainer.classList.remove("flex");
      tagsIconRight.classList.remove("rotate-90");
      tagsIconRight.classList.remove("hidden");
      tagsIconDown.classList.add("hidden");

      const cancelPriorityBtn = priorityDisplay.querySelector(
        ".cancel-priority-btn"
      );
      cancelPriorityBtn.addEventListener("click", () => {
        selectedPriority = "";
        priorityDisplay.innerHTML = "";
        tagsOpener.classList.remove("hidden");
        tagsIconRight.classList.remove("rotate-90");
        tagsContainer.classList.add("hidden");
        tagsContainer.classList.remove("flex");
        tagsIconRight.classList.remove("hidden");
        tagsIconDown.classList.add("hidden");
      });
    });
  });

  editCard.querySelector("#save-edit").addEventListener("click", () => {
    (task.title = editCard.querySelector("#edit-title").value),
      (task.description = editCard.querySelector("#task-description").value),
      (task.priority = selectedPriority),
      editCard.remove();
    renderAllTasks(tasks);
  });

  editCard.querySelector("#cancel-edit").addEventListener("click", () => {
    editCard.remove();
  });
}

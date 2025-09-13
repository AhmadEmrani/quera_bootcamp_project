export function editTask(onEdit) {
  const tasksList = document.getElementById("tasks-container");

  tasksList.addEventListener("click", (e) => {
    const element = e.target;
    const moreBtn = element.closest(".more-btn");

    if (moreBtn) {
      const taskCard = moreBtn.parentElement;
      const editDeleteBtns = taskCard.querySelector(".edit-delete-container");
      if (!editDeleteBtns) return;
      editDeleteBtns.classList.toggle("hidden");

      const editBtn = editDeleteBtns.querySelector(".edit-btn");
      if (!editBtn) return;
      editBtn.addEventListener("click", () => {
        const taskIndex = Array.from(tasksList.children).indexOf(taskCard);
        onEdit(taskIndex);
      });
    } else {
      document
        .querySelectorAll(".edit-delete-container")
        .forEach((container) => container.classList.add("hidden"));
    }
  });
}

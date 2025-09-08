export function editTask() {
  document.addEventListener("click", (e) => {
    const element = e.target;

    const moreBtn = element.classList.contains("more-btn")
      ? element
      : element.closest(".more-btn");

    if (moreBtn) {
      const taskCard = moreBtn.parentElement;
      const editDeleteBtns = taskCard.querySelector(".edit-delete-container");
      editDeleteBtns.classList.toggle("hidden");

      const editBtn = editDeleteBtns.querySelector(".edit-btn");
      editBtn.addEventListener("click", () => {
        // TODO
      });
    } else {
      document
        .querySelectorAll(".edit-delete-container")
        .forEach((container) => container.classList.add("hidden"));
    }
  });
}

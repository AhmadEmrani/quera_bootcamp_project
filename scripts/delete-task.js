export function deleteTask() {
  const taskList = document.getElementById("tasks-container");

  taskList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest("button") && target.closest("img[alt='حذف']")) {
      const id = target.parentElement.dataset.id;
      // onDelete(id);
    }
  });
}

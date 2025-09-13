export function deleteTask(onDelete) {
  const tasksList = document.getElementById("tasks-container");

  tasksList.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    if (!deleteBtn) return;

    const taskCard = deleteBtn.closest(".task-card");
    if (!taskCard) return;

    const taskId = taskCard.dataset.id;
    onDelete(taskId);
  });
}

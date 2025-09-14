export function completeTask(onCompleted) {
  const tasksList = document.getElementById("tasks-container");

  tasksList.addEventListener("click", (e) => {
    const element = e.target;
    const checkBoxInput = element.closest("#remember-add");

    if (!checkBoxInput) return;

    const taskCard = deleteBtn.closest(".task-card");
    if (!taskCard) return;

    const taskId = taskCard.dataset.id;
    onCompleted(taskId);
  });
}

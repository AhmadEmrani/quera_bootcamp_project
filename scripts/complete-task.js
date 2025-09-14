export function completeTask(onCompleted) {
  const tasksList = document.getElementById("tasks-container");
  const taskCompletedList = document.getElementById("complete-tasks-container");

  tasksList.addEventListener("click", (e) => {
    const element = e.target;
    const checkBoxInput = element.closest(".remember-add");

    if (!checkBoxInput) return;

    const taskCard = checkBoxInput.closest(".task-card");
    if (!taskCard) return;

    const taskId = taskCard.dataset.id;
    onCompleted(taskId);
  });

  taskCompletedList.addEventListener("click", (e) => {
    const element = e.target;
    const checkBoxInput = element.closest(".remember-add-done");

    if (!checkBoxInput) return;

    const taskCardComplete = checkBoxInput.closest(".task-card-complete");
    if (!taskCardComplete) return;

    const taskId = taskCardComplete.dataset.id;
    onCompleted(taskId);
  });
}

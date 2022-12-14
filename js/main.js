let taskCreator = document.getElementById("taskCreator");
let newTaskField = document.getElementById("newTask");

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "Enter":
      if (taskCreator.value != "") {
        newTaskField.innerHTML += `<div class="task__new-container"><div class="task__circle"></div><div class="task__new-task" id="task">${taskCreator.value}</div><img src="./images/icon-cross.svg" id="eraseTask"></div>`;
        taskCreator.value = "";
      }
      break;

    default:
      break;
  }
});

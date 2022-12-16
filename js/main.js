let taskCreator = document.getElementById("taskCreator");
let newTaskField = document.getElementById("newTask");

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "Enter":
      createTask();
      break;

    default:
      break;
  }
});

function createTask() {
  var newTask = document.createElement("li");
  newTask.classList.add("task__new-container");

  var flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  var circle = document.createElement("div");
  circle.classList.add("task__circle");

  newTaskField.appendChild(newTask);
  newTask.appendChild(flexContainer);
  flexContainer.appendChild(circle);
  flexContainer.appendChild(document.createTextNode(taskCreator.value));
  taskCreator.value = "";

  function concluidaAtividade() {
    circle.classList.toggle("done");
  }

  circle.addEventListener("click", concluidaAtividade);

  var botaoDeletar = document.createElement("button");
  botaoDeletar.classList.add("del__btn");
  botaoDeletar.appendChild(document.createTextNode("X"));
  newTask.appendChild(botaoDeletar);
  botaoDeletar.addEventListener("click", deleteItem);

  function deleteItem() {
    newTask.remove();
  }
}

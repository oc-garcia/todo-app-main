let taskCreator = document.getElementById("taskCreator");
let newTaskField = document.getElementById("newTask");
let counterField = document.getElementById("counterField")

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "Enter":
      if (taskCreator.value != "") {
        createTask();
        counterField.innerHTML = `${countElements(taskCreator)} Items left`;
      }
      break;

    default:
      break;
  }
});

function createTask() {
  var newTask = document.createElement("li");
  newTask.classList.add("task__new-container");
  newTask.id = "newTaskId";

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

function countElements(id) {
  // Get all elements with the specified id
  const elements = document.getElementById(`#${id}`);
  // Return the number of elements
  return elements.length;
}


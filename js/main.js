let taskCreator = document.getElementById("taskCreator");
let newTaskField = document.getElementById("newTask");
let counterField = document.getElementById("counterField");

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "Enter":
      if (taskCreator.value != "") {
        createTask();
        counterField.innerHTML = `${countElements()} Items left`;
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
  addBar();

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
    counterField.innerHTML = `${countElements()} Items left`;
    addBar();
  }
}

function countElements() {
  // Get all elements with the specified id
  const elements = document.querySelectorAll("li.task__new-container");
  // Return the number of elements
  return elements.length;
}

function addBar() {
  const field = document.getElementById("counterContainer");
  if (countElements() == 0) {
    field.className = "hide";
  } else {
    field.className = "counter__container";
  }
}

let btnClear = document.getElementById("clearCompleted");

btnClear.addEventListener("click", removeCompleted);

function removeCompleted() {
  const checkBox = document.querySelectorAll("div.done");
  //let task = document.querySelectorAll("li.task__new-container");
  //task = task.filter(() => checkBox.classList.contains("div.done"));
  console.log(checkBox);
}

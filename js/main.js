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
    if (circle.classList.contains("done")) {
      flexContainer.parentNode.classList.add("done-text");
      counterField.innerHTML = `${countElements()} Items left`;
    } else {
      flexContainer.parentNode.classList.remove("done-text");
      counterField.innerHTML = `${countElements()} Items left`;
    }
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
  const containerElements = document.querySelectorAll("li.task__new-container");
  // Return the number of elements
  const containerDone = document.querySelectorAll("div.done");
  const x = containerElements.length - containerDone.length;
  return x;
}

function addBar() {
  const containerElements = document.querySelectorAll("li.task__new-container");
  const field = document.getElementById("counterContainer");
  if (containerElements.length == 0) {
    field.className = "hide";
  } else {
    field.className = "counter__container";
  }
}

let btnClear = document.getElementById("clearCompleted");

btnClear.addEventListener("click", removeCompleted);

function removeCompleted() {
  let task = document.querySelectorAll("li.task__new-container");
  let circle = document.querySelectorAll(".task__circle");
  for (let i = 0; i < task.length; i++) {
    if (circle[i].classList.contains("done")) {
      task[i].remove();
      counterField.innerHTML = `${countElements()} Items left`;
      addBar();
    }
  }
}

let selectedBtn = document.querySelectorAll("button.filter__btn");
selectedBtn[0].addEventListener("click", () => filterTasks(selectedBtn[0]));
selectedBtn[1].addEventListener("click", () => filterTasks(selectedBtn[1]));
selectedBtn[2].addEventListener("click", () => filterTasks(selectedBtn[2]));

function filterTasks(prmt) {
  let done = document.querySelectorAll(".done");
  let circle = document.querySelectorAll(".task__circle");
  let flexContainer = document.querySelectorAll(".flex-container");
  if (prmt.value === "All") {
    done.forEach((ele) => {
      ele.parentElement.parentElement.className = "task__new-container";
    });
    circle.forEach((ele) => {
      ele.parentElement.parentElement.className = "task__new-container";
    });
    selectedBtn[0].classList.add("selected");
    selectedBtn[1].classList.remove("selected");
    selectedBtn[2].classList.remove("selected");
  } else if (prmt.value === "Active") {
    circle.forEach((ele) => {
      ele.parentElement.parentElement.className = "task__new-container";
    });
    done.forEach((ele) => {
      ele.parentElement.parentElement.className = "hide";
    });
    selectedBtn[1].classList.add("selected");
    selectedBtn[0].classList.remove("selected");
    selectedBtn[2].classList.remove("selected");
  } else if (prmt.value === "Completed") {
    circle.forEach((ele) => {
      ele.parentElement.parentElement.className = "hide";
    });
    done.forEach((ele) => {
      ele.parentElement.parentElement.className = "task__new-container";
    });
    selectedBtn[2].classList.add("selected");
    selectedBtn[0].classList.remove("selected");
    selectedBtn[1].classList.remove("selected");
  }
}

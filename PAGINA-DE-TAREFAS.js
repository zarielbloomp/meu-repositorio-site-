function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Insira alguma tarefa para ser adicionada");
        return;
    }

    let li = document.createElement("li");
    let taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            li.classList.add("task-complete");
        } else {
            li.classList.remove("task-complete");
        }
    });
    li.appendChild(checkBox);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'Remover';
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}

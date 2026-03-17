function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    let btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

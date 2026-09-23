function addTask() {

    const taskInput = document.getElementById("taskInput");

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: taskText
        })
    })
    .then(response => response.json())
    .then(data => {

        if (data.error) {
            alert(data.error);
            return;
        }

        const li = document.createElement("li");

        li.textContent = data.task;

        document.getElementById("taskList").appendChild(li);

        taskInput.value = "";

        alert("Task added successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to add task");
    });
}
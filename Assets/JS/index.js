window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById("task-name");
  const taskDescription = document.getElementById("task-description");
  const button = document.getElementById("add-todo");
  const listContainer = document.getElementById("lists");

  const taskArray = [
    { nameOfTask: "fetch water", taskDescription: "Fetch it from the well" },
    { nameOfTask: "cook food", taskDescription: "try cook rice" },
    { nameOfTask: "cook meat", taskDescription: "make it spicy" },
    { nameOfTask: "Code", taskDescription: "Code for at least five hours" }
  ];

  const messageElement = document.getElementById("message");
  const addTodo = () => {
    if (taskName.value === "" || taskDescription.value === "") {
      messageElement.textContent = "Aww! Aww!! Please fill in both fields";
      return;
    }

    const newTask = {
      nameOfTask: taskName.value,
      taskDescription: taskDescription.value
    };

    taskArray.push(newTask);
    taskName.value = "";
    taskDescription.value = "";
    displayTodo();
  };

  const displayTodo = () => {
    listContainer.innerHTML = '';
  
    taskArray.forEach((task, index) => {
      const itemDiv = document.createElement("div");
      const li = document.createElement("li");
      const inputContainer = document.createElement("div");

      // Added container for inputs
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      const saveBtn = document.createElement("button"); 
      
      // Added save button
      const taskNameInput = document.createElement("input");
      const taskDescInput = document.createElement("textarea");
  
      editBtn.textContent = "Edit";
      editBtn.className = "edit";
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      // Set text for save button
      saveBtn.textContent = "Save"; 
      // Initially hide save button
      saveBtn.style.display = "none"; 

      // Set width for save button
      saveBtn.style.width = "80px"; 
  
      taskNameInput.value = task.nameOfTask;
      taskDescInput.value = task.taskDescription;
  
      // Set width for list item
      li.style.width = "100px";
  
      // Set width for input container
      inputContainer.style.width = "350px";
  
      // Set width and height for input fields
      taskNameInput.style.width = "200px";
      taskNameInput.style.height = "50px";
      taskDescInput.style.width = "200px";
      taskDescInput.style.height = "50px";
      taskNameInput.style.marginTop="10px"
  
      // Set margin or padding to reduce the gap between input fields and buttons
      deleteBtn.style.marginRight = "5px";
      editBtn.style.marginRight = "5px";
      saveBtn.style.marginRight = "5px";
  
      itemDiv.classList.add("item");
  
      inputContainer.appendChild(taskNameInput);
      inputContainer.appendChild(taskDescInput);
  
      li.appendChild(inputContainer);
      itemDiv.appendChild(li);
      itemDiv.appendChild(editBtn);
      itemDiv.appendChild(deleteBtn);
      itemDiv.appendChild(saveBtn); // Append save button to itemDiv
      listContainer.appendChild(itemDiv);
  
      deleteBtn.addEventListener("click", () => {
        taskArray.splice(index, 1);
        displayTodo();
      });
  
      editBtn.addEventListener("click", () => {
        taskNameInput.removeAttribute("readonly");
        taskDescInput.removeAttribute("readonly");
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
      });
  
      saveBtn.addEventListener("click", () => {
        task.nameOfTask = taskNameInput.value;
        task.taskDescription = taskDescInput.value;
        taskNameInput.setAttribute("readonly", true);
        taskDescInput.setAttribute("readonly", true);
        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";
        displayTodo();
      });
    });
  };
  
  
  

  button.addEventListener("click", addTodo);

  displayTodo();
});
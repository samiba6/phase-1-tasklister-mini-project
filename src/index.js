document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const tasksList = document.getElementById("tasks")


  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form)
    const taskDescription = formData.get("new-task-description").trim();
 

    if (taskDescription !== "") {
      const newTaskItem = document.createElement("li")
      



      




      const deleteButton = document.createElement("button")
      deleteButton.textContent = "🗑"
      deleteButton.classList.add("delete-button");

    

      deleteButton.addEventListener("click", () => {
        tasksList.removeChild(newTaskItem)
      });
      newTaskItem.innerHTML = `<span id="desc">- Description: ${taskDescription}  `

      //
    




      newTaskItem.appendChild(deleteButton)
      
      tasksList.appendChild(newTaskItem)

      form.reset()
    }
  });

  });

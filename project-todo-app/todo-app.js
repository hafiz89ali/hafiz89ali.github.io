const taskForm = document.querySelector("#taskForm");
const tasksList = document.querySelector("#taskList");

taskForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  // By default, the form will refresh the page

  event.preventDefault();

  //
  //   console.log(event.target);
  // event.trigger is Node List of array of all form elements
  //   console.dir(event.target[0].value);
  //   console.dir(event.target[1].value);

  const task = event.target[0].value;
  console.log(task);

  // add new list inside the ol

  // 1. create a new list element
  const newList = document.createElement("li");

  // 2. change the inner text of the newly created element
  newList.innerText = task;

  // 3. append the newly created element to the ol
  tasksList.appendChild(newList);

  // 4. clear the input or reset form
  // event.target.reset();
  taskForm.reset();
});

// Todo App - Assessment
// 1. Add a delete button to each task
// 2. When delete button is clicked, the task should be removed from the list
// 3. Add a checkbox to each task
// 4. When checkbox is clicked, the the text should have line through
// 5. When the checkbox is unchecked, the the line through should be removed

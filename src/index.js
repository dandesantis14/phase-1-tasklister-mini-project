document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //pulls input form
  const inputForm = document.getElementById("create-task-form");
  //pulls task list
  const taskList = document.getElementById("tasks");

  //function that creates and appends element
  const taskAdder = (taskInput) => {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskInput;

    const deleteBttn = document.createElement('button');
    deleteBttn.textContent = "x";
    
    taskItem.append(deleteBttn);
    taskList.append(taskItem);
    deleteBttn.addEventListener('click',()=> taskItem.remove());
    // debugger
  }
  

  inputForm.addEventListener('submit',(e)=>{
    //pull inputted text on submit.
    const newTask = document.getElementById("new-task-description").value;
    //add value to list.
    taskAdder(newTask);
    inputForm.reset();

    e.preventDefault();
  })

});

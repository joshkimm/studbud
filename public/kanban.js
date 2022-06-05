

var newColumn = document.createElement("div");


//Reference: Sam's codepen.io https://codepen.io/sammyHall/pen/KKQqpYR which helped mainly for adding new columns to the board
document.getElementById("col-button").addEventListener("click", addColumn); 

// This function adds a new div to the kanban board and appends the contenteditable heading to it. 
// It is also given a class of k-container for CSS ,
function addColumn() {
  console.log("button clicked");
  var newColumn = document.createElement("div");
  newColumn.setAttribute('class', 'k-container');
  var newHeading = document.createElement("h3");
  newHeading.setAttribute('contenteditable', 'true');
  var headingText = document.createTextNode("New Column");
  var kBoard = document.getElementById("k-board");
  
  //Appends the text content to the <h3> element
  newHeading.appendChild(headingText);
  //Appends the heading to the new column
  newColumn.appendChild(newHeading);
  //Apends the new column to the kanban board
  kBoard.appendChild(newColumn);
  
  //Access HTML elements using DOM methods
  const taskEl = document.querySelectorAll(".draggable");
  const emptyCon = document.querySelectorAll(".k-container");
//REF: https://www.youtube.com/watch?v=jfYWwQrtzzY&t=481s&ab_channel=WebDevSimplified
  taskEl.forEach(task => {
    //Drag start - when the user picks up the item
  task.addEventListener('dragstart', () => {
    console.log('dragging');
    //ADDS CSS CLASS
    task.classList.add('dragging');
  });

  //Drag end - when the user lets go of the item
  task.addEventListener('dragend', () => {
    //REMOVES CSS CLASS
    task.classList.remove('dragging');
  })

  
});
    //For each container/column, when an item is dragged over, it will then be appended to the column.
  emptyCon.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault();
      console.log(container);
      const task = document.querySelector('.dragging');
      container.appendChild(task);
    })
    
  })

  //Adding a task to the kanban board
  let addKanbanTask = document.getElementById("create-k-task");

  //Event listener for the 'Add Task' button 
  addKanbanTask.addEventListener("click", function() {
    let accessCol = document.querySelector(".k-container");
    //Access the text value of the task so that it will render on the page when we append it later.
    let taskName = document.getElementById("inputkanbantext").value;
    let newItem = document.createElement("p");
    //Sets attributes for further CSS editing
    newItem.setAttribute("class", "draggable");
    newItem.setAttribute("draggable", "true");

  //Drag start - when the user picks up the item
  newItem.addEventListener('dragstart', () => {
    console.log('dragging');
    //ADDS CSS CLASS
    newItem.classList.add('dragging');
  });

  //Drag end - when the user lets go of the item
  newItem.addEventListener('dragend', () => {
    //REMOVES CSS CLASS
    newItem.classList.remove('dragging');
  });

    //Name of the item will be the taskName that the user had inputted earlier
    newItem.innerText = taskName;
    //Task is then appended to the first column 
    accessCol.appendChild(newItem);
  })

  
  }; 


  
  
  
  
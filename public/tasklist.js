//This code was readapted/taught from Drew's tutorial on the tasklist

//Access the submit button from the tasklist form in HTML using DOM
let createTaskButton = document.getElementById("submitform");


// Render the items onto the page once the window loads
renderItems();

// Event listener for creating the new task using the 'Confirm' button
createTaskButton.addEventListener("click", function() {

  // Access DOM elements and the value of each one
  let itemName = document.getElementById("textinput").value;
  let dueDate = document.getElementById("inputduedate").value;
  let completionDate = document.getElementById("inputtime").value;
  let estimatedTime = document.getElementById("inputcomplete").value;
  let priority = document.getElementById("priorityInput").value;

  //If the user does not input the item name, an error should pop up 
  if(itemName == "") { document.getElementById("textinput").classList.add("error");
    return;
  }

  //Object to contain the local storage data that the user inputs through the tasklist form 
  let itemObj = {
    'itemName': itemName,
    'dueDate': dueDate,
    'completionDate': completionDate,
    'estimatedTime': estimatedTime,
    'priority': priority
  };

  // Get the item list from local storage 
  let existingItems = getItems();

  // Pushes the object representing each task to the local storage.
  existingItems.push(itemObj);

  // Stringify as local storage can only store strings 
  existingItems = JSON.stringify(existingItems);
  localStorage.setItem('items', existingItems);

  // Render the items again
  renderItems();
});



// This function gets items from local storage, which the existingItems can access
function getItems() {
  // Declares the var items to the tasks that the user has put into local storage 
  let items = localStorage.getItem('items');

  // If statement that checks if items have been put into localStorage. If not, return an empty array.
  if (items == null) {
    return [];
  }
  // Either way, we convert the tasks from a string back to the object 
  items = JSON.parse(items);
  return items;
}

// Render the tasks using DOM
function renderItems() {
  // This gets our items from local storage which we can then display on the page
  let items = getItems();

  // Accesses the <ul> element within the tasklist
  let itemUl = document.querySelector('#tasklist ul');

  // Clear the contents of the UL to rebuild it fresh.
  itemUl.innerHTML = ""; 


  //For each task, create an <li> element containing the priority, task name, due date, completion date and estimated minutes needed to complete
  items.forEach(function(item) {

    // Create a li DOM element to hold each item
    let itemLi = document.createElement('li');
    itemLi.setAttribute("class", "single-task")

   
    // Create a span element to hold all the elements of the task
    let itemName = document.createElement('span');
    itemName.setAttribute('class', 'itemname'); 
    //Renders the task name as what the user inputted in the form
    itemName.innerText = item.itemName;
    
    //Renders the due date
    let dueDate = document.createElement('span');
    dueDate.setAttribute('class', 'inputduedate');
    dueDate.textContent =  'Due Date' + ':' + " " + item.dueDate;

    //Renders the priority rating
    let priority = document.createElement('span');
    priority.setAttribute('class', 'priorityInput');
    priority.textContent = 'Priority' + ":" + " " + item.priority;

    //Renders the completion date
    let completionDate = document.createElement('span');
    completionDate.setAttribute('class', 'inputtime');
    completionDate.textContent = 'Completion Date' + ":" + " " + item.completionDate;

    //Renders the estimated time for completion
    let estimatedTime = document.createElement('span');
    estimatedTime.setAttribute('class', 'inputcomplete');
    estimatedTime.textContent = 'Estimated minutes to complete:' + " " + item.estimatedTime;
    

    // Creates the remove button for each task that is rendered
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'X';

    // Add an event handler to the remove button which removes the item from the display and also local storage, so once the page refreshes, it will disappear
    itemRemove.addEventListener("click", function() {
      //Removes from the display
      itemLi.remove();

      //Removes from the local storage
      removeItem(item.itemName);
    });

    // Add/render all the elements of the form into the <li> element
    itemLi.appendChild(itemName);
    itemName.appendChild(document.createElement("br"));
    itemLi.appendChild(dueDate);
    dueDate.appendChild(document.createElement("br"));
    itemLi.appendChild(priority);
    priority.appendChild(document.createElement("br"));
    itemLi.appendChild(completionDate);
    completionDate.appendChild(document.createElement("br"));
    itemLi.appendChild(estimatedTime);
    estimatedTime.appendChild(document.createElement("br"));
    itemLi.appendChild(itemRemove);

    // Append the li to the ul
    itemUl.appendChild(itemLi);
  });
}

// Removes a specific item, by name from local storage.
function removeItem(itemName) {
  // Grabs items from local storage again so that the function can delete them
  let items = getItems();

  //Finds the index of the task that is going to be removed, which is then returned to the function
  let itemIndex = items.findIndex(function(item) {
  
    return item.itemName == itemName;
  });

  // Splice method removes an item out of the array, erasing only one item at a time because the user will only delete one task at a specific time
  items.splice(itemIndex, 1);

  // Re-declare the items back to local storage after the chosen item has been deleted.
  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}


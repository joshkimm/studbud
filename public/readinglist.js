//Event listener for the create group button
document.getElementById("confirm-group").addEventListener("click", addRow); 

//Code inspired by Sam's code for the kanban board: https://codepen.io/sammyHall/pen/KKQqpYR mainly for creating rows
//Function that generates a new row/group which holds the reference title and URL fields for the user to input
function addRow() {

  //Div is created which represents the new row
  var newRow = document.createElement("div");
  //setAttribute to access in CSS
  newRow.setAttribute("class", "example-group")
  //Create the input field for the URL
  var refURLInput = document.createElement("input");
  refURLInput.setAttribute("id", "ref-url");
  refURLInput.setAttribute("class", "refurlfield");
  refURLInput.setAttribute("type", "url");
  refURLInput.setAttribute("placeholder", "Enter reference URL");

  //Create the input field for the reference name
  var refNameInput = document.createElement("input");
  refNameInput.setAttribute("id", "ref-name");
  refNameInput.setAttribute("class", "refnamefield")
  refNameInput.setAttribute("type", "text");
  refNameInput.setAttribute("placeholder", "Enter reference name");

  //Create a button that will confirm the reference details and render it into a new box
  var confirmRef = document.createElement("button")
  confirmRef.setAttribute("id", "confirm-ref");
  confirmRef.setAttribute("class", "confirmref");
  confirmRef.textContent = 'Confirm';

  //Creates a heading for the new group/row
  var newHeading = document.createElement("h3");
  //Allows for the user to edit the heading by just clicking the text
  newHeading.setAttribute('contenteditable', 'true');
  var headingText = document.createTextNode("New Group (click me to edit)");
  var rList = document.querySelector(".r-list");
  //Appends all the heading, buttons and inputs into the group/row
  newHeading.appendChild(headingText);
  newRow.appendChild(newHeading);
  rList.appendChild(newRow);
  newRow.appendChild(refNameInput);
  newRow.appendChild(refURLInput);
  newRow.appendChild(confirmRef);

  
//Event listener for everytime the user inputs their reference and clicks confirm
  confirmRef.addEventListener("click", function() {
    
    
    let nameValue = refNameInput.value;
    let urlValue = refURLInput.value;
    var newRef = document.createElement("div");
    newRef.setAttribute("class", "refadded")
    var refHeading = document.createElement("h4");
    var refURL = document.createElement("p");
    refURL.setAttribute("class", "urladded")
    //Makes the reference name and URL render as what the user inputted
    refHeading.innerHTML = nameValue;
    refURL.innerHTML = urlValue;

    
    
   //Creates the remove button for the reference
    let removeRef = document.createElement("button");
    removeRef.setAttribute("class", "delete");
    removeRef.textContent = 'Remove';

    removeRef.addEventListener("click", function (){
        newRef.remove();
  }); 

  //Appends the heading, remove button and URL to the row, and appends the reference to the group
  newRef.appendChild(refHeading);
    refHeading.appendChild(refURL);
    newRow.appendChild(newRef);
    newRef.appendChild(removeRef);
});
}

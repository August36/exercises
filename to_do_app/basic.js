let tricks = [];

let trickList = document.getElementById("trickList");
let trickListDone = document.getElementById("trickListDone");
let addTask = document.getElementById("addTask");
let addTaskButton = document.getElementById("addTaskButton");

let trickListDoneArray = Array.from(trickListDone.querySelectorAll("li"));

// Function to add a new trick to the trickList
function addTrick() {
    let trickName = addTask.value.trim(); // Get the value from the input field
    if (trickName !== "") { // Check if the input is not empty
        // Create a new list item for the trickList
        let listItem = document.createElement("li");
        listItem.textContent = trickName;
        trickList.appendChild(listItem);

        // Clear the input field
        addTask.value = "";
    }
}

// Add event listener to the addTaskButton
addTaskButton.addEventListener("click", addTrick);

// Move trick from trickList to trickListDone
trickList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const clickedTrick = event.target.textContent;
        event.target.remove(); // Remove the clicked list item from trickList

        // Create a new list item for the trickListDone directly from the clicked trick
        const newListItem = document.createElement("li");
        newListItem.textContent = clickedTrick;

        // Append the new list item to trickListDone
        trickListDone.appendChild(newListItem);

        // Update the trickListDoneArray
        trickListDoneArray = Array.from(trickListDone.querySelectorAll("li"));
    }
});

let tricks = [];

let trickList = document.getElementById("trickList");
let trickListDone = document.getElementById("trickListDone");
let addTask = document.getElementById("addTask");
let addTaskButton = document.getElementById("addTaskButton");
let listSelection = document.getElementById("listSelection");

let trickListDoneArray = Array.from(trickListDone.querySelectorAll("li"));

// Function to add a new trick to the trickList
function addTrick() {
    let trickName = addTask.value.trim(); // Get the value from the input field
    if (trickName !== "") { // Check if the input is not empty
        // Create a new list item for the trickList
        let listItem = document.createElement("li");
        listItem.textContent = trickName;

        // show count span
        let countSpan = document.createElement("span");
        countSpan.textContent="1";
        countSpan.classList.add("countSpan")

        // +1 button
        let addBtn = document.createElement("button");
        addBtn.textContent ="+";
        addBtn.classList.add("addBtn")
        addBtn.addEventListener("click", increaseAmount);

        // -1 button
        let subtractBtn = document.createElement("button");
        subtractBtn.classList.add("subtractBtn")
        subtractBtn.textContent ="-";
        subtractBtn.addEventListener("click", decreaseAmount);


        // Append buttons and span to list item
        listItem.appendChild(countSpan);
        listItem.appendChild(addBtn);
        listItem.appendChild(subtractBtn);

        trickList.appendChild(listItem);

        // Clear the input field
        addTask.value = "";
    }
}

function increaseAmount(event) {
    let listItem = event.target.parentNode;
    let countSpan = listItem.querySelector("span");
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
}
function decreaseAmount(event) {
    let listItem = event.target.parentNode;
    let countSpan = listItem.querySelector("span");
    let count = parseInt(countSpan.textContent);
    count--;
    countSpan.textContent = count;
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

// Move tricks from trickListDone back to trickList
trickListDone.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const clickedTrick = event.target.textContent;
        event.target.remove(); // Remove the clicked list item from trickListDone

        // Create a new list item for the trickList directly from the clicked trick
        const newListItem = document.createElement("li");
        newListItem.textContent = clickedTrick;

        // Append the new list item to trickList
        trickList.appendChild(newListItem);

        // Update the trickListDoneArray
        trickListDoneArray = Array.from(trickListDone.querySelectorAll("li"));
    }
});

// Event listener to switch between lists
listSelection.addEventListener("change", (event) => {
    const selectedListId = event.target.value;
    if (selectedListId === "trickList") {
        trickList.style.display = "block";
        trickListDone.style.display = "none";
        document.querySelector(".trickListContainer").style.display = "block";
        document.querySelector(".trickListDoneContainer").style.display = "none";
        trickList.style.textAlign = "center"; // Ensure text alignment remains centered
    } else if (selectedListId === "trickListDone") {
        trickList.style.display = "none";
        trickListDone.style.display = "block";
        document.querySelector(".trickListContainer").style.display = "none";
        document.querySelector(".trickListDoneContainer").style.display = "block";
        trickListDone.style.textAlign = "center"; // Ensure text alignment remains centered
    }
});

// Initially hide the "Tricks Done" list and its surrounding section
trickListDone.style.display = "none";
document.querySelector(".trickListDoneContainer").style.display = "none";
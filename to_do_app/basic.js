let tricks = ["ollie", "fs 180", "bs 180", "shuvit", "fs shuvit", "kickflip", "heelflip"];

let trickList = document.getElementById("trickList");
let trickListDone = document.getElementById("trickListDone");

let trickListDoneArray = Array.from(trickListDone.querySelectorAll("li"));

tricks.forEach(trick => {
    let listItem = document.createElement("li");
    listItem.textContent = trick;
    trickList.appendChild(listItem);

    listItem.addEventListener("click", () => {
        const clickedTrick = listItem.textContent;
        const index = tricks.indexOf(clickedTrick);

        if (index !== -1) {
            const removedTrick = tricks.splice(index, 1)[0];
            listItem.remove(); // Remove the clicked list item from trickList

            // Create a new list item for the trickListDone
            const newListItem = document.createElement("li");
            newListItem.textContent = removedTrick;

            // Append the new list item to trickListDone
            trickListDone.appendChild(newListItem);
        }
    });
});


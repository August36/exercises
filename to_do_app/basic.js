let tricks = ["ollie", "fs 180", "bs 180", "shuvit", "fs shuvit", "kickflip", "heelflip"];

let trickList = document.getElementById("trickList");

tricks.forEach(trick => {
    let listItem = document.createElement("li");
    listItem.textContent = trick;
    trickList.appendChild(listItem);
});


// ********* Filter ************

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// I den overstående kode bruges "filter" til at filtrere ord i arrayet der er 6 eller flere bogstaver langt.

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnFilterEVTlistener);
});

function btnFilterEVTlistener(evt) {
  console.log(evt.currentTarget.dataset.filter);
}

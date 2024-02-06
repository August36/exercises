const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}

// *** ELECTRIC ***

function showElectricVehicles(arr) { 
  ulPointer.innerHTML = "";  //clear existing content
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  })
};

let electricBtn = document.getElementById("electric");

electricBtn.addEventListener("click", function() {
  let electricVehicles = vehicles.filter(function(vehicle) {
    return vehicle.isElectric === true;
  });
  showElectricVehicles(electricVehicles);
});

// *** More than two seats ***

let moreThan2SeatsBtn = document.getElementById("moreThan2Seats");

moreThan2SeatsBtn.addEventListener("click", function() {
  let moreThan2SeatsVehicles = vehicles.filter(function(vehicle) {
    return vehicle.passengers > 2;
  });
  showMoreThan2SeatsVehicle(moreThan2SeatsVehicles);
});

function showMoreThan2SeatsVehicle(arr) { 
  ulPointer.innerHTML = "";  // Clear existing content
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem || 'N/A'}</li>`;
  });
}

// *** More than two seats and owned by Jonas ***

let electricJonasBtn = document.getElementById("electricJonasBtn");

electricJonasBtn.addEventListener("click", function() {
  let electricJonasVehicles = vehicles.filter(function(vehicle) {
    return vehicle.isElectric === true && vehicle.ownedBy === "Jonas";
  });
  showElectricJonasVehicles(electricJonasVehicles)
});

function showElectricJonasVehicles(arr) { 
  ulPointer.innerHTML = "";  // Clear existing content
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem || 'N/A'}</li>`;
  });
};

// *** ryeBread + seats for more than one ***

let ryeBreadBtn = document.getElementById("ryeBreadBtn");

ryeBreadBtn.addEventListener("click", function() {
  let ryeBreadVehicles = vehicles.filter(function(vehicle) {
    return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
  });
  showRyeBreadVehicles(ryeBreadVehicles)
});

function showRyeBreadVehicles(arr) { 
  ulPointer.innerHTML = "";  // Clear existing content
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric || 'N/A'}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem || 'N/A'}</li>`;
  });
};



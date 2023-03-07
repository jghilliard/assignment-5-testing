// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let mission = document.getElementById("missionTarget");
  mission.innerHTML = 
  `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    let testNumber  = Number(testInput); 
   if (testNumber === ""){
    return "Empty";
   }
   if (typeof testNumber === "number"){
    return "Is a Number";
   } else {return "Not a Number";}
}


// From the HTML for reference:
// <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
// <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
// <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
// <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>

/* <div id="launchForm">
            <form data-testid="testForm">
                <div class="formField">
                    <label>Pilot Name <input type="text" name="pilotName" id="pilotName"/></label>
                </div>
                <div class="formField">
                    <label>Co-pilot Name <input type="text" name="copilotName"/></label>
                </div>
                <div class="formField">
                    <label>Fuel Level (L) <input type="text" name="fuelLevel"/></label> 
                </div>
                <div class="formField">
                    <label>Cargo Mass (kg) <input type="text" name="cargoMass"/></label>
                </div> */


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //refrences to elements in the 'faulty list'
   let pilotReady = document.getElementById("pilotStatus");
   let copilotReady = document.getElementById("copilotStatus");
   let fuelReady = document.getElementById("fuelStatus");
   let cargoReady = document.getElementById("cargoStatus");

   //validate user inputs

   if (validateInput(pilot) === "Empty" || 
       validateInput(copilot) === "Empty" ||
       validateInput(fuelLevel) === "Empty" ||
       validateInput(cargoLevel) === "Empty"){
        alert("Please enter a value for all fields");
       } else if (validateInput(pilot) === "Is a Number" ||
                  validateInput(copilot) === "Is a Number" ||
                  validateInput(fuelLevel) === "Not a Number" ||
                  validateInput(cargoLevel) === "Not a Number"){
               alert("Please use only letters for names and only numbers for Fuel Level and Cargo Mass.")
                  }
        else {
            //>= 10,000L <= 10,000kg
            let Sstatus = document.getElementById("launchStatus");
            list.style.visibility = "visible";
            pilotReady.innerHTML = `Pilot: ${pilot} `;
            copilotReady.innerHTML = `Co-pilot: ${copilot}`;
            }
    if (fuelLevel >= 10000 && cargoLevel <=10000 ){
        fuelReady.innerHTML = "Fuel at proper level for launch.";
        cargoReady.innerHTML = "Cargo Level good for launch.";
        Sstatus.innerHTML = "Shuttle is ready for launch.";
        sStatus.style.color = "green";
    } else if (fuelLevel < 10000 && cargoLevel <=10000){
        fuelReady.innerHTML = "Not enough fuel for launch.";
        cargoReady.innerHTML = "Cargo Level good for launch.";
        Sstatus.innerHTML = "Shuttle is not ready for launch.";
        Sstatus.style.color = "red";
    } else if (fuelLevel >=10000 && cargoLevel >10000){
        fuelReady.innerHTML = "Fuel at proper level for launch.";
        cargoReady.innerHTML = "Too much cargo mass for launch.";
        Sstatus.innerHTML = "Shuttle is not ready for launch.";
        Sstatus.style.color = "red";
    } else if (fuelLevel < 10000 && cargoLevel >10000){
        fuelReady.innerHTML = "Not enough fuel for launch.";
        cargoReady.innerHTML = "Too much cargo mass for launch.";
        Sstatus.innerHTML = "Shuttle is not ready for launch.";
        Sstatus.style.color = "red";
    }

       
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json;
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let choice = Math.random() * 10;
    choice = Math.floor(choice);
    while (choice > plants.length){
        trial = Math.random() * 10;
        choice = Math.floor(choice);
    }
    return plantets[choice];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

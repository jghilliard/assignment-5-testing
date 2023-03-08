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
    let testNumber = Number(testInput); 
   if (testInput === ""){
    return "Empty";
   }
   if (isNaN(testNumber)){
    return "Not a Number";
   } else {return "Is a Number";}
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
       validateInput(cargoLevel) === "Empty")
       {
        alert("Please enter a value for all fields");
       } 
       else if (validateInput(pilot) === "Is a Number" ||
                  validateInput(copilot) === "Is a Number" ||
                  validateInput(fuelLevel) === "Not a Number" ||
                  validateInput(cargoLevel) === "Not a Number")
                  {
               alert("Please use only letters for names and only numbers for Fuel Level and Cargo Mass.")
                  }
        else {
            //>= 10,000L <= 10,000kg
            let flightStatus = document.getElementById("launchStatus");
            list.style.visibility = "visible";
            pilotReady.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotReady.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            
    if (fuelLevel >= 10000 && cargoLevel <=10000 ){
        fuelReady.innerHTML = "Fuel level high enough for launch";
        cargoReady.innerHTML = "Cargo mass low enough for launch";
        flightStatus.innerHTML = "Shuttle is ready for launch";
        flightStatus.style.color = "rgb(65, 159, 106)";
    } else if (fuelLevel < 10000 && cargoLevel <=10000){
        fuelReady.innerHTML = "Fuel level too low for launch";
        cargoReady.innerHTML = "Cargo mass low enough for launch";
        flightStatus.innerHTML = "Shuttle Not Ready for Launch";
        flightStatus.style.color = "rgb(199, 37, 78)";
    } else if (fuelLevel >=10000 && cargoLevel >10000){
        fuelReady.innerHTML = "Fuel level high enough for launch";
        cargoReady.innerHTML = "Cargo mass low enough for launch";
        flightStatus.innerHTML = "Shuttle Not Ready for Launch";
        flightStatus.style.color = "rgb(199, 37, 78)";
    } else if (fuelLevel < 10000 && cargoLevel >10000){
        fuelReady.innerHTML = "Fuel level too low for launch";
        cargoReady.innerHTML = "Too much cargo mass for launch";
        flightStatus.innerHTML = "Shuttle Not Ready for Launch";
        flightStatus.style.color = "rgb(199, 37, 78)";
    }
}

       
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let choice = Math.random() * 10;
    choice = Math.floor(choice);
    while (choice > planets.length){
        trial = Math.random() * 10;
        choice = Math.floor(choice);
    }
    return planets[choice];
}

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     let div = document.getElementById("missionTarget");
//     div.innerHTML = `
//                  <h2>Mission Destination</h2>
//                  <ol>
//                      <li>Name: ${name}</li>
//                      <li>Diameter: ${diameter}</li>
//                      <li>Star: ${star}</li>
//                      <li>Distance from Earth: ${distance}</li>
//                      <li>Number of Moons: ${moons}</li>
//                  </ol>
//                  <img src="${imageUrl}">
//                  `;
//  }
 
//  function validateInput(testInput) {
//     let numberInput = Number(testInput);
//     if (testInput === "")
//     {
//         return "Empty";
//     }
//     else if (isNaN(numberInput))
//     {
//         return "Not a Number";
//     }
//     else if (isNaN(numberInput) === false)
//     {
//         return "Is a Number";
//     }
//  }
 
//  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let fuel = document.getElementById("fuelStatus");
//     let cargo = document.getElementById("cargoStatus");
//     let pilotStatus = document.getElementById("pilotStatus");
//     let copilotStatus = document.getElementById("copilotStatus");
 
//     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
//         alert("All fields are required!");
//     } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
//         alert("Make sure to enter valid information for each field!");
//     } else {
//         list.style.visibility = "visible";
//         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//         let launchStatus = document.getElementById("launchStatus");
//         if (fuelLevel < 10000 && cargoLevel <= 10000) {
//             fuel.innerHTML = "Fuel level too low for launch";
//             cargo.innerHTML = "Cargo mass low enough for launch"
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
//             fuel.innerHTML = "Fuel level high enough for launch"
//             cargo.innerHTML = "Cargo mass too heavy for launch";
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else if (fuelLevel < 10000 && cargoLevel > 10000) {
//             fuel.innerHTML = "Fuel level too low for launch";
//             cargo.innerHTML = "Cargo mass too heavy for launch";
//             launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//             launchStatus.style.color = "#C7254E";
//         } else {
//             fuel.innerHTML = "Fuel level high enough for launch"
//             cargo.innerHTML = "Cargo mass low enough for launch"
//             launchStatus.innerHTML = "Shuttle is Ready for Launch";
//             launchStatus.style.color = "#419F6A";
//         }
//     }
//  }
 
//  async function myFetch() {
//      let planetsReturned;
 
//      planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//              if (response.status >= 400) {
//                  throw new Error ("Bad response");
//              }
//              else {
//                  return response.json();
//              }
//          });
 
//      return planetsReturned;
//  }
 
//  function pickPlanet(planets) {
//      let index = Math.floor(Math.random()*planets.length);
//      return planets[index];
//  }
 

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

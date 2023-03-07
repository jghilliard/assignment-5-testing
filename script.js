// Write your JavaScript code here!

document.addEventListener("DOMContentLoaded", function() {
    
   let form = document.getElementById("launchForm");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })


   form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.addEventListener("submit", function(event) {
            let usernameInput = document.querySelector("input[name=username]");
            let teamName = document.querySelector("input[name=team]");
            if (usernameInput.value === "" || teamName.value === "") {
               alert("All fields are required!");
               // stop the form submission
               event.preventDefault();
            }
        
    });

    let button = document.getElementsById("formSubmit"){

    }
   

});  
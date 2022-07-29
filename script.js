// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){      
       
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName"); 
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      
       let pilotNumCheck = Number(pilotName.value);
       let coPilotNumCheck = Number(copilotName.value);
       let fuelLevelCheck = Number(fuelLevel.value);
       let cargoMassCheck = Number(cargoMass.value);
       
       
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("All fields must be filled out"); 
           } else if (isNaN(pilotNumCheck) === false || isNaN(coPilotNumCheck) === false || isNaN(fuelLevelCheck) === true || isNaN(cargoMassCheck)===true) {
               alert("All fields must be correct data type")
   
           } else { 
             
            alert("Inputs are correct confirmation")

           }
            event.preventDefault();
              
       });   
   });
  

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
   fetch("https://handlers.education.launchcode.org/static/planets.json").then((data) => {
     data.json().then(function(json) {
     

  
    // ***** const destination = document.("destination"); <= this element id is wrong
       const destination = document.getElementById("missionTarget")
       let index = Math.floor(Math.random() * json.length); // Math.random to choose random number (w3Schools can help)

          destination.innerHTML = 
             `<ol>
                 <li>Name: ${json[index].name}</li>
                 <li>Diameter: ${json[index].diameter}</li>
                 <li>Star: ${json[index].star}</li>
                 <li>Distance from Earth: ${json[index].distance}</li>
                 <li>Number of Moons: ${json[index].moons}</li>
             </ol>
            <img src="${json[index].image}"></img>`;
               
            });
       });

 



    let form = document.querySelector("form");
    
   form.addEventListener("submit", function(event){    

      event.preventDefault();

      let pilotName = document.getElementById("pilot").value;
      let copilotName = document.getElementById("copilot").value;
      let fuelLevel = document.getElementById("fuel").value;  
      let cargoMass = document.getElementById("cargo").value;
      
       let pilotNumCheck = Number(pilotName);
       let coPilotNumCheck = Number(copilotName);
       let fuelLevelCheck = Number(fuelLevel);
       let cargoMassCheck = Number(cargoMass);
       
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus"); 

       let launchStatus = document.getElementById("launchStatus");
       
       
       if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {

               alert("All fields must be filled out"); 

           } else if (isNaN(pilotNumCheck) === false || isNaN(coPilotNumCheck) === false || isNaN(fuelLevelCheck) === true || isNaN(cargoMassCheck)===true) {
               
               alert("All fields must be correct data type")
   
           } else { 

            document.getElementById("itemStatus").style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotName} is ready for launch.`;
            fuelStatus.innerHTML = `Fuel level is enough for launch.`;
            cargoStatus.innerHTML = `Cargo mass is low enough for launch.`;
            
            if (fuelLevel < 10000 && cargoMass > 10000) {
               cargoStatus.innerHTML = `Cargo mass exceeds the maximum allowable weight.`;
               fuelStatus.innerHTML = `Fuel level is not enough for launch.`;
               launchStatus.innerHTML = `Shuttle NOT ready for launch!`;
               launchStatus.style.color = "red"; 

           } else if (cargoMass > 10000) {
               cargoStatus.innerHTML = `Cargo mass exceeds the maximum allowable weight.`;
               launchStatus.innerHTML = `"Shuttle NOT ready for launch!"`;
               launchStatus.style.color = "red";

           } else if (fuelLevel < 10000) {
               fuelStatus.innerHTML = `Fuel level is not enough for launch.`;
               launchStatus.innerHTML = `Shuttle NOT ready for launch!`;
               launchStatus.style.color = "red"; 

           } else {
               cargoStatus.innerHTML = `Cargo does not exceed the maximum allowable weight.`;
               fuelStatus.innerHTML = `Fuel level is enough for launch.`;
               launchStatus.innerHTML = `Shuttle ready for launch!`;
               launchStatus.style.color = "green"; 

           }

            } 
          

     

      // let button = document.getElementById("submitButton");
      // button.addEventListener("click", function() {  
      // });
       });   

    });   

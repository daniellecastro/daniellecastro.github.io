'use strict';

// Weather Site JavaScript Functions
// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    // Variables for Wind Chill function
    let temp = 51;
    let speed = 4.8;
    buildWC(speed,temp);
    // The Time Indictor function
    let hour = "5";
    timeBall(hour);
    // Implement background weather image
    let condition = "rain";
    condition.toLowerCase();
    changeSummaryImage(condition);
})

// Displays last modified date
document.getElementById('date').textContent = document.lastModified;

// Wind chill function
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    // Display the windchill
    console.log(wc);
    // wc = 'Feels like ' + wc + '&deg;F';
    feelTemp.innerHTML = wc;
}

// Time Indicator Function
function timeBall(hour){
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }
    
    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".n"+ hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}

// display background image
function changeSummaryImage(condition){
    let container = document.querySelector("#curWeather")
    console.log(condition);
    container.classList.add(condition)
}
  

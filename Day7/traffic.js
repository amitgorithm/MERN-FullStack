let lights = document.querySelectorAll('.circle');
console.log(lights);
console.log(lights[1]);

let currentLight = 0;
// turn off all the lights
lights.forEach(light => light.style.opacity = 0);

// Turn on 1st Light
lights[currentLight].style.opacity = 1;


setInterval(() => {
        // turn off current light
        lights[currentLight].style.opacity=0;

        //move to next light
        currentLight++
        if(currentLight > 2){
          currentLight = 0;
        }
       
       // turn on lights 
       lights[currentLight].style.opacity = 1;


},3000)

set
      




// Other method using functions : 

// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow')
// let green = document.getElementById('green');

/*
// red.style.display = 'none';

// setTimeout(()=>{
//   red.style.visibility = 'hidden';
// },5000)

// setTimeout(()=>{
//   yellow.style.visibility = 'hidden';
// },5000)

// setTimeout(()=>{
//   green.style.visibility = 'hidden';
// },5000)


// trying different approach using functions:

function resetLights() {
  red.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "grey";
  green.style.backgroundColor = "grey";
}

// }

function trafficCycle() {
  // RED
  resetLights();
  red.style.backgroundColor = "red";

  // After 3s → YELLOW
  setTimeout(() => {
    resetLights();
    yellow.style.backgroundColor = "yellow";
  }, 3000);

  // After 5s → GREEN
  setTimeout(() => {
    resetLights();
    green.style.backgroundColor = "green";
  }, 5000);

  // After 8s → YELLOW
  setTimeout(() => {
    resetLights();
    yellow.style.backgroundColor = "yellow";
  }, 8000);

  // After 10s → RED again
  setTimeout(() => {
    resetLights();
    red.style.backgroundColor = "red";
  }, 10000);
}

// Initial call
trafficCycle();

// Repeat the cycle every 12 seconds (total duration of the cycle)
setInterval(trafficCycle, 12000);



// yellow.style.display = 'none';


// green.style.display = 'none'; */
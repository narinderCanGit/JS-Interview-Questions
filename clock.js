// Format it in the form of system clock format.
// Toggle it between 12Hr(AM-PM)/24Hr format.
// Also Add features like
// -Taking snapshots history of the selected time,
// -Showing those snapshots timings and
// -Clearing them whenever required.
let is24Format = true;
const timer = document.getElementById('timer');
const toggleBtn = document.getElementById('toggleBtn');
const list = document.getElementById('list');

toggleBtn.addEventListener('click', ()=>{
  is24Format = !is24Format;
  calculateTime();
});

setInterval(
    calculateTime
, 1000);

function calculateTime(){
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let postfix = !is24Format ? hours>12 ? ' PM' : ' AM' : '';
hours = is24Format ? hours : hours%12;
const suffix = is24Format ? '' : postfix;
let timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + suffix;
timer.textContent = timeString;
}

// `${hours}:${mins} ${postfix}` 
console.log(timeString);

function pad(value){
  return value<10 ? '0'+value : value;
}



calculateTime();


// Debounce
const inputElement = document.getElementById('debounce');
function getData(e) {
  console.log("Debounce Data " + e.target.value);
}

function myDebounce(cb, d) {
  let timer;
  return function (e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => cb(e), d);
  };
}

const betterFunction = myDebounce(getData, 1000);
inputElement.addEventListener('keyup', betterFunction);


// Throttling
const throttleElement = document.getElementById('throttle');
 function diaplayT(event) {
      console.log("Throttle Data:", event.target.value);
    }
    
function myThrottle(fn, delay) {
      let lastTime = 0;
      return function(event) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
          lastTime = now;
          fn(event);
        }
      }
    }

const throttleFunction = myThrottle(diaplayT, 1000);
throttleElement.addEventListener('keyup', throttleFunction);

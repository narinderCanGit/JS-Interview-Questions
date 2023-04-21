let count = 0;
function getData() {
  console.log("Fetching Data" + count++);
}

function myDebounce(cb, d) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(cb, d);
  };
}

const betterFunction = myDebounce(getData, 1000);
